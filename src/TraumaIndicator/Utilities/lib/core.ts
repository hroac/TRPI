import { Client, CountParams, CountResponse, GetParams, GetResponse, ScrollParams, SearchParams, SearchResponse } from 'elasticsearch';
import { Readable } from 'stream';

import { AnyClass, Indexed, IndexedClass } from '../types';
import { ArrayStream } from './array-stream';
import { IndexStore } from './index-store';
import { getIndexMetadata } from './metadata-handler';
import { buildBulkQuery, getQueryStructure, instantiateResult } from './tools';

export type IndexedGetParams = Indexed<GetParams>;
export type IndexedSearchParams = Indexed<SearchParams>;
export type IndexedCountParams = Indexed<CountParams>;

export const DEFAULT_BULK_SIZE = 100;

export interface ICoreOptions {
  indexPrefix?: string;
}

export class Core {
  /**
   * Return all Indexed classes
   */
  static getIndices(): AnyClass[] {
    return IndexStore.getAll();
  }
  constructor(private readonly client: Client, private readonly options: ICoreOptions) {}

  /**
   * Close the connection
   */
  close(): void {
    return this.client.close();
  }

  /**
   * Bulk index multiple documents
   * @param cls
   * @param documentsOrStream
   */
  bulkIndex<T>(cls: IndexedClass<T>, documentsOrStream: Array<Partial<T>> | Readable, bulkSize: number = DEFAULT_BULK_SIZE): Promise<void> {
    return new Promise((resolve, reject) => {
      const items: Array<Partial<T>> = [];
      const stream: Readable = Array.isArray(documentsOrStream) ? new ArrayStream(documentsOrStream) : documentsOrStream;

      const send = async (): Promise<void> => {
        try {
          if (items.length) {
            const query = buildBulkQuery<T>(this.options, 'index', cls, items.splice(0, items.length));
            await this.client.bulk(query);
          }
        } catch (err) {
          close(err as Error);
        }
      };

      const onError = (err: Error) => close(err);

      const onData = async (item: Partial<T>) => {
        items.push(item);
        if (items.length >= bulkSize) {
          stream.pause();
          await send();
          stream.resume();
        }
      };
      const onEnd = async () => {
        await send(); // flush items
        close();
      };

      const close = (err?: Error) => {
        stream.removeListener('error', onError);
        stream.removeListener('data', onData);
        stream.removeListener('end', onEnd);
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      };

      stream.on('error', onError);
      stream.on('data', onData);
      stream.on('end', onEnd);
    });
  }

  /**
   * Get the number of documents for the cluster, index, type, or a query
   * @param clsOrParams
   */
  count<T>(clsOrParams: IndexedClass<T>, countParams?: IndexedCountParams): Promise<CountResponse> {
    let params: CountParams;
    const metadata = getIndexMetadata(this.options, clsOrParams);
    params = { index: metadata.index, type: metadata.type, ...countParams };
    return this.client.count(params);
  }

  /**
   * Adds a typed JSON document in a specific index, making it searchable.
   * If a document with the same index, type, and id already exists, an error will occur.
   *
   *  Usage:
   *    index(user)
   *    index(user, "id")
   *    index(User, { id: "id", name: "Bob"}}
   *    index(User, "id", { name: "Bob" })
   *
   * @param docOrClass
   * @param docOrId
   * @param doc
   */
  create<T>(docOrClass: T | IndexedClass<T>, docOrId?: Partial<T> | string, doc?: Partial<T>): Promise<any> {
    const params = getQueryStructure<T>(this.options, docOrClass, docOrId, doc);

    if (!params.document) {
      throw new Error('Document is missing');
    }

    return this.client.create({
      index: params.index,
      type: params.type,
      id: params.id,
      body: params.document,
    });
  }

  /**
   * Delete a typed JSON document from a specific index based on its id
   * @param docOrClass
   * @param docId
   */
  delete<T>(docOrClass: T | IndexedClass<T>, docId?: string): Promise<any> {
    const params = getQueryStructure<T>(this.options, docOrClass, docId);

    if (!params.id) {
      throw new Error(`ID is missing when deleting a ${params.cls.name}`);
    }

    return this.client.delete({
      index: params.index,
      type: params.type,
      id: params.id,
    });
  }

  /**
   * Return a document by its id
   * @param cls
   * @param idOrParams
   */
  async get<T>(cls: IndexedClass<T>, idOrParams: string | IndexedGetParams): Promise<{ response: GetResponse<T>; document: T }> {
    const metadata = getIndexMetadata(this.options, cls);
    const params: GetParams = { index: metadata.index, type: metadata.type, ...(typeof idOrParams === 'string' ? { id: idOrParams } : idOrParams) };
    const response = await this.client.get<T>(params);
    const document = instantiateResult(cls, response._source);
    return { response, document };
  }

  /**
   * Index a document or a literal
   * When not providing an id, ES will generate it
   *
   *  Usage:
   *    index(user)
   *    index(user, "id")
   *    index(User, { id: "id", name: "Bob"}}
   *    index(User, "id", { name: "Bob" })
   *
   * @param docOrClass
   * @param docOrId
   * @param doc
   */
  async index<T>(docOrClass: T | IndexedClass<T>, docOrId?: Partial<T> | string, doc?: Partial<T>): Promise<any> {
    const params = getQueryStructure<T>(this.options, docOrClass, docOrId, doc);

    if (!params.document) {
      throw new Error('Document is missing');
    }

    const response = await this.client.index({
        index: params.index,
        type: params.type,
        id: params.id,
        body: params.document,
    });

    return response
  }

  /**
   * Scroll a search request (retrieve the next set of results) after specifying the scroll parameter in a search() call
   *
   * @param cls
   * @param params
   */
  async scroll<T>(cls: IndexedClass<T>, params: ScrollParams): Promise<{ response: SearchResponse<T>; documents: T[] }> {
    const response = await this.client.scroll<T>(params);
    const documents = response.hits.hits.map(hit => instantiateResult(cls, hit._source));
    return { response, documents };
  }

  /**
   * Return documents matching a query...
   *
   * @param cls
   * @param params
   */
  async search<T>(cls: IndexedClass<T>, params: IndexedSearchParams): Promise<{ response: SearchResponse<T>; documents: T[] }> {
    const metadata = getIndexMetadata(this.options, cls);
    const response = await this.client.search<T>({ index: metadata.index, type: metadata.type, ...params });
    const documents = response.hits.hits.map(hit => instantiateResult(cls, hit._source));
    return { response, documents };
  }

  /**
   * Update a document using either an instance or a literal object
   * id is mandatory to update a document
   *
   *  Usage:
   *    update(user)
   *    update(User, { id: "id", name: "Bob"}}
   *    update(user, "id")
   *    update(User, "id", { name: "Bob" })
   *
   * @param docOrClass
   * @param docOrId
   * @param doc
   */
  async update<T>(docOrClass: T | IndexedClass<T>, docOrId?: Partial<T> | string, doc?: Partial<T>): Promise<any> {
    const params = getQueryStructure<T>(this.options, docOrClass, docOrId, doc);

    if (!params.document) {
      throw new Error('Document is missing');
    }

    if (!params.id) {
      throw new Error(`ID is missing when updating a ${params.cls.name}`);
    }

      let response;

      try {
          response = await this.client.update({
              index: params.index,
              type: params.type,
              id: params.id,
              body: { doc: params.document },
          });
      } catch (error : any) {
          response = error.body
      }
   
    return response
  }
}

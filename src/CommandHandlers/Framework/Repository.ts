import { Guid } from 'guid-typescript';
import { FirebaseRepository } from '../../Firebase/FirebaseRepository';
import { Domain } from '../../Domains/Domain';
import { SearchReport } from '../../Reports/Framework';

export class Repository {
    /**
     * Retrieve or create a domain entity using Firebase.
     * @param id The unique identifier for the entity.
     * @param type The class type for the SearchReport or entity.
     * @param dom The class type for the domain.
     * @returns A promise resolving to the domain instance.
     */
    async Get<T extends SearchReport, K extends Domain>(
        id: Guid,
        type: { new (id: Guid): T },
        dom: { new (id: Guid): K }
    ): Promise<K> {
        const path = `${type.name}/${id.toString()}`;
        const entity = new type(id)
        // Fetch the entity data from Firebase
        let report = await FirebaseRepository.Get<T>(id, type);

        if (!report) {
            // Initialize a new record if not found
            const newEntity = new type(id);
            await FirebaseRepository.Put(newEntity);
            report = newEntity;
        }

        // Map Firebase data to the domain object
        const domain = new dom(id);
        Object.assign(domain, report);

        return domain;
    }

    /**
     * Save or update a domain entity in Firebase.
     * @param id The unique identifier for the entity.
     * @param type The class type for the SearchReport or entity.
     * @param data The data to be saved or updated.
     */
    async Put<T extends SearchReport>(id: Guid, type: { new (): T }, data: T): Promise<void> {
        const path = `${type.name}/${id.toString()}`;
        await FirebaseRepository.Put(data);
    }

    /**
     * Delete a domain entity from Firebase.
     * @param id The unique identifier for the entity.
     * @param type The class type for the SearchReport or entity.
     */
    async Delete<T extends SearchReport>(id: Guid, type: { new (id: Guid): T }): Promise<void> {
        const path = `${type.name}/${id.toString()}`;
        await FirebaseRepository.Delete(type);
    }
}

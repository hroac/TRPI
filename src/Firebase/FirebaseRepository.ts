import { initializeApp } from 'firebase/app';
import { getDatabase, ref, get, set, update, remove, query, orderByChild, startAt, endAt } from 'firebase/database';
import { Guid } from 'guid-typescript';

export class FirebaseRepository {
    private static firebaseConfig = {
        apiKey: "AIzaSyALxVy3esMmA2nNvbFzHl5628YaQ7qmnRM",
        authDomain: "trauma-indicator-b85b3.firebaseapp.com",
        projectId: "trauma-indicator-b85b3",
        storageBucket: "trauma-indicator-b85b3.firebasestorage.app",
        messagingSenderId: "356497060674",
        appId: "1:356497060674:web:befc7372f0a37d31d28edb",
        measurementId: "G-K84MQF0Z95",
        databaseURL: "trauma-indicator-b85b3.firebaseapp.com",
      };

    private static app = initializeApp(FirebaseRepository.firebaseConfig);
    private static db = getDatabase(FirebaseRepository.app);

    /**
     * Retrieve data from Firebase.
     * @param id The unique identifier of the entity.
     * @param entity The constructor of the entity type to retrieve.
     * @returns The retrieved data or `null` if not found.
     */
    public static async Get<T>(id: Guid, entity: { new(id: Guid): T }): Promise<T | null> {
        const path = `${entity.name}/${id.toString()}`;
        const dataRef = ref(FirebaseRepository.db, path);
        const snapshot = await get(dataRef);
        return snapshot.exists() ? (snapshot.val() as T) : null;
    }

    /**
 * Retrieve multiple records of a specific entity type from Firebase.
 * @param entity The constructor of the entity type to retrieve.
 * @returns A list of all records of the specified entity type.
 */
    public static async GetMany<T>(entity: { new(): T }): Promise<T[]> {
        const path = `${entity.name}`;
        const dataRef = ref(FirebaseRepository.db, path);
        const snapshot = await get(dataRef);
        return snapshot.exists() ? Object.values(snapshot.val()) as T[] : [];
    }


    /**
     * Write or overwrite data in Firebase.
     * @param data The entity instance to save. The `Id` property must be present.
     * @returns A promise resolving when the operation is complete.
     */
    public static async Put<T>(data: T): Promise<void> {
        const path = `${(data as any).constructor.name}/${(data as any).Id}`;
        const dataRef = ref(FirebaseRepository.db, path);
        await set(dataRef, data);
    }

    /**
     * Partially update data in Firebase.
     * @param data The partial entity data to update. The `Id` property must be present.
     * @returns A promise resolving when the operation is complete.
     */
    public static async Update<T>(data: Partial<T>): Promise<void> {
        const path = `${(data as any).constructor.name}/${(data as any).Id}`;
        const dataRef = ref(FirebaseRepository.db, path);
        await update(dataRef, data);
    }

    /**
     * Delete data from Firebase.
     * @param data The entity instance to delete. The `Id` property must be present.
     * @returns A promise resolving when the operation is complete.
     */
    public static async Delete<T>(data: T): Promise<void> {
        const path = `${(data as any).constructor.name}/${(data as any).Id}`;
        const dataRef = ref(FirebaseRepository.db, path);
        await remove(dataRef);
    }

    /**
     * Count records of a specific entity type in Firebase.
     * @param entity The constructor of the entity type whose records to count.
     * @returns The count of records for the specified entity type.
     */
    public static async Count<T>(entity: { new(): T }): Promise<number> {
        const path = `${entity.name}`;
        const dataRef = ref(FirebaseRepository.db, path);
        const snapshot = await get(dataRef);
        return snapshot.exists() ? Object.keys(snapshot.val()).length : 0;
    }

    /**
     * Search records in Firebase with optional filters or ranges.
     * @param entity The constructor of the entity type to search.
     * @param field The field to filter by.
     * @param startValue The start value for range queries (inclusive).
     * @param endValue The end value for range queries (inclusive).
     * @returns A list of matching records.
     */
    public static async Search<T>(
        entity: { new(): T },
        field: string,
        startValue: any,
        endValue: any
    ): Promise<T[]> {
        const path = `${entity.name}`;
        const dataRef = ref(FirebaseRepository.db, path);
        const q = query(dataRef, orderByChild(field), startAt(startValue), endAt(endValue));
        const snapshot = await get(q);
        return snapshot.exists() ? Object.values(snapshot.val()) as T[] : [];
    }
}

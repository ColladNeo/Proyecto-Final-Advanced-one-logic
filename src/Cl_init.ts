import initialData from './data.initial.js';
import storage from './tools/storage.js';

export function seedInitialData(storageKey: string): void {
    try {
        const raw = storage.get(storageKey);
        if (!raw) {
            storage.set(storageKey, JSON.stringify(initialData));
        }
    } catch (e) {
        // Silenciar errores de seed
    }
}

export default seedInitialData;

import nameDatabaseJson from './enhanced_name_database.json';
import type { NameDatabase } from './types';

export function loadNameDatabase(): NameDatabase {
  return nameDatabaseJson as NameDatabase;
}

export { nameDatabaseJson }; 
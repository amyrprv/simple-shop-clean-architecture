export abstract class RepositoryPort<T> {
  abstract insert(domain: T): Promise<void>;
  abstract findAll(): Promise<T[]>;
  abstract findOneById(id: string): Promise<T>;
  abstract findOneByFilter(filter: Partial<T>): Promise<T>;
  abstract delete(entity: T): Promise<boolean>;
}

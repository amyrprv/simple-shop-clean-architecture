export interface Mapper<D, T> {
    toDomain(entity: T): D;
    toPersistence(domain: D): T;
}
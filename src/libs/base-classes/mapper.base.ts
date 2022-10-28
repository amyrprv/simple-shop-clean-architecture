export interface Mapper<Domain, Entity> {
  toDomain(data: any): Domain;
  toPersistence(domain: Domain): Entity;
}

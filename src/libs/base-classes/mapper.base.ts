export interface Mapper<Model, Entity> {
  toModel(data: any): Model;
  toPersistence(model: Model): Entity;
}

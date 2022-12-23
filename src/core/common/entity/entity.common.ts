import { Code } from '../code/code.common';
import { Optional } from '../type/types.common';
import { Exception } from '../exception/exception.common';
import { ClassValidationDetails, ClassValidator } from '../utils/class-validator/class-validator.util';

export class Entity<TIdentifier extends string | number> {

  protected id: Optional<TIdentifier>;

  public getId(): TIdentifier {
    if (typeof this.id === 'undefined') {
      throw Exception.new({ code: Code.ENTITY_VALIDATION_ERROR, overrideMessage: `${this.constructor.name}: ID is empty.` });
    }

    return this.id;
  }

  public async validate(): Promise<void> {
    const details: Optional<ClassValidationDetails> = await ClassValidator.validate(this);
    if (details) {
      throw Exception.new({ code: Code.ENTITY_VALIDATION_ERROR, data: details });
    }
  }

}

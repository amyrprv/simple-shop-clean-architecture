import { ExceptionBase } from '@domain/libs/exceptions/exception.base';

export class ProductNotFoundException extends ExceptionBase {
  static readonly message = 'Product not found';

  public readonly code = 'PRODUCT.NOT_FOUND';

  constructor(metadata?: unknown) {
    super(ProductNotFoundException.message, undefined, metadata);
  }
}

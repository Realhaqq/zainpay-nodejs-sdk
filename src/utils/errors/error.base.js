/**
 * A custom error class for handling the library related errors.
 * @class BaseError
 */
class BaseError extends Error {
    /**
     * The BaseError Constructor.
     * @param {String} options.message - The error message if any.
     * @constructor BaseError
     */
    constructor(options = {}) {
      super();
      Error.captureStackTrace(this, this.constructor);
      this.name = this.constructor.name;
      this.message = options.message;
    }
}
  
module.exports = BaseError;
  
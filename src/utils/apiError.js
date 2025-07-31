// this file's code has not beend understood so we will come back here

class apiError extends Error {
  constructor(
    statusCode,
    success,
    message = "Something went wrong",
    stack = "",
    errors = []
  ) {
    super(message);
    this.statusCode = statusCode;
    this.erorrs = errors;
    this.message = message;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
export { apiError };

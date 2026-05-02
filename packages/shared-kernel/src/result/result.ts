export class Result<T> {
  public readonly isSuccess: boolean;

  public readonly isFailure: boolean;

  public readonly error?: string;

  private readonly value?: T;

  private constructor(
    isSuccess: boolean,
    error?: string,
    value?: T
  ) {
    this.isSuccess = isSuccess;
    this.isFailure = !isSuccess;
    this.error = error;
    this.value = value;

    Object.freeze(this);
  }

  public getValue(): T {
    if (!this.isSuccess || this.value === undefined) {
      throw new Error(
        "Cannot retrieve value from failed result."
      );
    }

    return this.value;
  }

  public static ok<U>(value?: U): Result<U> {
    return new Result<U>(true, undefined, value);
  }

  public static fail<U>(error: string): Result<U> {
    return new Result<U>(false, error);
  }
}
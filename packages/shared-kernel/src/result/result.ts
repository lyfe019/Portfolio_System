export class Result<TValue, TError extends Error> {
  private constructor(
    private readonly value: TValue | null,
    private readonly error: TError | null
  ) {}

  public static success<TValue>(
    value: TValue
  ): Result<TValue, never> {
    return new Result<TValue, never>(
      value,
      null as never
    );
  }

  public static failure<TError extends Error>(
    error: TError
  ): Result<never, TError> {
    return new Result<never, TError>(
      null as never,
      error
    );
  }

  public isSuccess(): boolean {
    return this.error === null;
  }

  public isFailure(): boolean {
    return !this.isSuccess();
  }

  public getValue(): TValue {
    if (this.isFailure()) {
      throw new Error(
        "Cannot retrieve the value from a failed result."
      );
    }

    return this.value as TValue;
  }

  public getError(): TError {
    if (this.isSuccess()) {
      throw new Error(
        "Cannot retrieve the error from a successful result."
      );
    }

    return this.error as TError;
  }
}
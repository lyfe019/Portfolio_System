import {
  ValidationError,
  InvariantViolationError
} from "../errors";

export class Guard {
  public static againstNullOrUndefined<T>(
    value: T | null | undefined,
    argumentName: string
  ): void {
    if (value === null || value === undefined) {
      throw new ValidationError(
        `${argumentName} cannot be null or undefined.`
      );
    }
  }

  public static againstEmptyString(
    value: string,
    argumentName: string
  ): void {
    if (value.trim().length === 0) {
      throw new ValidationError(
        `${argumentName} cannot be empty.`
      );
    }
  }

  public static againstOutOfRange(
    value: number,
    min: number,
    max: number,
    argumentName: string
  ): void {
    if (value < min || value > max) {
      throw new InvariantViolationError(
        `${argumentName} must be between ${min} and ${max}.`
      );
    }
  }

  public static againstEmptyArray<T>(
    value: T[],
    argumentName: string
  ): void {
    if (value.length === 0) {
      throw new ValidationError(
        `${argumentName} cannot be empty.`
      );
    }
  }

  public static againstNegative(
    value: number,
    argumentName: string
  ): void {
    if (value < 0) {
      throw new InvariantViolationError(
        `${argumentName} cannot be negative.`
      );
    }
  }
}
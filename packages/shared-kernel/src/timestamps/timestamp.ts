import { Guard } from "../utilities";

export class Timestamp {
  private constructor(
    private readonly value: Date
  ) {}

  public static now(): Timestamp {
    return new Timestamp(new Date());
  }

  public static from(
    value: Date | string
  ): Timestamp {
    const date =
      value instanceof Date
        ? value
        : new Date(value);

    Guard.againstNullOrUndefined(
      date,
      "timestamp"
    );

    if (isNaN(date.getTime())) {
      throw new Error(
        "Invalid timestamp value."
      );
    }

    return new Timestamp(date);
  }

  public toDate(): Date {
    return new Date(this.value);
  }

  public toISOString(): string {
    return this.value.toISOString();
  }

  public isBefore(
    other: Timestamp
  ): boolean {
    return (
      this.value.getTime() <
      other.value.getTime()
    );
  }

  public isAfter(
    other: Timestamp
  ): boolean {
    return (
      this.value.getTime() >
      other.value.getTime()
    );
  }

  public equals(
    other: Timestamp
  ): boolean {
    return (
      this.value.getTime() ===
      other.value.getTime()
    );
  }
}
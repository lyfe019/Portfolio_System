export class Timestamp {
  private readonly value: Date;

  constructor(date?: Date) {
    this.value = date ?? new Date();
  }

  public getValue(): Date {
    return this.value;
  }

  public toISOString(): string {
    return this.value.toISOString();
  }
}
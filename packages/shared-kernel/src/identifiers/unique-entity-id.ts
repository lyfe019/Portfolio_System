import { randomUUID } from "node:crypto";

export class UniqueEntityId {
  private readonly value: string;

  constructor(id?: string) {
    this.value = id ?? randomUUID();
  }

  public toString(): string {
    return this.value;
  }

  public equals(id?: UniqueEntityId): boolean {
    if (!id) {
      return false;
    }

    return this.value === id.toString();
  }
}
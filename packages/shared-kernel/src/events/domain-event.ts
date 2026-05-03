import { UniqueEntityId } from "../identifiers";

export abstract class DomainEvent {
  public readonly occurredOn: Date;

  protected constructor(
    public readonly aggregateId: UniqueEntityId
  ) {
    this.occurredOn = new Date();
  }

  public get eventName(): string {
    return this.constructor.name;
  }
}
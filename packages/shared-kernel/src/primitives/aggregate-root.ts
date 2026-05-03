import { DomainEvent } from "../events";
import { UniqueEntityId } from "../identifiers";
import { Entity } from "./entity";

export abstract class AggregateRoot<TProps>
  extends Entity<TProps>
{
  private readonly domainEvents: DomainEvent[] =
    [];

  protected constructor(
    props: TProps,
    id: UniqueEntityId
  ) {
    super(props, id);
  }

  protected addDomainEvent(
    event: DomainEvent
  ): void {
    this.domainEvents.push(event);
  }

  public clearEvents(): void {
    this.domainEvents.length = 0;
  }

  public getDomainEvents(): DomainEvent[] {
    return [...this.domainEvents];
  }
}
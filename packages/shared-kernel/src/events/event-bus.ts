import { DomainEvent } from "./domain-event";
import { EventHandler } from "./event-handler";

type EventClass<T extends DomainEvent> =
  new (...args: any[]) => T;

export class EventBus {
  private handlers = new Map<
    string,
    EventHandler<any>[]
  >();

  public subscribe<T extends DomainEvent>(
    event: EventClass<T>,
    handler: EventHandler<T>
  ): void {
    const eventName = event.name;

    const existingHandlers =
      this.handlers.get(eventName) ?? [];

    existingHandlers.push(handler);

    this.handlers.set(
      eventName,
      existingHandlers
    );
  }

  public async publish(
    event: DomainEvent
  ): Promise<void> {
    const handlers =
      this.handlers.get(event.eventName) ?? [];

    await Promise.all(
      handlers.map(handler =>
        handler.handle(event)
      )
    );
  }
}
export interface DomainEvent {
  eventId: string;

  occurredAt: Date;

  eventName: string;
}
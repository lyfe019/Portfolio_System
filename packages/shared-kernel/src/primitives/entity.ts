import { UniqueEntityId } from "../identifiers";

export abstract class Entity<TProps> {
  protected constructor(
    protected readonly props: TProps,
    protected readonly id: UniqueEntityId
  ) {}

  public equals(
    object?: Entity<TProps>
  ): boolean {
    if (!object) {
      return false;
    }

    if (this === object) {
      return true;
    }

    return this.id.equals(object.id);
  }

  public getId(): UniqueEntityId {
    return this.id;
  }
}
import { Specification } from "./specification";

export class NotSpecification<T>
  extends Specification<T>
{
  constructor(
    private readonly specification: Specification<T>
  ) {
    super();
  }

  public isSatisfiedBy(
    candidate: T
  ): boolean {
    return !this.specification.isSatisfiedBy(
      candidate
    );
  }
}
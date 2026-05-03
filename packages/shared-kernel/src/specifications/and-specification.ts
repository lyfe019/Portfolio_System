import { Specification } from "./specification";

export class AndSpecification<T>
  extends Specification<T>
{
  constructor(
    private readonly left: Specification<T>,
    private readonly right: Specification<T>
  ) {
    super();
  }

  public isSatisfiedBy(
    candidate: T
  ): boolean {
    return (
      this.left.isSatisfiedBy(candidate) &&
      this.right.isSatisfiedBy(candidate)
    );
  }
}
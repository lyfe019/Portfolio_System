export abstract class Specification<T> {
  public abstract isSatisfiedBy(
    candidate: T
  ): boolean;

  public and(
    specification: Specification<T>
  ): Specification<T> {
    return new AndSpecification(
      this,
      specification
    );
  }

  public or(
    specification: Specification<T>
  ): Specification<T> {
    return new OrSpecification(
      this,
      specification
    );
  }

  public not(): Specification<T> {
    return new NotSpecification(this);
  }
}
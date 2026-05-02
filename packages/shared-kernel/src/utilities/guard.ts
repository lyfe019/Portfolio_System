export class Guard {
  public static againstNullOrUndefined(
    value: unknown,
    fieldName: string
  ): void {
    if (value === null || value === undefined) {
      throw new Error(
        `${fieldName} cannot be null or undefined`
      );
    }
  }
}
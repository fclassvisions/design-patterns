import ImmutableStudentBuilder from "./ImmutableStudentBuilder";

export default class ImmutableStudent {
  constructor(
    readonly firstName: string,
    readonly lastName: string,
    readonly gpa: number,
    readonly year: string
  ) {}

  static builder(): ImmutableStudentBuilder {
    return new ImmutableStudentBuilder();
  }

  toBuilder(): ImmutableStudentBuilder {
    return new ImmutableStudentBuilder()
      .setFirstName(this.firstName)
      .setLastName(this.lastName)
      .setGpa(this.gpa)
      .setYear(this.year);
  }
}

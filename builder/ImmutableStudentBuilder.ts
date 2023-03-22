import ImmutableStudent from "./ImmutableStudent";

export default class ImmutableStudentBuilder {
  private firstName: string;
  private lastName: string;
  private gpa: number;
  private year: string;

  constructor() {}

  setFirstName(firstName: string): ImmutableStudentBuilder {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): ImmutableStudentBuilder {
    this.lastName = lastName;
    return this;
  }

  setGpa(gpa: number): ImmutableStudentBuilder {
    this.gpa = gpa;
    return this;
  }

  setYear(year: string): ImmutableStudentBuilder {
    this.year = year;
    return this;
  }

  build(): ImmutableStudent {
    return new ImmutableStudent(
      this.firstName,
      this.lastName,
      this.gpa,
      this.year
    );
  }
}

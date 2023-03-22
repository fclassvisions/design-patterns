export default class MutableStudent {
  public firstName: string;
  public lastName: string;
  public gpa: number;
  public year: string;

  constructor() {}

  static builder(): MutableStudent {
    return new MutableStudent();
  }

  setFirstName(firstName: string): MutableStudent {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): MutableStudent {
    this.lastName = lastName;
    return this;
  }

  setGpa(gpa: number): MutableStudent {
    this.gpa = gpa;
    return this;
  }

  setYear(year: string): MutableStudent {
    this.year = year;
    return this;
  }
}

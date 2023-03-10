import ImmutableStudent from "./ImmutableStudent";
import MutableStudent from "./MutableStudent";

// Mutable Approach
const student1 = MutableStudent.builder()
  .setFirstName("Connie")
  .setLastName("Sheer");
console.log("Student 1:", student1);
student1.gpa = 3.2;
console.log("Student 1 after change: %o \n", student1);

// Immutable Approach
const student2 = ImmutableStudent.builder()
  .setFirstName("James")
  .setGpa(2.5)
  .setYear("freshman")
  .build();

const student3 = student2.toBuilder().setLastName("Fry").build();

console.log("Student 2:", student2);
console.log("Student 3:", student3);

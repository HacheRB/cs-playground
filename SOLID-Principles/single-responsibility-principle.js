/* https://en.wikipedia.org/wiki/Single-responsibility_principle

Every component should have one and only one responsibility.

https://en.wikipedia.org/wiki/Cohesion_(computer_science)
Cohesion is the degree to which the various parts of a software component are related.

https://en.wikipedia.org/wiki/Coupling_(computer_programming)
Coupling is defined as the level of inter dependency between various software components. Tight coupling is a undesired effect.

We look for high cohesion and loose coupling

Example:
*/

class Square {
  constructor(side) {
    this.side = side
  }

  calculateArea() {
    return side * side
  }
}

// We separe the methods to increase cohesion between classes, Square class deals with the square measurements and SquareUI deals with the rendering of the square.

class SquareUI {
  draw() {
    //Render the square
  }
  rotate(degree) {
    //Rotate the square
  }
}

// Another Example:

class Student {
  constructor(studentId, studentDOB, studentAddress, hasScholarship) {
    this.studentId = studentId
    this.studentDOB = studentDOB
    this.studentAddress = studentAddress
    this.hasScholarship = hasScholarship
  }

  save() {
    new StudentRepository().save(this)
  }

  calculateTuition() {
    new TuitionCalculator(this)
  }

  get studentId() {
    return this.studentId
  }
  setStudentId(studentId) {
    this.studentId = studentId
  }
}

class StudentRepository {
  save(student) {
    //Here we would handle DB connection, saving student to db, etc.
  }
}

class TuitionCalculator {
  calculateTuition(student) {
    // Here we would calculate a student's tuition.
    if (student.hasScholarship) {
      //Apply X
    } else {
      //Apply Y
    }
  }
}

'use strict';

class Group {
  constructor() {
    this._students = [];
  }
  addStudent(student) {
    this._students.push(student);
  }
  getAverageStudentMark(name) {
    let student = this._students.find(student => student.name === name);
    let {marks} = student;
    return marks.reduce((total, mark) => total + mark) / marks.length;
  }
  getAverageMark() {
    let groupMark = this._students.flatMap(({marks}) => marks);
    return groupMark.reduce((total, mark) => total + mark) / groupMark.length;
  }  
}

class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }
}

const feGroup = new Group();

feGroup.addStudent(new Student('John Doe', [10, 10, 5, 10]));
feGroup.addStudent(new Student('Alex Smith', [10, 9, 8]));
feGroup.addStudent(new Student('Bob Johnson', [9, 10, 10, 8]));

console.log(feGroup._students);
console.log(feGroup.getAverageStudentMark('John Doe'));
console.log(feGroup.getAverageMark());
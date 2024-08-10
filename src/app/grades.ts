import { Courses } from "./courses";
import { Students } from "./students";

export class Grades {
    gradeId: number;
    gradeName: String;
    student: Students;
    course: Courses;
    userId: number;
    
    constructor(
      gradeId:number,
      gradeName:String,
      student: Students,
      course: Courses,
      userId: number
    ) {
      this.gradeId = gradeId;
      this.gradeName = gradeName;
      this.student = student;
      this.course = course;
      this.userId = userId;
    }
}

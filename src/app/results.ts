import { Courses } from "./courses";
import { Department } from "./department";
import { Enrollment } from "./enrollment";
import { Grades } from "./grades";
import { Students } from "./students";

export class Results {
    resultId: number;
    grade: Grades;
    student: Students;
    course: Courses;
    department :Department;
    enrollment: Enrollment;
    userId: number;
    
    constructor(
      resultId:number,
      grade:Grades,
      student: Students,
      course: Courses,
      department:Department,
      enrollment:Enrollment,
      userId: number
    ) {
      this.resultId = resultId;
      this.grade = grade;
      this.student = student;
      this.course = course;
      this.userId = userId;
      this.department = department;
      this.enrollment = enrollment
    }
}

import { Courses } from "./courses";
import { Department } from "./department";
import { Enrollments } from "./enrollments";
import { Students } from "./students";

export class Admissions {
    admissionId: number;
    student: Students;
    course: Courses;
    department: Department;
    enrollment: Enrollments;
    admissionDate: Date;
    userId: number;
    
    constructor(
      admissionId:number,
      student: Students,
      course: Courses,
      department: Department,
      enrollment: Enrollments,
      admissionDate: Date,
      userId: number
    ) {
      this.admissionId = admissionId;
      this.student = student;
      this.course = course;
      this.department = department;
      this.enrollment = enrollment;
      this.admissionDate = admissionDate;
      this.userId = userId;
    }
}

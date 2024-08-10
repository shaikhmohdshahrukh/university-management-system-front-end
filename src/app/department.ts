import { Professors } from "./professors";

export class Department {

    departmentId: number;
    departmentName: String;
    professor: Professors;
    userId: number;
    
    constructor(
        departmentId: number,
        departmentName: String,
        professor: Professors,
        userId: number
    ) {
      this.departmentId = departmentId;
      this.departmentName = departmentName;
      this.professor = professor;
      this.userId = userId;
    }
}

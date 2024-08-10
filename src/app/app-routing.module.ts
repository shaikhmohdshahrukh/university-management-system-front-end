import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { StudentsComponent } from './students/students.component';
import { ProfessorsComponent } from './professors/professors.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { AddProfessorComponent } from './add-professor/add-professor.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { UpdateProfessorComponent } from './update-professor/update-professor.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { ViewProfessorComponent } from './view-professor/view-professor.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProfessorloginComponent } from './professorlogin/professorlogin.component';
import { AdmissionsComponent } from './admissions/admissions.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {
    path:'students',component:StudentsComponent
  },  
  {
    path:'addstudents',component:AddStudentComponent
  },  
  {
    path:'update-student/:studentId', component:UpdateStudentComponent
  },
  {
    path:'view-student/:studentId', component:ViewStudentComponent
  },
  {
    path:'courses',component:CoursesComponent
  },
  {
    path:'addcourses',component:AddCourseComponent
  },
  {
    path:'update-course/:courseId', component:UpdateCourseComponent
  },
  {
    path:'view-course/:courseId', component:ViewCourseComponent
  },
  {
    path:'professors',component:ProfessorsComponent
  },
  {
    path:'addprofessors',component:AddProfessorComponent
  },
  {
    path:'update-professor/:professorId', component:UpdateProfessorComponent
  },
  {
    path:'view-professor/:professorId', component:ViewProfessorComponent
  },  
  {
    path:'about',component:AboutUsComponent
  },
  {
    path:'contact',component:ContactComponent
  },
  {
    path:'professorlogin', component:ProfessorloginComponent
  },
  {
    path:'admissions',component:AdmissionsComponent
  },  
  {
    path:'home', component:HomeComponent
  },
  {
    path:'results', component:ResultsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

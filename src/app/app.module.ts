import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './students/students.component';
import { CoursesComponent } from './courses/courses.component';
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


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    CoursesComponent,
    ProfessorsComponent,
    AddStudentComponent,
    AddProfessorComponent,
    AddCourseComponent,
    AboutUsComponent,
    UpdateStudentComponent,
    UpdateProfessorComponent,
    UpdateCourseComponent,
    ViewStudentComponent,
    ViewCourseComponent,
    ViewProfessorComponent,
    ContactComponent,
    HomeComponent,
    ProfessorloginComponent,
    AdmissionsComponent,
    ResultsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

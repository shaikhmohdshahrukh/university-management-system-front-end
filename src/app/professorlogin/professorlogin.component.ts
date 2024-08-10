import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-professorlogin',
  templateUrl: './professorlogin.component.html',
  styleUrl: './professorlogin.component.css'
})
export class ProfessorloginComponent {

  username:string='';
  password:string='';

  inValidLogin=false;
  constructor(private router:Router){}

  onLogin(){
    if(this.username=="shahrukh"&&this.password=="srk123"){
      sessionStorage.setItem('username',this.username);

      this.router.navigate(['professors'])
      return true;
    }
    else{
      alert("Wrong Credintials")
      this.router.navigate(['home'])
      return false;
    }
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    data={
      username:'',
      password:'',
    }
    constructor(private router: Router){}
    login(loginForm :NgForm)
    {
      if(this.data.username==="lokyanaik" && this.data.password==="admin"){
      alert("login successfull")
      
      this.router.navigate(['/home']);
      // this.router.navigateByUrl('/home'); we can use both it will 
      }
      else{
        alert("invalid username or Password!")
      }
      loginForm.reset();
    }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string|undefined;
  password:string|undefined;
  constructor(private router:Router){}
  login()
  {
    if(this.username=='jsuvetha1@gmail.com'&& this.password=='@123'){
      this.router.navigate(['/dashboard']);
    }
    else
    {
      alert('Invaild Credentials');
    }
     
    }
  

}

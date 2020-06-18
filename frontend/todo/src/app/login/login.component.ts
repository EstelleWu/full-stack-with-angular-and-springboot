import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'qiugaoqishuang'
  password = ''
  errorMessage = " invalid credential"
  invalidLogin = false

  // router

  // dependency injection
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){

    console.log(this.username);
    if (this.username === 'qiugaoqishuang' && this.password === ''){
      // redirect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }
  }
}

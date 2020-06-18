import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){

    console.log(this.username);
    if (this.username === 'qiugaoqishuang' && this.password === 'dummy'){
      this.invalidLogin = false;
    }
  }
}

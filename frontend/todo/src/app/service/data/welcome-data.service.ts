import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

export class helloWorldBean{
  constructor(public message:string){}
}
@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  // httpclient is a module that need to import in -> app.module.ts
  constructor(
    private http: HttpClient
  ) { }

  executeHelloWorldBeanService(){
    return this.http.get<helloWorldBean>('http://localhost:8080/hello-world-bean');
    // console.log("Execute Hello World Bean Service")
  }

  executeHelloWorldBeanServiceWithPathVariable(name){
    return this.http.get<helloWorldBean>(`http://localhost:8080/hello-world/path-variable/${name}`);
    // console.log("Execute Hello World Bean Service")
  }
}

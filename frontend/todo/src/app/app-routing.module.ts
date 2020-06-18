import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';


const routes: Routes = [
  { path: '', component: LoginComponent},  // default path
  { path: 'login', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent}, 
  { path: '**', component: ErrorComponent} // for any other paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

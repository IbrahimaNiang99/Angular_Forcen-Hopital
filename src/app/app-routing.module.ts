import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {NgModule} from "@angular/core";


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', pathMatch: 'full' , redirectTo: '/login'},
  //{path: '**', pathMatch: 'full' , component: NotFoundConponentComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

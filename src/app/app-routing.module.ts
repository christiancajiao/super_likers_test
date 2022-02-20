import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { HomePageComponent } from "./home-page/home-page.component"

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full' },

  {path: "home", component: HomePageComponent},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

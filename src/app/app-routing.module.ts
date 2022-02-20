import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component"

const routes: Routes = [
  {path: "", redirectTo: "/login", pathMatch: 'full' },

  {path: "home", loadChildren: () => import('./components/home/home.module').then(x => x.HomeModule)},
  {path: "login", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

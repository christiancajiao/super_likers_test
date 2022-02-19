import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from "@angular/router";
import { LoginComponent } from './login/login.component'
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';


const routes: Routes = [
  {path: '',redirectTo: 'login', component: AppComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

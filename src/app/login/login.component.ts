import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

 login = {
    name: "",
    password: ""
  }

isLoggedIn = false;

fakeData = {
  name: "carlos",
  password: "password"
}
 
  setLocalStorage(){

    localStorage.setItem("name", this.login.name)
    localStorage.setItem("password", this.login.password)
  }
  obtainLocalStorage() {
    let name = localStorage.getItem("name")
    let password = localStorage.getItem("password")
  }
  checkNameAndPassword() {
    if (this.login.name === this.fakeData.name && this.login.password === this.fakeData.password) {
      this.isLoggedIn = true
    }

    console.log(this.isLoggedIn)
  }
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.isLoggedIn)

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}

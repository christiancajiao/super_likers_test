import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

form: FormGroup;


 login = {
    name: "",
    password: ""
  }

isLoggedIn = false;


 
  setLocalStorage(){

    localStorage.setItem("name", this.form.value.name)
    localStorage.setItem("password", this.form.value.password)
    console.log(this.form.value)

    if(localStorage.getItem("name") === "carlos" && localStorage.getItem("password") === "password") {
      this.router.navigate(['home'])
    } else {
      this.error()
    }
  }
  error() {
    this._snackBar.open('Invalid Name or Password'), '', {
      duration: 300,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    }
  }
  constructor( private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router) { 
    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required]

    })
  }

  ngOnInit(): void {

  }
  

}

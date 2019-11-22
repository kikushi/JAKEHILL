import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import *as firebase from 'firebase'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      username: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {
    const email = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const username = this.signupForm.get('username').value;
     
    
    
    this.authService.createNewUser(email, password).then(
      () => {
        firebase.firestore().collection("users").doc(firebase.auth().currentUser.uid.toString()).set({
          Username: username,
          Email: email,
          Uid: firebase.auth().currentUser.uid.toString()
        })
       
        this.router.navigate(['/auth/signin']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }
}
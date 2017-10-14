import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  myForm: FormGroup;
  constructor(private router: Router) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      user: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
    this.myForm.get('user').setValue('gt');
    this.myForm.get('password').setValue('hack');
  }

  onSubmit() {
    const user = this.myForm.value.user;
    const pw = this.myForm.value.password;
    if (user === 'gt' && pw === 'hack') {
      this.router.navigate(['/groundToAirport']);
    }
  }

  signIn(user, pass) {
    console.log('Hello');
    this.router.navigate(['/groundToAirport']);
    if (user === 'bob' && pass === 'hack') {
      user = 'lol';
    }
  }

}

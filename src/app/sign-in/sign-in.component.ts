import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  myForm: FormGroup;
  name: string;
  constructor(private router: Router, private appService: AppService) { }

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
    if (pw === 'hack' && (user === 'Jane' || user === 'Bob')) {
      this.appService.setUser(user);
      this.router.navigate(['/groundToAirport']);
    }
  }
}

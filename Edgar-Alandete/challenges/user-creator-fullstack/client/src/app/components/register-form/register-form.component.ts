import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service'
import { first } from 'rxjs/operators';
import {User} from '../../models/user'


@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export default class RegisterFormComponent implements OnInit {
  form : FormGroup
  
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      surname: [''],
      email: [''],
      country: [''],
      age: [],
      direction: {
          street: '',
          streetNumber: '',
          door: '',
          flat: '',
          cp: '',
      },
    });
  }
  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.form = formBuilder.group({
      name: formBuilder.control('initial value', Validators.required)
  });
  }

  
  
  onSubmit() {
    const userToAdd : User = {...this.form.value}
    debugger;
    this.userService.addUser(userToAdd)
    .pipe(first())
    .subscribe(
        user => {
            console.log(user);
            // this.alertService.success('Registration successful', { keepAfterRouteChange: true });
            // this.router.navigate(['../login'], { relativeTo: this.route });
        },
        error => {
          console.log(error);
            // this.alertService.error(error);
            // this.loading = false;
        });
  }
}

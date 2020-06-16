import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { isNotTemporalEmailValidator } from '../../utils/validators';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.page.html',
  styleUrls: ['./reactive-form.page.scss'],
})
export class ReactiveFormPage implements OnInit {

  public user: User;

  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {

    this.user = {
      name: null,
      birthDate: null,
      sex: null,
      phone: null,
      email: null
    };

    // It also could be: this.user = {} as User;
  }

  public ngOnInit(): void {

    // this.basicFormInitialization();

    this.complexFormInitialization();
  }

  private basicFormInitialization(): void {

    this.form = this.formBuilder.group({
      name: '',
      birthDate: '',
      sex: '',
      phone: '',
      email: ''
    });

    const user = this.userService.getStaticUser();
    this.form.patchValue(user);
  }

  private complexFormInitialization(): void {

    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthDate: ['', Validators.required],
      sex: '',
      phone: '',
      email: ['', [Validators.required, Validators.email,
        isNotTemporalEmailValidator]]
    });

    this.userService.getRemoteUser().subscribe((user: User) => {
      this.form.patchValue(user);
    }, (error: HttpErrorResponse) => {
      console.error('Error getting remote user...', error);
    });
  }

  public submitForm(): void {
    this.user = this.form.value;
  }
}

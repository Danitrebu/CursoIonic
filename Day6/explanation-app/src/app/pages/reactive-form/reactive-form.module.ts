import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ReactiveFormPage } from './reactive-form.page';
import { UserService } from '../../services/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: ReactiveFormPage
    }]),
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    ReactiveFormPage
  ],
  providers: [
    UserService
  ]
})
export class ReactiveFormPageModule {}

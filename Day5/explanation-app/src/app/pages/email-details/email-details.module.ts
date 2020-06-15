import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailDetailsPage } from './email-details.page';
import { EmailsService } from '../../services/emails.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([{
      path: '',
      component: EmailDetailsPage
    }])
  ],
  declarations: [
    EmailDetailsPage
  ],
  providers: [
    EmailsService
  ]
})
export class EmailDetailsPageModule {}

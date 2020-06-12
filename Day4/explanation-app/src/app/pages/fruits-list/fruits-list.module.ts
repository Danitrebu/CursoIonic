import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../../components/components.module';
import { FruitsListPage } from './fruits-list.page';
import { FruitsService } from '../../services/fruits.service';

@NgModule({
  declarations: [
    FruitsListPage
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: FruitsListPage
      }
    ])
  ],
  providers: [
    FruitsService
  ]
})
export class FruitsListPageModule {}

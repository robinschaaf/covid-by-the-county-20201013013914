import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { SharedModule } from './../../components/shared.module';

import { ItemDetailsAnimationPage } from './item-details-animation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemDetailsAnimationPage
      }
    ])
  ],
  declarations: [ItemDetailsAnimationPage],
  exports:[ItemDetailsAnimationPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ItemDetailsAnimationPageModule {}

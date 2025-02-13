import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { ModalPage } from './modal.page';
import { PluralPipe } from './pluralize.pipe';
// import { IntroPageModule } from './../intro-page/intro-page.module';
import { SharedModule } from './../../components/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // IntroPageModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ModalPage, PluralPipe],
  entryComponents: [HomePage],
  exports: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [PluralPipe]
})
export class HomePageModule { }

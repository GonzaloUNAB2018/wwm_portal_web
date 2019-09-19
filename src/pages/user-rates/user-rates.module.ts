import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRatesPage } from './user-rates';

@NgModule({
  declarations: [
    UserRatesPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRatesPage),
  ],
})
export class UserRatesPageModule {}

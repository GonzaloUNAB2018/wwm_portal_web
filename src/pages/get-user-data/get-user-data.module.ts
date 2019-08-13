import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GetUserDataPage } from './get-user-data';

@NgModule({
  declarations: [
    GetUserDataPage,
  ],
  imports: [
    IonicPageModule.forChild(GetUserDataPage),
  ],
})
export class GetUserDataPageModule {}

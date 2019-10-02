import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExerciceDataListPage } from './exercice-data-list';

@NgModule({
  declarations: [
    ExerciceDataListPage,
  ],
  imports: [
    IonicPageModule.forChild(ExerciceDataListPage),
  ],
})
export class ExerciceDataListPageModule {}

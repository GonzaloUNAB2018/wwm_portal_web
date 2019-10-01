import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';

/**
 * Generated class for the ExerciceDataListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exercice-data-list',
  templateUrl: 'exercice-data-list.html',
})
export class ExerciceDataListPage {

  uid: any;
  id: any;
  nickName: any;
  run: any;
  exercices: any[];
  exers: any[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afProvider: AngularfireProvider
    
    ) {

      this.uid = navParams.get('uid');
      this.id = navParams.get('id');
      this.nickName = navParams.get('nickName');
      this.run = navParams.get('run');
      //this.typeId = navParams.get('typeId')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciceDataListPage');
    this.afProvider.getAllExerciceData(this.uid, this.id).valueChanges().subscribe(exercices=>{
      this.exercices = exercices;
      console.log(this.exercices.valueOf())
      
      /*for(var n = 0; n <= this.exercices.length; n++ ){
        if(n<this.exercices.length){
          console.log(this.exercices[n]);
          //this.exers=this.exercices[n]
          console.log(n)
        }else{

        }
      }*/
    })
  }

  

}

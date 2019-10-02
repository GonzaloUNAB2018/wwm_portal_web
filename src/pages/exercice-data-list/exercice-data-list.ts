import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { DataPage } from '../data/data';

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
  type: any;
  exercices: any[] = []
  exers: any[];
  numbers: any[]=[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afProvider: AngularfireProvider
    
    ) {

      this.uid = navParams.get('uid');
      this.id = navParams.get('id');
      this.nickName = navParams.get('nickName');
      this.run = navParams.get('run');
      this.type = navParams.get('type');
      console.log(this.uid, this.id, this.nickName, this.run, this.type);
      this.afProvider.getExerciceData(this.uid, this.id).valueChanges().subscribe(list=>{
        if(list){
          this.exercices = list;
          console.log(this.exercices)
        }
      })
      //this.typeId = navParams.get('typeId')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciceDataListPage');
    
    /*this.afProvider.getAllExerciceData(this.uid, this.id).valueChanges().subscribe(exercices=>{
      this.exercices = exercices;
      console.log(this.exercices[0]);
      this.numbers=this.array(this.exercices[0]);
      //console.log(this.numbers.keys())
      
      
    })*/
  }

  array(exs: any[]){
    return exs;
  }

  toExcerciceData(eid, type, save_time){
    this.navCtrl.push(DataPage, 
      {
        id:this.id, 
        eid:eid, 
        type:this.type, 
        save_time:save_time, 
        nickName: this.nickName, 
        run: this.run,
        uid: this.uid
      }
    )
  }

  

}

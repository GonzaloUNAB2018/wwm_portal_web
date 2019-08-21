import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { DataPage } from '../data/data';

/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  uid: any
  nickName: any;
  run: any;
  exercices: any[];
  id: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afProvider: AngularfireProvider
    ) {
    this.uid = navParams.get('uid');
    this.nickName = navParams.get('nickName');
    this.run = navParams.get('run')
    if(this.uid != 0){
      this.afProvider.getUserExercisesData(this.uid).valueChanges().subscribe(exercices=>{
        this.exercices = exercices;
        
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
  }

  toExreciceData(tipo){
    this.navCtrl.push(DataPage, {tipo:tipo, uid:this.uid, nickName:this.nickName, run:this.run})
  }

  



}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { DataPage } from '../data/data';
import { ProfileUserPage } from '../profile-user/profile-user';
import { UserRatesPage } from '../user-rates/user-rates';

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
  loadingNewData: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afProvider: AngularfireProvider,
    public loadingCtrl: LoadingController
    ) {
    this.uid = navParams.get('uid');
    this.nickName = navParams.get('nickName');
    this.run = navParams.get('run');

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    if(this.uid != 0){
      this.afProvider.getUserExercisesData(this.uid).valueChanges().subscribe(exercices=>{
        this.exercices = exercices;
        if(this.exercices){

        }
      })
    }
  }

  toUserData(){
    this.navCtrl.push(ProfileUserPage, {uid: this.uid})
  }

  toExreciceData(id){
    this.navCtrl.push(DataPage, {id:id, uid:this.uid, nickName:this.nickName, run:this.run})
  }

  toRates(){
    this.navCtrl.push(UserRatesPage, {uid:this.uid, nickName:this.nickName, run:this.run});
  }

  loadingData(){
    this.loadingNewData = this.loadingCtrl.create({
      content: 'Obteniendo datos'
    });

    this.loadingNewData.present();
  }

  



}

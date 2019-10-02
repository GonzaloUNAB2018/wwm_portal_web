import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { ProfileUserPage } from '../profile-user/profile-user';
import { UserRatesPage } from '../user-rates/user-rates';
import { ExerciceDataListPage } from '../exercice-data-list/exercice-data-list';

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
    console.log(this.uid)
    console.log('ionViewDidLoad UserPage');
    if(this.uid != 0){
      this.afProvider.getUserExercisesData(this.uid).valueChanges().subscribe(exercices=>{
        this.exercices = exercices;
        if(this.exercices){
          console.log(this.exercices.length)
        }
      })
    }
  }

  toUserData(){
    this.navCtrl.push(ProfileUserPage, {uid: this.uid})
  }

  toExreciceData(id, type){
    console.log(id, type)
    this.navCtrl.push(ExerciceDataListPage, {id:id, type:type, uid:this.uid, nickName:this.nickName, run:this.run})
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

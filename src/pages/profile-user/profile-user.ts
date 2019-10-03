import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { Observable } from 'rxjs';
import { format } from 'rut.js';

@IonicPage()
@Component({
  selector: 'page-profile-user',
  templateUrl: 'profile-user.html',
})
export class ProfileUserPage {
  uid: any;
  usr_: any;
  profilePhoto: string;
  userFromFB: Observable<any>;
  run: string;
  age: any;
  photo: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afProvider : AngularfireProvider
    ) {
      this.uid = this.navParams.get('uid');
      this.photo = this.navParams.get('photo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUserPage');
    this.afProvider.getUserInfo(this.uid).valueChanges().subscribe(user=>{
      this.usr_ = user;
      if(this.usr_){
        this.profilePhoto = this.photo;
        this.run = format(this.usr_.run);
        this.age = this.getAge(this.usr_.dateBirth);
      }
    });
    this.userFromFB = this.afProvider.getUserInfo(this.uid).valueChanges();
  }

  getAge(dateBirth){
    var date = dateBirth;
    var d = new Date(date).getTime();
    var toDay = new Date().getTime();
    var calc = toDay - d;
    var seconds = calc/1000;
    var minutes = seconds/60;
    var hours = minutes/60;
    var days = hours/24;
    var mounths = days/30.5;
    var years = mounths/12;
    return Math.trunc(years)
  }

}

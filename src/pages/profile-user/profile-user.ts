import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { Observable } from 'rxjs';

/**
 * Generated class for the ProfileUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile-user',
  templateUrl: 'profile-user.html',
})
export class ProfileUserPage {
  uid: any;
  usr_: any;
  profilePhoto: string;
  userFromFB: Observable<any>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afProvider : AngularfireProvider
    ) {
      this.uid = this.navParams.get('uid')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileUserPage');
    this.afProvider.getUserInfo(this.uid).valueChanges().subscribe(user=>{
      this.usr_ = user;
      if(this.usr_){
        this.profilePhoto = this.usr_.profilePhoto;
      }
    });
    this.userFromFB = this.afProvider.getUserInfo(this.uid).valueChanges();
  }

}

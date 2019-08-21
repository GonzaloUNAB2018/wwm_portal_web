import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { HomePage } from '../home/home';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  //user = this.afAuth.auth.currentUser;
  //uid = this.user.uid;
  email: any;
  password: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afAuth: AngularFireAuth,
    public loadingCtrl: LoadingController
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    if(this.email === "a@a.cl"){
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then(()=>{
        this.navCtrl.setRoot(HomePage);
        this.loadingFromLogin();
      })
    }else{
      alert('Su Email no tiene privilegios!')
    }
  }

  loadingFromLogin(){
    const loading = this.loadingCtrl.create({
         content: 'Please wait...',
         duration: 2000
       });
    
       loading.present();
  }

}

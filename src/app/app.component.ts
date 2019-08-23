import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../models/user';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  //rootPage:any = LoginPage;
  uid: any;
  user = {} as User


  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private afAuth: AngularFireAuth
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.afAuth.auth.onAuthStateChanged(user=>{
        if (user){
          //this.uid = this.afAuth.auth.currentUser.uid;
          
            this.nav.setRoot(HomePage);
            
          }else{
            this.nav.setRoot(LoginPage);
            //this.logged = false;
          }        
      });
    });
  }
}


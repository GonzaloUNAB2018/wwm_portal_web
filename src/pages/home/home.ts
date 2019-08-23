import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { UserPage } from '../user/user';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users : any[];
  

  myUser = this.afAuth.auth.currentUser;
  uid = this.myUser.uid;
  loadingContent: string;
  loadingAlert: any;

  constructor(
    public navCtrl: NavController,
    private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private afProvider: AngularfireProvider,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
    ) {
      console.log(this.uid);
      this.loadingContent='Obteniendo datos de usuarios'
      this.loading(this.loadingContent);
  }

  ionViewDidEnter() {
    
    this.afProvider.getUsersList().valueChanges().subscribe(users=>{
      this.users=users;
      console.log(this.users);
      if(users){
        this.loadingAlert.dismiss();
      }
    })
  };

  toUserDataBase(uid, nickName, run){
    this.navCtrl.push(UserPage, {uid:uid, nickName:nickName, run:run})
  }

  logout(){
    const alert = this.alertCtrl.create({
      title: 'Confirme',
      message: '¿Realmente desea salir de la sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: () => {
            console.log('Buy clicked');
            this.signOut();
          }
        }
      ]
    });
    alert.present();
  }
  
  signOut(){
    this.loadingContent='Cerrando Sesión'
    this.loading(this.loadingContent);
    this.afAuth.auth.signOut().then(()=>{
      this.navCtrl.setRoot(LoginPage).then(()=>{
        this.loadingAlert.dismiss();
      })
    })
  }

  loading(loadingContent: string){
    this.loadingAlert = this.loadingCtrl.create({
        content: loadingContent,
      });
      this.loadingAlert.present();
  }

}

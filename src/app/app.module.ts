import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//FIREBASE
import {firebase} from './firebase.module';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPageModule } from '../pages/login/login.module';
import { AngularfireProvider } from '../providers/angularfire/angularfire';
import { HttpClientModule } from '@angular/common/http';
import { UserPageModule } from '../pages/user/user.module';
import { DataPageModule } from '../pages/data/data.module';
import { CommonModule } from '@angular/common';
import { ProfileUserPageModule } from '../pages/profile-user/profile-user.module';
import { UserRatesPageModule } from '../pages/user-rates/user-rates.module';



@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    LoginPageModule,
    UserPageModule,
    DataPageModule,
    ProfileUserPageModule,
    UserRatesPageModule,
    CommonModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularfireProvider
  ]
})
export class AppModule {}

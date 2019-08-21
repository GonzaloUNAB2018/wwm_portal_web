import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

/*
  Generated class for the AngularfireProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AngularfireProvider {

  

  constructor(
    public http: HttpClient,
    private afDb: AngularFireDatabase,
    ) {
    console.log('Hello AngularfireProvider Provider');
  }

  public getUsersList(){
    return this.afDb.list('Pacientes'); 
  }

  public getUserExercisesData(uid){
    return this.afDb.list('Pacientes/'+uid+'/Ejercicios')
  }

  public getExerciceData(uid, type){
    return this.afDb.list('Pacientes/'+uid+'/Ejercicios/'+type)
  }

  

  

}

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
    return this.afDb.list('Pacientes/Datos_Personales'); 
  }

  public getUserExercisesData(uid){
    //return this.afDb.list('Ejercicios_Pacientes/Ejercicios/'+uid+'/Ejercicios/', ref=> ref.orderByChild('id'))
    return this.afDb.list('Ejercicios_Pacientes/Ejercicios/'+uid, ref=> ref.orderByChild('id'))
  }

  public getExerciceData(uid, type, number: number){
    return this.afDb.list('Pacientes/'+uid+'/Ejercicios/'+type+'/Datos', ref=> ref.limitToFirst(number))
  }

  public getAllExerciceData(uid, typeId){
    return this.afDb.list('Ejercicios_Pacientes/Ejercicios/'+uid+'/'+typeId+'/Datos');
  }

  public getUserInfo(uid){
    return this.afDb.object('Pacientes/'+uid+'/User_Info')
  }

  public getUserHearthRates(uid){
    return this.afDb.list('Pacientes/'+uid+'/Hearth_Rates/')
  }

  

  

}

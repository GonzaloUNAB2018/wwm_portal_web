import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { DataPage } from '../data/data';
import { ExportToCsv } from 'export-to-csv';


@IonicPage()
@Component({
  selector: 'page-exercice-data-list',
  templateUrl: 'exercice-data-list.html',
})
export class ExerciceDataListPage {

  uid: any;
  id: any;
  nickName: any;
  run: any;
  type: any;
  exercices: any[] = []
  exers: any[];
  numbers: any[]=[]
  array: any[] = [];
  data: any;
  deteNow: string;
  hr: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public afProvider: AngularfireProvider,
    public loadingCtrl: LoadingController
    
    ) {

      this.uid = navParams.get('uid');
      this.id = navParams.get('id');
      this.nickName = navParams.get('nickName');
      this.run = navParams.get('run');
      this.type = navParams.get('type');
      console.log(this.uid, this.id, this.nickName, this.run, this.type);
      this.afProvider.getExerciceData(this.uid, this.id).valueChanges().subscribe(list=>{
        if(list){
          this.exercices = list;
          console.log(this.exercices)
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExerciceDataListPage');
  }

  toExcerciceData(eid, type, save_time){
    this.navCtrl.push(DataPage, 
      {
        id:this.id, 
        eid:eid, 
        type:this.type, 
        save_time:save_time, 
        nickName: this.nickName, 
        run: this.run,
        uid: this.uid
      }
    )
  }

  downloadAllData(data){
    var h : number = 0
    for(var n = 0; n <= this.exercices.length; n++){
      //console.log(this.exercices[n].Datos);      
      if(n === this.exercices.length-1){
        break
      }
    };
    return this.exercices[n].Datos;
  }
  

  result(){
    console.log(this.downloadAllData(this.array))
  }

  exportToCSV(){
    
    const loading = this.loadingCtrl.create({
      spinner: 'hide',
      content: 'Loading Please Wait...'
    });
    loading.present();

    setTimeout(()=>{
      var today = new Date();
      var seg = Number(today.getSeconds());
      var ss = String(today.getSeconds());
      var min = Number(today.getMinutes());
      var mi = String(today.getMinutes());
      var hh = String(today.getHours());
      var dd = String(today.getDate());
      var mm = String(today.getMonth() + 1); //January is 0!
      var yyyy = today.getFullYear();
      this.deteNow = yyyy+'-'+mm+'-'+dd;
      if(min>=0&&min<10){
        mi = 0+mi
      };
      if(seg>=0&&seg<10){
        ss = 0+ss
      };
      this.hr = hh+':'+mi+':'+ss;
  
      const options = { 
        fieldSeparator: ',',
        filename: this.type+'_'+this.nickName+'_'+this.run+'_'+this.deteNow+'_'+this.hr,
        quoteStrings: '"',
        decimalSeparator: '.',
        showLabels: true, 
        showTitle: true,
        title: '',
        useTextFile: false,
        useBom: true,
        useKeysAsHeaders: true,
      };
     
    const csvExporter = new ExportToCsv(options);
     
    csvExporter.generateCsv(this.array);
    }, 2000)

    setTimeout(() => {
      loading.dismiss();
    }, 3000);

    
  }

  toChartPage(){
    alert('En desarrollo')
  }

  

}

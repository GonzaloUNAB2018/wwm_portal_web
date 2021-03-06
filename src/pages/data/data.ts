import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { ExportToCsv } from 'export-to-csv';


@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  type: any;
  uid: any;
  run: any;
  eid: any;
  datas: any[];
  allDatas: any[];
  data = {
    alt : null,
    date : null,
    id : null,
    lat : null,
    lng : null,
    speed : null,
    steps : null,
    time : null,
    type : null,
    x: null,
    y: null,
    z: null,

  }

  //Caminata
  alt: any;
  date: any;
  id: any;
  lat: any;
  lng: any;
  speed: any;
  steps: any;
  time: any;
  //type: any;

  //Saltos-ABS
  x: any;
  y: any;
  z: any;
  nickName: any;

  caminata: boolean;
  abdominales: boolean;
  saltos: boolean;

  hr: string;
  deteNow: string;
  header: any[];
  number: number = 30;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afProvider: AngularfireProvider,
    public loadingCtrl: LoadingController,
    ) {
      this.eid = navParams.get('eid');
      this.id = navParams.get('id');
      this.type = navParams.get('type')
      if(this.type === 'Caminata'){
        this.caminata = true;
      }else if(this.type === 'Saltos'){
        this.saltos = true;
      }else if(this.type = 'Abdominales'){
        this.abdominales = true;
      }
      this.uid = navParams.get('uid');
      this.run = navParams.get('run');
      this.nickName = navParams.get('nickName');
      console.log(this.eid, this.id, this.type, this.uid, this.run, this.nickName);

      
  }

  ionViewDidEnter() {
    console.log('Ejercicios_Pacientes/Ejercicios/'+this.uid+'/'+this.id+'/Grupos/'+this.eid)
    this.afProvider.getExerciceDetailData(this.uid, this.id, this.eid, 10).valueChanges().subscribe(datas=>{
      this.datas = datas;
      console.log(this.datas);
      for(var n=0; n <= this.datas.length; n++){
        console.log(this.datas[n].id);
        if(n = this.datas.length){
          break
        }
      }
      if(this.type==="Caminata"){
        this.caminata= true;
      }else{
        this.caminata=false;
      }
    })
  }

  doInfinite(infiniteScroll) {
    this.number = this.number+15;
    console.log('Begin async operation');

    setTimeout(() => {
      this.afProvider.getExerciceDetailData(this.uid, this.id, this.eid, this.number).valueChanges().subscribe(datas=>{
        this.datas = datas;
      })

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  exportToCSV(){

    this.afProvider.getAllExerciceData(this.uid, this.id, this.eid).valueChanges().subscribe(allDatas=>{
      this.allDatas = allDatas
    });
    
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
     
    csvExporter.generateCsv(this.allDatas);
    }, 2000)

    setTimeout(() => {
      loading.dismiss();
    }, 3000);

    
  }

  toChartPage(){
    alert('En desarrollo')
  }



}

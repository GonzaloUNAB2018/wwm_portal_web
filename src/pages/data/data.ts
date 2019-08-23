import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { ExportToCsv } from 'export-to-csv';


/**
 * Generated class for the DataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data',
  templateUrl: 'data.html',
})
export class DataPage {

  tipo: any;
  uid: any;
  run: any;
  datas: any[];
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
    z: null
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
  type: any;

  //Saltos-ABS
  x: any;
  y: any;
  z: any;
  nickName: any;

  caminata: boolean;

  hr: string;
  deteNow: string;
  header: any[]

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afProvider: AngularfireProvider
    ) {
      this.tipo = navParams.get('tipo');
      this.uid = navParams.get('uid');
      this.run = navParams.get('run');
      this.nickName = navParams.get('nickName');
      console.log(this.tipo, this.nickName)

      this.afProvider.getExerciceData(this.uid, this.tipo).valueChanges().subscribe(datas=>{
        this.datas = datas;
        console.log(this.datas)
        if(this.tipo==="Caminata"){
          this.caminata= true;
          //this.header=['ID', 'Fecha', 'Hora', 'Latitud', 'Longitud', 'Altura (cota)', 'Velocidad']
        }else{
          this.caminata=false;
          //this.header=['ID', 'Fecha', 'Hora', 'Vector X', 'Vector Y', 'Vector Z']
        }
        

        
      
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DataPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let data = 0; data < 20; data++) {
        this.datas.push( this.datas.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

  exportToCSV(){

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
      filename: this.tipo+'_'+this.nickName+'_'+this.run+'_'+this.deteNow+'_'+this.hr,
      quoteStrings: '"',
      decimalSeparator: '.',
      showLabels: true, 
      showTitle: true,
      title: '',
      useTextFile: false,
      useBom: true,
      useKeysAsHeaders: true,
      //header: this.header
    };
   
  const csvExporter = new ExportToCsv(options);
   
  csvExporter.generateCsv(this.datas);
  }

  toChartPage(){
    alert('En desarrollo')
  }



}

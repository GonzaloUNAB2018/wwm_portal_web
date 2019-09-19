import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { AngularfireProvider } from '../../providers/angularfire/angularfire';
import { ExportToCsv } from 'export-to-csv';

/**
 * Generated class for the UserRatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-rates',
  templateUrl: 'user-rates.html',
})
export class UserRatesPage {

  uid: any;
  run: any;
  nickName: any;
  allRates: any[];
  deteNow: string;
  tipo: string = 'Pulsos_Cardiacos';
  hr: string;
  rates: number = 0;
  hableButton: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private afProvider : AngularfireProvider,
    public loadingCtrl : LoadingController
    ) {

      this.uid = navParams.get('uid');
      this.run = navParams.get('run');
      this.nickName = navParams.get('nickName');
      console.log(this.nickName)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserRatesPage');
    
    const loading_one = this.loadingCtrl.create({
      content: 'Obteniendo informacion de pulsaciones...'
    });
    loading_one.present();

    setTimeout(() => {
      this.afProvider.getUserHearthRates(this.uid).valueChanges().subscribe(allRates=>{
        this.allRates = allRates;
        if(this.allRates){
          this.rates = this.allRates.length;
          if(this.rates > 0){
            this.hableButton = true;
          };
          loading_one.dismiss();
        }
      });
    }, 1000);

  }

  exportToCSV(){
    
    const loading = this.loadingCtrl.create({
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
        filename: this.tipo+'_'+this.nickName+'_'+this.run+'_'+this.deteNow+'_'+this.hr,
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
     
    csvExporter.generateCsv(this.allRates);
    }, 2000)

    setTimeout(() => {
      loading.dismiss();
    }, 3000);

    
  }

}

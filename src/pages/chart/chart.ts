import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
/**
 * Generated class for the ChartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chart',
  templateUrl: 'chart.html',
})
export class ChartPage {

  @ViewChild(Content) content: Content;
  view: number[] = [700, 300];
  data: any[] = [];
  isRealtime: boolean;
  showXAxisLabel: boolean;
  showYAxisLabel: boolean;
  showLegend: boolean;
  interval: any;

  

  //datas: any[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,

    ) {
      this.data = this.generateData();

      //this.datas = navParams.get('datas');
      //console.log(this.datas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChartPage');
    this.applyDimensions();
    window.addEventListener('resize', () => {
      this.applyDimensions();
    }, false);
  }

  ionViewDidLeave() {
    clearInterval(this.interval);
    window.removeEventListener('resize', ()=>{
      alert('Bye')
    });
  }

  toggleRealTime( event: Event ) {
    event.preventDefault();
    this.isRealtime = !this.isRealtime;
    if ( this.isRealtime ) {
      this.interval = setInterval(() => {
        this.updateData();
      }, 1000);
    }else {
      clearInterval(this.interval);
    }
  }

  updateData() {
    this.data = this.generateData();
  }

  applyDimensions() {
    const width = this.content.getContentDimensions().contentWidth - 50;
    const state = width >= 320;
    this.showXAxisLabel = state;
    this.showYAxisLabel = state;
    this.showLegend = state;
    this.view = [width, 300];
  }
  

  private generateData() {
    return [
      {
        'name': 'Germany',
        'value': 31229
      },
      {
        'name': 'United States',
        'value': 19869
      },
      {
        'name': 'France',
        'value': 21359
      },
      {
        'name': 'United Kingdom',
        'value': 20598
      },
      {
        'name': 'Spain',
        'value': 56009
      },
      {
        'name': 'Italy',
        'value': 24090
      }
    ];
  }


}

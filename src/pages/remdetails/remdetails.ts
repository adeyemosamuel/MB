import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-remdetails',
  templateUrl: 'remdetails.html',
})
export class RemdetailsPage {

  selectedItem: any;
  id: number;
  r: any;
  iData: any = [];
  stateData: any = [];
  countryData: any = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    this.iData= this.appdata.getID();
    this.selectedItem= this.navParams.get('r');
    console.log(this.navParams.get('r'));
    
  } 

  next(){
    this.navCtrl.push('Remd2Page', {
      selectedItem:this.selectedItem,
      
    });
  }
}

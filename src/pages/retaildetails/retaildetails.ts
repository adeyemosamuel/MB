import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';


@IonicPage()
@Component({
  selector: 'page-retaildetails',
  templateUrl: 'retaildetails.html',
})
export class RetaildetailsPage {
 
  selectedItem: any;
  id: number;
  f: any;
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
    this.selectedItem= this.navParams.get('f');
    console.log(this.navParams.get('f'));
    
  }
 
  next(){
    this.navCtrl.push('Rd2Page', {
      selectedItem:this.selectedItem,
      
    });
  }

}

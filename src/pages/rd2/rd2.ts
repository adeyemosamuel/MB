import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-rd2',
  templateUrl: 'rd2.html',
})
export class Rd2Page {
 
  selectedItem2: any;
  id: number;
  selectedItem:any;
  countryData: any = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, 
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.countryData = this.appdata.getCountry();
    this.selectedItem2= this.navParams.get('selectedItem');
    console.log(this.navParams.get('selectedItem'));
  }
 
  next(){
    this.navCtrl.push('Rd3Page', {
      selectedItem2:this.selectedItem2,
      
    });
  }

}

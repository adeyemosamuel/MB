import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-retaildetails',
  templateUrl: 'retaildetails.html',
})
export class RetaildetailsPage {
 
  selectedItem: any;
  id: number;
  f: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {

    this.selectedItem= this.navParams.get('f');
    console.log(this.navParams.get('f'));
    
  }

  next(){
    this.navCtrl.push('Rd2Page', {
      selectedItem:this.selectedItem,
      
    });
  }

}

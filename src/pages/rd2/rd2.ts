import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-rd2',
  templateUrl: 'rd2.html',
})
export class Rd2Page {
 
  selectedItem2: any;
  id: number;
  selectedItem:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem2= this.navParams.get('selectedItem');
    console.log(this.navParams.get('selectedItem'));
  }

  next(){
    this.navCtrl.push('Rd3Page', {
      selectedItem2:this.selectedItem2,
      
    });
  }

}

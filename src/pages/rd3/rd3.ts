import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-rd3',
  templateUrl: 'rd3.html',
})
export class Rd3Page {
  selectedItem3: any;
  selectedItem2: any;
  id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.selectedItem3= this.navParams.get('selectedItem2');
    console.log(this.navParams.get('selectedItem2'));
  }

  next(){
    this.navCtrl.push('Rd4Page', {
      selectedItem3:this.selectedItem3,
      
    });
  }

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-addforms',
  templateUrl: 'addforms.html',
})
export class AddformsPage {

  forms = "a";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }

}

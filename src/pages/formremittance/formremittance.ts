import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';


@IonicPage()
@Component({
  selector: 'page-formremittance',
  templateUrl: 'formremittance.html',
})
export class FormremittancePage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}

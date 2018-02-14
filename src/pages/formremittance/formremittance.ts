import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AppdataProvider } from '../../providers/appdata/appdata';

@IonicPage()
@Component({
  selector: 'page-formremittance',
  templateUrl: 'formremittance.html',
})
export class FormremittancePage {

  stateData: any = [];
  states: any;
  countries: any;
  countryData: any = [];


  constructor(public navCtrl: NavController, private appdata:AppdataProvider, private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData= this.appdata.getCountry();
  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}

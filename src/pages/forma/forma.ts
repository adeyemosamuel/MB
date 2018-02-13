import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AppdataProvider } from '../../providers/appdata/appdata';



@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {

  stateData: any = [];
  states: any;

  constructor(public navCtrl: NavController,private appdata:AppdataProvider, private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}

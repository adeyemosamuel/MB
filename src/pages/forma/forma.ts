import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';



@IonicPage()
@Component({
  selector: 'page-forma',
  templateUrl: 'forma.html',
})
export class FormaPage {

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }

}

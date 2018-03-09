import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-more',
  templateUrl: 'more.html',
})
export class MorePage {

  constructor(public navCtrl: NavController,public _app: App, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  swipe(event) {
    if(event.direction === 2) {
      this.navCtrl.parent.select(2);
    }
    if(event.direction === 4) {
      this.navCtrl.parent.select(0); 
    }
  }

  logout(){
    localStorage.removeItem("currentUser");
    this._app.getRootNav().setRoot('LoginPage');
  }

}

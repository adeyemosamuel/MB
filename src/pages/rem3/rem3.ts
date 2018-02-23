import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';

@IonicPage()
@Component({
  selector: 'page-rem3',
  templateUrl: 'rem3.html',
})
export class Rem3Page {
  payment: any;
amount: any;
charge: any;
applied: any;
info: any;
valid: any;
transfer: any;
estimated: any;

constructor(public navCtrl: NavController,
  private verify: VerifyServiceProvider,
  private alertCtrl: AlertController,
   public navParams: NavParams) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Rem3Page');
  }
  next(){
    // if (!this.verify.verifyNext3(this.payment, this.amount, this.charge, this.applied, this.info, this.valid, this.transfer,this.estimated)) {
    //   alert(this.verify.errorMessage);
    //   this.alertCtrl.create({
    //     subTitle: 'Message',
    //     message: this.verify.errorMessage
    //   }).present();
    //   return false;
    // }
    this.navCtrl.push('Rem4Page');
  }

}

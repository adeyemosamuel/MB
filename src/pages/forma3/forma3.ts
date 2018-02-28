import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { AppdataProvider } from '../../providers/appdata/appdata';


@IonicPage()
@Component({
  selector: 'page-forma3',
  templateUrl: 'forma3.html',
})
export class Forma3Page {

  
payment: any;
amount: any;
charge: any;
applied: any;
info: any;
valid: any;
transfer: any;
estimated: any;
purposeData:any = [];
amountData: any =[];
chargeData: any= []; 
accountData: any=[];
// formdetails: any={};
  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, 
    private verify: VerifyServiceProvider,
    private alertCtrl: AlertController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() { 
    // this.formdetails = this.appdata.getInfo();
    this.purposeData= this.appdata.getPurpose();
    this.amountData= this.appdata.getAmount();
    this.chargeData= this.appdata.getCharge();
    this.accountData= this.appdata.getAccount();
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
    this.navCtrl.push('Forma4Page');
  }

}

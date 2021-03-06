import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppdataProvider } from '../../providers/appdata/appdata';


@IonicPage()
@Component({
  selector: 'page-rd3',
  templateUrl: 'rd3.html',
})
export class Rd3Page {
  selectedItem3: any;
  selectedItem2: any;
  id: number;
  purposeData:any = [];
amountData: any =[];
chargeData: any= []; 
accountData: any=[]; 

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
     public navParams: NavParams) {
  }
 
  ionViewDidLoad() {
    this.purposeData= this.appdata.getPurpose();
    this.amountData= this.appdata.getAmount();
    this.chargeData= this.appdata.getCharge();
    this.accountData= this.appdata.getAccount();
    this.selectedItem3= this.navParams.get('selectedItem2');
    console.log(this.navParams.get('selectedItem2'));
  }

  next(){
    this.navCtrl.push('Rd4Page', {
      selectedItem3:this.selectedItem3,
      
    });
  }

}

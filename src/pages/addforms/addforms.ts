import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { AppdataProvider } from '../../providers/appdata/appdata';


@IonicPage()
@Component({
  selector: 'page-addforms',
  templateUrl: 'addforms.html',
})
export class AddformsPage {
  _FormRemittance: any[];
  _FormArray: any[];

  forms = "a";
  name:any;
  formnumber:any;
  status:any;
  date:any;
  f:any;
  selectedItem: any;
  searchTerm: any;
  // FormArray: any= {};
  FormArray: Array<any> = [];
  FormRemittance: Array<any> = [];

  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider, 
    private modalCtrl: ModalController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private server: ServerServiceProvider) {
  }

  ionViewDidLoad() {
    this.FormArray= this.appdata.getInfo();
    this.FormRemittance= this.appdata.getMoney();
    console.log(this.FormArray);
  
  }


  // async getFormAdetails() {
  //   let loader = this.loadingCtrl.create({
  //     spinner: "circles",
  //     content: 'Please wait....',
  //     duration:100
  //   });
  //   loader.present();

  //   let body = {
  //     username: 'Samuel',
  //   };

  //   try {
  //     let response = await this.server.processData(body, '/getFormAdetails');
  //     console.log(response);
  //     this.FormArray = response;

  //   } catch (err) {
  //     console.log(err);
  //   }

  //   loader.dismiss();
   

  // }

 

  retailRemittanceForm(){
    let modal = this.modalCtrl.create('FormremittancePage');
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
     
    });
  }

  retailForma(){
    let modal = this.modalCtrl.create('FormaPage');
    modal.present();
    modal.onDidDismiss(data => {
      console.log(data);
     
    });
  }

  swipe(event) {
    if(event.direction === 4) {
      this.navCtrl.parent.select(1);
    }
  }

  itemTapped(f){
    this.navCtrl.push('RetaildetailsPage', {
      f:f
    });
  }

  itemTapped2(r){
    this.navCtrl.push('RemdetailsPage', {
      r:r
    });
  }

  getItems(ev) {

    let searchKey = ev.target.value;
    if (this.forms === 'a') {
        this.filterFORMA(searchKey);
    } else {
        this.filterREMITTANCE(searchKey);
    }
}

filterFORMA(val) {

  if(!val || val.length < 1) {
      this.FormArray= this._FormArray;
      return;
  }

  if (val && val.trim() != '') {
      this.FormArray = this.FormArray.filter((item) => {
          return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
  }
}

  filterREMITTANCE(val) {
  
    if(!val || val.length < 1) {
        this.FormRemittance = this._FormRemittance;
        return;
    }

    if (val && val.trim() != '') {
        this.FormRemittance = this.FormRemittance.filter((item) => {
            return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
        });
    }

}


}


import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';


@IonicPage()
@Component({
  selector: 'page-addforms',
  templateUrl: 'addforms.html',
})
export class AddformsPage {

  forms = "a";
  FormArray: Array<any> = [];
  FormRemittance: Array<any> = [];

  constructor(public navCtrl: NavController, 
    private modalCtrl: ModalController, 
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private server: ServerServiceProvider) {
  }

  ionViewDidLoad() {

// this.getFormAdetails();
  
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

}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { Storage } from '@ionic/storage';


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
    private store: Storage,
    private server: ServerServiceProvider) {
  }

  ionViewDidLoad() {
    //temporal
   this.getFormaFromStorage();
   this.getFormRemittanceFromStorage();
  }

  //temporal function
  getFormaFromStorage() {
    this.store.get('addforms').then((val) => {
      this.FormArray = val;

    });
  }

  //temporal function
  getFormRemittanceFromStorage() {
    this.store.get('addforms').then((val) => {
      this.FormRemittance = val;
    });
  }

 

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

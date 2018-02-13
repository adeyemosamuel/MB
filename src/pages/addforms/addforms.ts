import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';


@IonicPage()
@Component({
  selector: 'page-addforms',
  templateUrl: 'addforms.html',
})
export class AddformsPage {

  forms = "a";

  constructor(public navCtrl: NavController, private modalCtrl: ModalController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
   
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

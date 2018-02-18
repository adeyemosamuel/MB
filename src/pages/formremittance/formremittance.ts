import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { Http } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-formremittance',
  templateUrl: 'formremittance.html',
})
export class FormremittancePage {
  name: any;
  address: any;
  town: any;
  countries: any;
  states: any;
  phone: any;
  route: any;
  identification: any;
  idnumber: any;
  comments: any;
  username: any;
  stateData: any = [];
  countryData: any = [];
  FormRemittance: Array<any> = [];


  constructor(public navCtrl: NavController,
    private appdata: AppdataProvider,
    private viewCtrl: ViewController,
    private verify: VerifyServiceProvider,
    private loadingCtrl: LoadingController,
    public http: Http,
    private store: Storage,
    private server: ServerServiceProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();
    // this.getUsernameFromStorage();
    
  }

  // async getUsernameFromStorage(){
  //   this.store.get('username').then((val) => {
  //     this.username = val;
  //   });
  // }


  selectCancel() {
    this.viewCtrl.dismiss('');
  }

  // Submit Form to Backend and save to storage

  SubmitFormRemittance() {

    if (!this.verify.verifyBeforeSubmit(this.name, this.address, this.town, this.countries, this.states, this.phone, this.route, this.identification, this.idnumber, this.comments)) {
      alert(this.verify.errorMessage);
      this.alertCtrl.create({
        subTitle: 'Error',
        message: this.verify.errorMessage
      }).present();
      return false;
    }

    let body = {
      name: this.name,
      address: this.address,
      town: this.town,
      countries: this.countries,
      states: this.states,
      phone: this.phone,
      route: this.route,
      identification: this.identification,
      idnumber: this.idnumber,
      comments: this.comments,
      username: this.username
    };
    console.log(body);

    this.server.processData(body, '/PostFormRemittance').then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err)
    });

    this.loadingCtrl.create({
      content: 'Saving...',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }


//temporal save

  // submitFormRemittance() {
  //   let body = {
  //     name: this.name,
  //     address: this.address,
  //     town: this.town,
  //     countries: this.countries,
  //     states: this.states,
  //     phone: this.phone,
  //     route: this.route,
  //     identification: this.identification,
  //     idnumber: this.idnumber,
  //     comments: this.comments
  //   };
  //   this.FormRemittance.push(body);
  //   this.store.set('addforms', this.FormRemittance );
  //   this.loadingCtrl.create({
  //     content: 'Saving...',
  //     duration: 3000,
  //     dismissOnPageChange: true
  //   }).present();
  //   this.navCtrl.setRoot('AddformsPage');
  // }

}

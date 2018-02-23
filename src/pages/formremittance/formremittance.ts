import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { AppdataProvider } from '../../providers/appdata/appdata';
import { ServerServiceProvider } from '../../providers/server-service/server-service';
import { VerifyServiceProvider } from '../../providers/verify-service/verify-service';
// import { Storage } from '@ionic/storage';
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
  email: any;
  postcode: any;
  airline: any;
  ticket: any;
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
    // private loadingCtrl: LoadingController,
    public http: Http,
    // private store: Storage,
    private server: ServerServiceProvider,
    private alertCtrl: AlertController,
    public navParams: NavParams) {
  } 

  ionViewDidLoad() {
    this.stateData = this.appdata.getState();
    this.countryData = this.appdata.getCountry();

  }

  selectCancel() {
    this.viewCtrl.dismiss('');
  }




  next() {

    // if (!this.verify.verifyNext(this.name, this.address, this.town, this.countries, this.states, this.phone, this.email, this.postcode, this.airline, this.ticket, this.route, this.identification, this.idnumber, this.comments)) {
    //   alert(this.verify.errorMessage);
    //   this.alertCtrl.create({
    //     subTitle: 'Message',
    //     message: this.verify.errorMessage
    //   }).present();
    //   return false;
    // }
    this.navCtrl.push('Rem2Page');
  }


}

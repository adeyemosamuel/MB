import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServerServiceProvider } from '../../providers/server-service/server-service';



@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 //   LoginData: any;

 userName: string = '';
 passWord: string = '';
 // disableButton: boolean = true; 



  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl: LoadingController,
     private store: Storage,
     private server: ServerServiceProvider) {
     
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async Login() {
    let loader = this.loadingCtrl.create({spinner: "circles", content: 'Please wait....', duration: 100});
    loader.present();

    let body = {
        userName: 'Bolande',
        passWord: 'password100'
    };

    try {
        let response = await this.server.processData(body, '/user/Signin');
        console.log(response);
        if (response.status === '00') {
            this.store.set('token', response.data.token);
            this.navCtrl.push('TabsPage');
        } else {
            alert(response.message);
        }
    } catch (err) {
        console.log(err);
    }
    loader.dismiss();
}



}

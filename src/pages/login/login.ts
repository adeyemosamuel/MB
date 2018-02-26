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
  
  username: string = '';
  password: string = '';
  // disabled: boolean = true;
  
 

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public loadingCtrl: LoadingController,
     private store: Storage,
     private server: ServerServiceProvider) {
     
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  // validateInput(val){
  //   if (this.username.trim != null && this.password != ''){
  //     this.disabled = false;
  //   }else{
  //     this.disabled = true;
  //   }
  // }

  async Login() {
    let loader = this.loadingCtrl.create({
      spinner: "circles",
      content: 'Please wait....',
      duration:100
    });
    loader.present();

    // let body = {
    //   username: 'morayo.temi-bello',
    //   password: 'chigbo'
    // };

    // try {
    //   let response = await this.server.processData(body, '/login');
    //   console.log(response);
    //   this.LoginForm = response;

    // } catch (err) {
    //   console.log(err);
    // }
  //  loader.dismiss();

    this.navCtrl.push('TabsPage');

  }
  
 


}

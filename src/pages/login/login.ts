import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
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
  LoginForm: FormGroup;
  successLogin: boolean;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public loadingCtrl: LoadingController,
     private store: Storage,
     private server: ServerServiceProvider) {
      this.LoginForm = formBuilder.group({
        username: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        password: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
  
      });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

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
    // this.store.set("username", this.username);
    // this.store.set("password", this.password);

    this.navCtrl.push('TabsPage');

  }
  
  //store login details in local storage

  saveLoginInfo(username, password) {
    if (this.successLogin) {
      this.store.set("username", this.username);
      this.store.set("password", this.password);
    } else {
      this.store.remove("UserName");
      this.store.remove("Password");
      //to clear storage
      this.store.clear();

      console.log('saveLoginInfo');
    }


  }


}

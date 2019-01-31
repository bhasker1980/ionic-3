import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';


@Component({
  selector: 'page-myjobs',
  templateUrl: 'myjobs.html'
})
export class MyjobsPage {

 signupform: FormGroup;
  userData = { "username": "", "password": ""};

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {

  }

  ngOnInit() {
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
    });

 }


goToRegister() {
   this.navCtrl.push(HomePage);
  }


 signin() {

    let alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'You are logged-in successfully... ',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(ProfilePage);
          }
        }
      ]
});

alert.present();

  }





}

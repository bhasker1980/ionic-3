import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfilePage } from '../profile/profile';
import { MyjobsPage } from '../myjobs/myjobs';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  signupform: FormGroup;
  userData = { "username": "", "password": "", "email": "", "name": "" };

  constructor(public navCtrl: NavController,public alertCtrl: AlertController) {
   if(window.localStorage.users_data){
   this.navCtrl.push(ProfilePage);
   }
  }

  ngOnInit() {
    let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
    this.signupform = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]),
      name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z ]*'), Validators.minLength(4), Validators.maxLength(30)]),
      email: new FormControl('', [Validators.required, Validators.pattern(EMAILPATTERN)]),
    });

 }


goToLogin() {
   this.navCtrl.push(MyjobsPage);
  }


 signup() {
    console.log(this.signupform.value);
    window.localStorage.users_data = JSON.stringify(this.signupform.value);
    let alert = this.alertCtrl.create({
      title: 'Success!',
      message: 'You are registered successfully... ',
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

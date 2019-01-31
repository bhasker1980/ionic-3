import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {



  constructor(public navCtrl: NavController) {
   if(window.localStorage.users_data){
   this.userData = JSON.parse(window.localStorage.users_data || '[]');
  console.log(this.userData.username)

   }else{
   this.navCtrl.push(HomePage);
   }


  }

goToRegister()
{
  this.navCtrl.push(HomePage);
}
  signOut(){
  window.localStorage.clear()
  this.navCtrl.push(HomePage);
  }

}

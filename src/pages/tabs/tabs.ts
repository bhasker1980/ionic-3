import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { MyjobsPage } from '../myjobs/myjobs';
import { MyequipmentsPage } from '../myequipments/myequipments';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = HomePage;
  profileRoot = ProfilePage;
  myjobsRoot = MyjobsPage;
  myequipmentsRoot =MyequipmentsPage;

  constructor() {

  }
}

import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  logged: Boolean = false;
  constructor(
  private storage: Storage
  ) {
      
  }

  async ionViewDidEnter() {
    this.logged = await this.storage.get('login');
  }

}

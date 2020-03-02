import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  logged: Boolean = false;
  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.logged = await this.storage.get('login');
  }

  async logout() {
    this.storage.clear();
    this.router.navigate(['/tabs/home']);
  }

}

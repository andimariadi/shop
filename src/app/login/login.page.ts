import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit() {
    this.storage.set('login', true);
    this.router.navigate(['tabs/home-logged']);
  }

}

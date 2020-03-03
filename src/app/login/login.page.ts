import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: any;
  password: any;
  failed: Boolean = true;
  temp: any=[];
  msg: any = '';
  constructor(
    private storage: Storage,
    private router: Router,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  async submit() {
    this.failed = true;
    const loading = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await loading.present();
    let postdata = new FormData();
    postdata.append('f_user_email', this.username);
    postdata.append('f_user_password', this.password);
    this.http.post( environment.url + 'login/process', postdata).subscribe(data => {
      this.temp = data;
      loading.dismiss();
      if(this.temp.success == true) {
        this.storage.set('login', true);
        this.router.navigate(['tabs/home-logged']);
        this.failed = this.temp.success;
        this.msg    = this.temp.info;
      } else {
        this.storage.set('login', false);
        this.failed = this.temp.success;
        this.msg    = this.temp.info;
      }
    }, error => {
      loading.dismiss();
      this.failed = true;
      this.msg    = "Error! Tidak dapat menghubungkan ke server!";
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: any = {};
  success: Boolean = false;
  msg: any = '';
  temp: any = [];
  constructor(
    private router: Router,
    private loadingCtrl: LoadingController,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

  async register() {
    this.success = false;
    const loading = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    await loading.present();
    if(this.data.password != this.data.repassword) {
      this.success = false;
      this.msg = '<strong>Error!</strong> Password tidak sesuai.';
    }
    let postdata = new FormData();
    postdata.append('f_user_fullname', this.data.fullname);
    postdata.append('f_user_name', this.data.username);
    postdata.append('f_user_email', this.data.email);
    postdata.append('f_user_password', this.data.password);
    this.http.post( environment.url + 'login/register', postdata).subscribe(data => {
      this.temp = data;
      loading.dismiss();
      if(this.temp.success == true) {
        this.router.navigate(['/login']);
        this.success = this.temp.error;
        this.msg    = this.temp.msg;
      } else {
        this.success = !this.temp.error;
        this.msg    = this.temp.msg;
      }
    }, error => {
      loading.dismiss();
      this.success = false;
      this.msg    = "Error! Tidak dapat menghubungkan ke server!";
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})

export class DashboardPage implements OnInit {

  user: User;
  public enc:boolean = false;

  constructor(private menu: MenuController, private authService: AuthService,public http: HttpClient) { 
    this.menu.enable(true);
  }

  ngOnInit() {
    
  }

  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );
  }

  encender()
    {
      
        let headers: HttpHeaders = new HttpHeaders({
          'Content-Type':  'application/json',
        })
      
      if(this.enc==true){
        
        this.http.get('http://127.0.0.1:8000/api/enviarr/id/1',{headers}).subscribe()
      }else{
        this.http.get('http://127.0.0.1:8000/api/enviarr/id/2',{headers}).subscribe()
      }
    }
  
}
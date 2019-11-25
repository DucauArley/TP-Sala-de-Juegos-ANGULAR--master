import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  @Output() loger: EventEmitter<any> = new EventEmitter<any>();
  logeado:boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() 
  {
    this.authService.isAuth().subscribe(auth => {
      if (auth)
      {
        this.logeado = true;
      } 
      else 
      {
        this.logeado = false;
      }
    });
  }

  Logout() 
  {
    this.authService.LogoutUsuario();
  }
  
}

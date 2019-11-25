import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
 public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  public logear:boolean = false;
  public logeado:boolean = false;

  constructor(private authService: AuthService, private router: Router) 
  {

  }
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() 
  {
    this.authService.isAuth().subscribe(auth => {
      if(auth)
      {
        this.logeado = true;
        console.log('user logged', this.authService);
      } 
      else 
      {
        this.logeado = false;
        console.log('NOT user logged', this.authService);
      }
    });
  }

  redirigir()
  {
    if(this.logeado)
    {
      this.router.navigate(['/Juegos']);
    }
    else
    {
      this.logear = true;
    }

  }

}

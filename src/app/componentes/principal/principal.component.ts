import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../servicios/auth.service';

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

  public logeado:boolean = false;

  constructor(private authService: AuthService) 
  {

  }
  public app_name: string = 'BookStore';
  public isLogged: boolean = false;
  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() 
  {
    this.authService.isAuth().subscribe(auth => {
      if (auth)
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

}

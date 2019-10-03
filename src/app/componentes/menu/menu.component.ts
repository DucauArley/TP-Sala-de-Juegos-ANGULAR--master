import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './../../servicios/auth.service';
import { auth } from 'firebase/app';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  logeado:boolean = false;

  constructor(private route: ActivatedRoute,
    private router: Router, /*private authService: AuthService*/) { }

    ngOnInit() {
    }
  
    Logout() 
    {
      //this.authService.LogoutUsuario();
    }

  Juego(tipo: string) {
    switch (tipo) {
      case 'Adivina':
          this.router.navigate(['/Juegos/Adivina']);
        break;
      case 'Agilidad':
          this.router.navigate(['/Juegos/Agilidad']);
        break;
      case 'AdivinaMasListado':
          this.router.navigate(['/Juegos/AdivinaMasListado']);
        break;
      case 'AgilidadaMasListado':
          this.router.navigate(['/Juegos/AgilidadaMasListado']);
        break;
      case 'PPT':
          this.router.navigate(['/Juegos/PiedraPapelTijera']);
        break;
      case 'Anagrama':
          this.router.navigate(['/Juegos/Anagrama']);
          break;
      case 'Tateti':
          this.router.navigate(['/Juegos/Tateti']);
          break;
      case 'Shooter':
          this.router.navigate(['/Juegos/Shooter']);
          break;
    }
  }

}

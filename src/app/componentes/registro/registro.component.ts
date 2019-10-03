import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from  './../../servicios/auth.service';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string = "";
  clave: string = "";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  Registrar()
  {
    this.authService.RegistrarUsuario(this.email, this.clave).then((res)=>  
    {
      this.router.navigate(['/Principal']);
    }).catch(error => console.log("Error:", error));
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { AuthService } from './../../servicios/auth.service';

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() log: EventEmitter<any> = new EventEmitter<any>();
  private subscription: Subscription;
  email = '';
  clave= '';
  progreso: number;
  progresoMensaje="esperando..."; 
  logeando=true;
  ProgresoDeAncho:string;
  Mensajes: string;

  clase="progress-bar progress-bar-info progress-bar-striped ";

  constructor(
    private route: ActivatedRoute, private router: Router, public afAuth: AngularFireAuth, private authService: AuthService) 
    {
      this.progreso=0;
      this.ProgresoDeAncho="0%";

  }

  ngOnInit() {
  }

  Entrar() 
  {
    this.authService.LoginUsuario(this.email, this.clave).then((res)=>
    {
      this.MostarMensaje("Te logueaste exitosamente", true);
      let segundos = 1;
      let intervalo = setInterval(()=>
      {
        segundos = segundos -1;
        if(segundos == 0)
        {
          this.log.emit(false);
          clearInterval(intervalo);
        }
      },1000);
    }).catch(error =>
    { 
        console.log("Error:", error);

        switch(error.code)
        {
          case "auth/invalid-email":
            this.MostarMensaje("El email no existe");
            break;
          case "auth/wrong-password":
            this.MostarMensaje("La contraseña es incorrecta");
            break;
          case "auth/user-not-found":
            this.MostarMensaje("El usuario no existe, registrate!");
            break;
        }

    });
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:boolean=false) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
    console.info("objeto",x);
  
   }

  MoverBarraDeProgreso() {
    
    this.progreso = 0;
    this.logeando=false;
    this.clase="progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje="NSA spy..."; 
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso=this.progreso+1;
      this.ProgresoDeAncho=this.progreso+20+"%";
      switch (this.progreso) {
        case 15:
        this.clase="progress-bar progress-bar-warning progress-bar-striped active";
        this.progresoMensaje="Verificando ADN..."; 
          break;
        case 30:
          this.clase="progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje="Adjustando encriptación.."; 
          break;
          case 60:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando Info del dispositivo..";
          break;
          case 75:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Recompilando claves facebook, gmail, chats..";
          break;
          case 85:
          this.clase="progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje="Instalando KeyLogger..";
          break;
          
        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.Entrar();
          this.logeando=true;
          break;
      }     
    });
  }
}

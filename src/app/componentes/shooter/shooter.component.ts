import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shooter',
  templateUrl: './shooter.component.html',
  styleUrls: ['./shooter.component.css']
})
export class ShooterComponent implements OnInit 
{
  enJuego:boolean = false;
  repetidor:any;
  desaparecer:any;
  Tiempo:number;
  numBoton:number = 0;
  contador:number = 0;
  blancos:number ;
  Mensajes: string;

  constructor() { }

  ngOnInit() {
  }

  NuevoJuego()
  {
    if(this.blancos > 0)
    {
      this.contador = 0;
      this.enJuego = true;

      this.Jugar();
    }
    else
    {
      this.MostarMensaje("Se deben ingresar numeros positivos");
    }
  }

  Jugar()
  {
    this.Tiempo = this.blancos;
    this.repetidor = setInterval(()=>
    { 
      this.Tiempo--;
      this.numBoton = this.AparecerBoton();

      this.desaparecer = setInterval(()=>
      {
        if(this.numBoton != 0)
        {
          this.numBoton = 0;
          clearInterval(this.desaparecer);
        }
      },1000);

      console.log("llego", this.Tiempo);
      if(this.Tiempo==0) 
      {
        clearInterval(this.repetidor);
        this.Tiempo=this.blancos;

        let tiempo = 1;
        let descanso = setInterval(()=>
        {
          tiempo = tiempo - 1;
          if(tiempo == 0)
          {
            if(this.contador == this.blancos)
            {
              this.MostarMensaje("Sos habil tirador!", true);
              this.blancos = 0;
            }
            else
            {
              this.MostarMensaje("Perdiste, tenes que practicar mas", false);
              this.blancos = 0;
            }
            clearInterval(descanso);
          }
        },1000);

        let segundos = 2;
        let intervalo = setInterval(()=>
        {
          segundos = segundos -1;
          if(segundos == 0)
          {
            this.enJuego = false;
            clearInterval(intervalo);
          }
        },1000);
      }
    }, 1500);

  }

  AparecerBoton():number
  {
    let boton = Math.floor(Math.random() * 9) + 1;

    console.log(boton);

    return boton;
  }

  Entra()
  {
    this.contador ++;
    console.log(this.contador);
    this.numBoton = -1;
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


}

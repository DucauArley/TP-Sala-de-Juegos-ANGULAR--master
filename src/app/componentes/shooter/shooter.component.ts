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

  constructor() { }

  ngOnInit() {
  }

  NuevoJuego()
  {
    this.contador = 0;
    this.enJuego = true;

    this.Jugar();

  }

  Jugar()
  {
    this.Tiempo = 11;
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
        this.Tiempo=11;
        this.enJuego = false;
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


}

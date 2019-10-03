import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from '../../clases/juego-piedra-papel-tijera';
import { delay, async } from 'q';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  juego: JuegoPiedraPapelTijera;
  enJuego:boolean = false;
  contesto:boolean;
  public imagenMaquina:string = "./././assets/imagenes/interrogatorio.png";
  Mensajes: string;

  constructor() { }

  ngOnInit() {
  }

  empezar()
  {
    this.imagenMaquina = "./././assets/imagenes/interrogatorio.png";
    this.contesto = false;
    this.juego = new JuegoPiedraPapelTijera();
    this.juego.JugarMaquina();

    this.enJuego = true;
    
  }

  async jugada(jugadaUser: number)
  {
    this.juego.jugadaUsuario = jugadaUser;
    this.contesto = true;
    this.setImagen();
    await delay(500);
    this.remate();
  }

  remate()
  {
    this.juego.verificarJugada();

    switch(this.juego.resultado)
    {
      case -1:
          this.MostarMensaje("Perdiste, la maquina juega bien!", -1);
          break;
      case 0:
          this.MostarMensaje("Empate", 0);
          break;
      case 1:
          this.MostarMensaje("Ganaste, Felicidades!", 1);
          break;
    }

    let segundos = 2;
    let intervalo = setInterval(()=>
    {
      segundos = segundos -1;
      console.log(segundos);
      if(segundos == 0)
      {
        this.enJuego = false;
        clearInterval(intervalo);
      }
    },1000);

  }

  setImagen()
  {
    switch(this.juego.jugadaMaquina)
    {
      case 1:
        this.imagenMaquina = "./././assets/imagenes/piedra.jpg";
        break;
      case 2:
        this.imagenMaquina = "./././assets/imagenes/papel.jpg";
        break;
      case 3:
        this.imagenMaquina = "./././assets/imagenes/tijera.jpg";
        break;
    }
  }

  MostarMensaje(mensaje:string="este es el mensaje",ganador:number=0) {
    this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador == 1)
      {
        x.className = "show Ganador";
      }
      else
      {
        if(ganador == 0)
        {
          x.className = "show Empate";
        }
        else
        {
          x.className = "show Perdedor";
        }
      }
    var modelo=this;
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");
     }, 3000);
    console.info("objeto",x);
  
   }

}

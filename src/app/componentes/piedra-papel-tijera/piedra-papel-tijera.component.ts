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
  public imagenMaquina:string = "../../../assets/imagenes/interrogatorio.png";

  constructor() { }

  ngOnInit() {
  }

  empezar()
  {
    this.imagenMaquina = "../../../assets/imagenes/interrogatorio.png";
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
        alert("Perdedor");
        break;
      case 0:
          alert("Empate");
          break;
      case 1:
          alert("Ganador");
          break;
    }

    this.enJuego = false;
  }

  setImagen()
  {
    switch(this.juego.jugadaMaquina)
    {
      case 1:
        this.imagenMaquina = "../../../assets/imagenes/piedra.jpg";
        break;
      case 2:
        this.imagenMaquina = "../../../assets/imagenes/papel.jpg";
        break;
      case 3:
        this.imagenMaquina = "../../../assets/imagenes/tijera.jpg";
        break;
    }
  }


}

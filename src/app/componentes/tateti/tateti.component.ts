import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from '../../clases/juego-tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit 
{
  juego: JuegoTateti;
  turnoJugador:boolean = false;
  cuentaMarcas:number = 0;
  imgX: string = './././assets/imagenes/X.png'
  imgO: string = './././assets/imagenes/O.png'

  constructor() 
  {
    this.juego = new JuegoTateti();
  }

  ngOnInit() {
  }

  NuevoJuego()
  {
    this.juego.enJuego = true;
    this.turnoJugador = true;
    this.cuentaMarcas = 0;
  }

  GenerarJugada() 
  {
    let row = Math.floor(Math.random() * 3);
    let col = Math.floor(Math.random() * 3);
    this.marcarJugada(row, col, true);
  }


  marcarJugada(row: number, column: number, jugadaGenerada: boolean) 
  {
    if (jugadaGenerada) 
    {
      if (this.juego.tablero[row][column] != "" && this.cuentaMarcas < 9) 
      {
        this.GenerarJugada()
      }
      else
      {
        this.cuentaMarcas++;
        this.juego.tablero[row][column] = this.imgX;
        this.turnoJugador = true;
        if(this.juego.verificarVictoria(this.imgX))
        {
          if(!this.juego.verificar())
          {
            alert("Perdedor");
            this.juego.resetar();
          }
        }
      }
    } 
    else 
    {
      if (this.juego.tablero[row][column] == "") 
      {
        this.cuentaMarcas++;
        this.juego.tablero[row][column] = this.imgO;
        this.turnoJugador = false;
        if (!this.juego.verificarVictoria(this.imgO)) 
        {
          setTimeout(() => {
            this.GenerarJugada();
          }, 400);
        }
        else
        {
          alert("Ganador");
          this.juego.resetar();
        }
      }
    }
  }

}

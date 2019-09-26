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


  constructor() { }

  ngOnInit() {
  }

  NuevoJuego()
  {
    this.juego = new JuegoTateti();
    this.juego.enJuego = true;


  }





}

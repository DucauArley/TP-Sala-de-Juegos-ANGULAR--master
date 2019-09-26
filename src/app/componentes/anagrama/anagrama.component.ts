import { Component, OnInit } from '@angular/core';
import { JuegoAnagrama } from '../../clases/juego-anagrama'

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {

  enJuego: boolean = false;
  juego: JuegoAnagrama;
  ocultarVerificar:boolean = false;

  constructor() 
  {
    this.juego = new JuegoAnagrama();
  }

  ngOnInit() {
  }

  NuevoJuego()
  {
    this.juego.resetear();

    this.ocultarVerificar = true;
    this.enJuego = true;

    this.juego.desordenar();
  }

  Verificar()
  {

    if(this.juego.verificar())
    {
      alert("Gano");
    }
    else
    {
      alert("Perdio");
    }

    this.ocultarVerificar = false;
    this.enJuego = false
  }

}

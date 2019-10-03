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
  Mensajes: string;

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
    this.ocultarVerificar = false;

    if(this.juego.verificar())
    {
      this.MostarMensaje("Ganaste genio!!!", true);
    }
    else
    {
      this.MostarMensaje("Perdiste", false);
    }

    this.enJuego = false
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
      modelo.ocultarVerificar=true;
     }, 3000);
    console.info("objeto",x);
  
   }

}

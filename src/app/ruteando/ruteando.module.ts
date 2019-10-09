import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// importo del module principal
import { RouterModule, Routes } from '@angular/router';
import { AdivinaElNumeroComponent } from '../componentes/adivina-el-numero/adivina-el-numero.component';
import { ListadoDeResultadosComponent } from '../componentes/listado-de-resultados/listado-de-resultados.component';
import { LoginComponent } from '../componentes/login/login.component';
import { ErrorComponent } from '../componentes/error/error.component';
import { PrincipalComponent } from '../componentes/principal/principal.component';
import { AgilidadAritmeticaComponent } from '../componentes/agilidad-aritmetica/agilidad-aritmetica.component';
import { MenuComponent } from '../componentes/menu/menu.component';
import { AdivinaMasListadoComponent } from '../componentes/adivina-mas-listado/adivina-mas-listado.component';
import { AgilidadMasListadoComponent } from '../componentes/agilidad-mas-listado/agilidad-mas-listado.component';
import { ListadoComponent } from'../componentes/listado/listado.component'
import { ListadosComponent } from '../componentes/listados/listados.component';
import { JuegosComponent } from '../componentes/juegos/juegos.component';
import { RegistroComponent } from '../componentes/registro/registro.component';
import { MenuCardComponent } from '../componentes/menu-card/menu-card.component';
import { CabeceraComponent } from '../componentes/cabecera/cabecera.component';
import { QuienSoyComponent } from '../componentes/quien-soy/quien-soy.component'
import { ListadoDePaisesComponent } from '../componentes/listado-de-paises/listado-de-paises.component'
import { MapaDeGoogleComponent } from '../componentes/mapa-de-google/mapa-de-google.component'
import { JugadoresListadoComponent } from '../componentes/jugadores-listado/jugadores-listado.component';
import { PiedraPapelTijeraComponent } from '../componentes/piedra-papel-tijera/piedra-papel-tijera.component';
import { AnagramaComponent} from '../componentes/anagrama/anagrama.component';
import { TatetiComponent } from '../componentes/tateti/tateti.component';
import { ShooterComponent } from '../componentes/shooter/shooter.component';
import { animation } from '@angular/animations';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// declaro donde quiero que se dirija
const MiRuteo = [
{path: 'Jugadores' , component: JugadoresListadoComponent, data: {animation: 'bienvenidopage'}},
{path: '' , component: PrincipalComponent},
{path: 'Login' , component: LoginComponent , data: {animation: 'bienvenidopage'}},
{path: 'Mapa' , component: MapaDeGoogleComponent},
{path: 'QuienSoy' , component: QuienSoyComponent, data: {animation: 'bienvenidopage'}},
{path: 'Registro' , component: RegistroComponent, data: {animation: 'FilterPage'}},
{path: 'Principal' , component: PrincipalComponent, data: {animation: 'loginpage'}},
{path: 'Listado' , component: ListadoComponent, data: {animation: 'bienvenidopage'}},
{path: 'Paises' , component: ListadoDePaisesComponent},

{ path: 'Juegos' ,
component: JuegosComponent, data: {animation: 'FilterPage'}, 
children:
     [{path: '' , component: MenuCardComponent, data: {animation: 'loginpage'}},
      {path: 'Adivina' , component: AdivinaElNumeroComponent, data: {animation: 'loginpage'}},
      {path: 'Agilidad' , component: AgilidadAritmeticaComponent, data: {animation: 'loginpage'}},
      {path: 'PiedraPapelTijera', component: PiedraPapelTijeraComponent, data: {animation: 'loginpage'}},
      {path: 'Anagrama', component: AnagramaComponent, data: {animation: 'loginpage'}},
      {path: 'Tateti', component: TatetiComponent, data: {animation: 'loginpage'}},
      {path: 'Shooter', component: ShooterComponent, data: {animation: 'loginpage'}}]
},//A los hijos los toma con la animacion del padre, tendria que sacarlos del padre para que esten animados pero es un re quilombo
//Creo que algo se puede hacer en el animation.ts con los childs del mismo
{path: '**' , component: ErrorComponent},
{path: 'error' , component: ErrorComponent}];

@NgModule({
  imports: [
    RouterModule.forRoot(MiRuteo)
  ],
  exports: [
    RouterModule
  ]
})
export class RuteandoModule { }
import { Juego } from '../clases/juego'

export class JuegoTateti extends Juego 
{
    tablero: Array<Array<string>> = [["", "", ""], ["", "", ""], ["", "", ""]];

    enJuego:boolean = false;
    sacarJuego: boolean = true;

    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Tateti",gano,jugador);
    }

    verificarVictoria(simbolo: string): boolean 
    {
        if (//horizontales
            (this.tablero[0][0] == simbolo && this.tablero[0][1] == simbolo && this.tablero[0][2] == simbolo) ||
            (this.tablero[1][0] == simbolo && this.tablero[1][1] == simbolo && this.tablero[1][2] == simbolo) ||
            (this.tablero[2][0] == simbolo && this.tablero[2][1] == simbolo && this.tablero[2][2] == simbolo) ||
            //verticales
            (this.tablero[0][0] == simbolo && this.tablero[1][0] == simbolo && this.tablero[2][0] == simbolo) ||
            (this.tablero[0][1] == simbolo && this.tablero[1][1] == simbolo && this.tablero[2][1] == simbolo) ||
            (this.tablero[0][2] == simbolo && this.tablero[1][2] == simbolo && this.tablero[2][2] == simbolo) ||
            //diagonales
            (this.tablero[0][0] == simbolo && this.tablero[1][1] == simbolo && this.tablero[2][2] == simbolo) ||
            (this.tablero[0][2] == simbolo && this.tablero[1][1] == simbolo && this.tablero[2][0] == simbolo)) 
        {
            this.enJuego = false;
            if (simbolo == 'O')
            {
                this.gano = true;
            }
        }
        
        return !this.enJuego;
    }


    public verificar(): boolean 
    {
        if (!this.enJuego && this.gano)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    resetar()
    {
        this.gano = false;
        this.tablero = [["", "", ""], ["", "", ""], ["", "", ""]];
        this.sacarJuego = true;
    }



}

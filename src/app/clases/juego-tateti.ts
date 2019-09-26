import { Juego } from '../clases/juego'

export class JuegoTateti extends Juego 
{
    tablero: Array<Array<string>> = [["", "", ""], ["", "", ""], ["", "", ""]];

    enJuego:boolean = false


    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Tateti",gano,jugador);
    }

    verificarTresEnLinea(marca: string): boolean 
    {
        if (//horizontales
            (this.tablero[0][0] == marca && this.tablero[0][1] == marca && this.tablero[0][2] == marca) ||
            (this.tablero[1][0] == marca && this.tablero[1][1] == marca && this.tablero[1][2] == marca) ||
            (this.tablero[2][0] == marca && this.tablero[2][1] == marca && this.tablero[2][2] == marca) ||
            //verticales
            (this.tablero[0][0] == marca && this.tablero[1][0] == marca && this.tablero[2][0] == marca) ||
            (this.tablero[0][1] == marca && this.tablero[1][1] == marca && this.tablero[2][1] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][2] == marca && this.tablero[2][2] == marca) ||
            //diagonales
            (this.tablero[0][0] == marca && this.tablero[1][1] == marca && this.tablero[2][2] == marca) ||
            (this.tablero[0][2] == marca && this.tablero[1][1] == marca && this.tablero[2][0] == marca)) 
        {
            this.enJuego = true;
            if (marca == 'O')
            {
                this.gano = true;
            }
            // this.reset();
        }
        
        return this.enJuego;
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
    }



}

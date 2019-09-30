import { Juego } from '../clases/juego'

export class JuegoShooter extends Juego
{
    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Shooter",gano,jugador);
    }

    public contador()
    {
        
    }

    public verificar(): boolean 
    {
        return true;
    }

}

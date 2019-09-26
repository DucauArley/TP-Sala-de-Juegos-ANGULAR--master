import { Juego } from '../clases/juego'

export class JuegoAnagrama extends Juego 
{

    public diccionario: {[id: number]: string;} = {1:"LINCE", 2:"MAQUINA", 3:"MAESTRO", 4:"ESTERNOCLEIDOMASTOIDEO",
    5: "ESCUADRA", 6: "JIRAFA", 7: "AZUL", 8: "INGLES"};

    palabraElegida: number = 0;
    palabraUsuario: string = "";
    palabraDesordenada: string = "";

    constructor(nombre?: string, gano?: boolean, jugador?:string) 
    {
        super("Anagrama",gano,jugador);
    }

    public desordenar()
    {
        this.palabraElegida = Math.floor(Math.random() * 8) + 1;

        this.palabraDesordenada = this.diccionario[this.palabraElegida];

        let array: Array<string> = this.palabraDesordenada.split("");

        array.sort(function() 
        {
            return Math.floor((Math.random() * 3)) - 1
        });

        this.palabraDesordenada = array.join("");
    }

    public verificar(): boolean 
    {
        if(this.diccionario[this.palabraElegida] == this.palabraUsuario.toUpperCase())
        {
            this.gano = true;
        }

        return this.gano;
    }


    resetear()
    {
        this.palabraElegida = 0;
        this.palabraUsuario = "";
        this.palabraDesordenada = "";
        this.gano = false;
    }
    
}

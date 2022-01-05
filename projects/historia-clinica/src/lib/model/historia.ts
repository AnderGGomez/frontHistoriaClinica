import { Paciente } from './paciente';


export class Historia{
    id          : number | undefined;
    eps         : string | undefined;
    paciente    : Paciente = new Paciente;
}
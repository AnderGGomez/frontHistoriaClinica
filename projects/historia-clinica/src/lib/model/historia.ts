import { Paciente } from "dist/pacientes/";


export class Historia{
    id          : number | undefined;
    eps         : string | undefined;
    paciente    : Paciente = new Paciente;
}
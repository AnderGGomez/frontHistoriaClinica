import { Paciente } from "./paciente";

export class Historia{
    id          : number | undefined;
    eps         : string | undefined;
    pacienteDTO    : Paciente = new Paciente;
}
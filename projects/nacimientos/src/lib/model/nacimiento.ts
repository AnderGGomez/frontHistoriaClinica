import { Enfermedad } from "./enfermedad";
import { Historia } from "./historia";
import { Medico } from "./medico";

export class Nacimiento{
    public id               : number | undefined;
    public fechaNacimiento  : string | undefined;
    public tipoParto        : string | undefined;
    public tipoNacimiento   : string | undefined;
    public medico           : Medico = new Medico;
    public historia         : Historia = new Historia;
    public enfermedades     : Array<Enfermedad> = new Array;
}


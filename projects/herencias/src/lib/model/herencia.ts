import { Historia } from "./historia";
import { Enfermedad } from "./enfermedad"
import { Medico } from "./medico";

export class Herencia{
    public id               : number | undefined;
    public parentesco       : string | undefined;
    public nombre           : string | undefined;
    public segundoNombre    : string | undefined;
    public primerApellido   : string | undefined;
    public segundoApellido  : string | undefined;
    public fechaCreacion    : string | undefined;
    public medico           : Medico = new Medico;
    public historia         : Historia = new Historia;
    public enfermedades     : Array<Enfermedad> = new Array();
}
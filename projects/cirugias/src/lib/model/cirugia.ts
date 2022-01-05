import { Historia } from "./historia";
import { Medico } from "./medico";

export class Cirugia{
    public id                   : number |undefined;//Long
    public fechaProcedimiento   : string |undefined;//Date
    public procedimiento        : string |undefined;//String
    public descripcion          : string |undefined;//String
    public fechaCreacion        : string |undefined;//Date
    public historia             : Historia  = new Historia;//HistoriaDTO
    public medico               : Medico    = new Medico;//MedicoDTO
}
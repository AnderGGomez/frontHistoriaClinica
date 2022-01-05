import { Historia } from "./historia";
import { Medicamento } from "./medicamento";
import { Medico } from "./medico";

export class Farmaco{
    public id               : number | undefined;      //Long                 
    public prescripcion     : string | undefined;        //String               
    public duracion         : number | undefined;     //Integer               
    public fecha            : string | undefined;       //Date                 
    public historia         : Historia              = new Historia;        //HistoriaDTO          
    public medico           : Medico                = new Medico;      //MedicoDTO            
    public medicamentos     : Array<Medicamento>    = new Array;        //List<MedicamentoDTO> 
}
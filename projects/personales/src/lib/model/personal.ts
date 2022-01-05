import { Enfermedad } from "./enfermedad";
import { Historia } from "./historia";
import { Medico } from "./medico";

export class Personal {
    public id               : number | undefined;                  //Long                 
    public descripcion      : string | undefined;         //String               
    public estado           : string | undefined;              //String               
    public fecha            : string | undefined;               //String               
    public historia         : Historia  = new Historia;            //HistoriaDTO          
    public medico           : Medico    = new Medico;              //MedicoDTO            
    public enfermedades     : Array<Enfermedad> = new Array;        //List<EnfermedadDTO>  
}
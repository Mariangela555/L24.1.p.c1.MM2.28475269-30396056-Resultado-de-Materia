export default class Cl_Materia{
    constructor(){
        this.contAprobados=0
        this.contEstudiantes=0
        this.cedulaMayor=0
        this.MayorNota=0
    }
    procesarEstudiante(es){
        
        if(es.notaFinal>= 48){
            this.contAprobados++
        }
        this.contEstudiantes++
        
        if(es.notaFinal> this.MayorNota){
            this.MayorNota= es.notaFinal;
            this.cedulaMayor = es.cedula
        }

      
    }
PorcentajeAporbados(){
    return this.contAprobados*100/this.contEstudiantes
}
MejorEstudiante(){
    return this.cedulaMayor
}
}
import { UsuarioRegistro } from '../../interfaces/usuario.interface';
export class RegistroHelper {
    constructor() {}
    
    generarFecha(fecha: string): string {
        let yyyy = fecha.substring(0, 4);
        let mm = fecha.substring(5,7);
        let dd = fecha.substring(8);
    
        console.log(yyyy);
        console.log(mm);
        console.log(dd);
    
        let nuevoFormato = `${dd}/${mm}/${yyyy}`
    
        return nuevoFormato;
    }

    validarCampos(usu: UsuarioRegistro): boolean {
        return usu.nom != '' || usu.userN != '' || usu.email != '' || usu.fechaN != '';
    }
}
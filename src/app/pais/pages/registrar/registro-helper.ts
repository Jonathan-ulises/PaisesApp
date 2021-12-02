import { UsuarioRegistro } from '../../interfaces/usuario.interface';
export class RegistroHelper {
    constructor() {}
    
    validarCampos(usu: UsuarioRegistro): boolean {
        return usu.nom != '' || usu.userN != '' || usu.email != '' || usu.fechaN != '';
    }
}
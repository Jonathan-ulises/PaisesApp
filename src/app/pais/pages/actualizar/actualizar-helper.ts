import { UsuarioActualizacion } from '../../interfaces/usuario.interface';
export class ActualizarHelper {
    constructor() {}
    
    validarCampos(usu: UsuarioActualizacion): boolean {
        return usu.id < 1 || usu.userN != '' || usu.email != '';
    }
}
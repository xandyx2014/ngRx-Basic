import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';
export enum ActionTypes {
  CARGAR_USUARIO = '[Usuario] Cargar Usuarios',
  CARGAR_USUARIO_FAIL = '[Usuario] Cargar Usuarios Fail',
  CARGAR_USUARIO_SUCCESS = '[Usuario] Cargar Usuarios Success'
}
export class CargarUsuario implements  Action {
  readonly type = ActionTypes.CARGAR_USUARIO;
  constructor( public id: string ) {}
}

export class CargarUsuarioFail implements  Action {
  readonly type = ActionTypes.CARGAR_USUARIO_FAIL;
  constructor( public payload: any) {}
}

export class CargarUsuarioSuccess implements  Action {
  readonly type = ActionTypes.CARGAR_USUARIO_SUCCESS;
  constructor( public usuario: Usuario ) {}
}
export type usuarioAcciones = CargarUsuario |
CargarUsuarioFail | CargarUsuarioSuccess;

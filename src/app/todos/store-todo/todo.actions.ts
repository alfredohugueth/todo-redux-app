import { createAction, props } from "@ngrx/store";

export const Crear = createAction(
    '[TODO] Crea Todo',
    props<{ texto : string }>() );

export const toggle = createAction(
    '[TODO] Toogle Todo',
    props< { id : number } >()
)

export const editar = createAction(
    '[TODO] Editar Todo',
    props< { id : number, texto : string } >()
)

export const borrar = createAction(
    '[TODO] Borrar Todo',
    props< { id : number } >()
)

export const toogleAll = createAction(
    '[TODO] Toogle all',
    props< {estado : boolean} >()
)

export const limpiarCompletados = createAction(
    '[TODO] Limpiar completados'
)

import { createAction, props } from "@ngrx/store";

export type FiltrosValidos = 'todos' | 'completados' | 'activos'


export const filtro = createAction(
    '[Filtro] Set Filtro',
    props< { filtro : FiltrosValidos } >()
);
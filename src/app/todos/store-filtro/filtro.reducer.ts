import { createReducer, on, Action } from '@ngrx/store';
import * as actions from './filtro.actions';
import { FiltrosValidos } from './filtro.actions';

let initialState: any = "todos";

export const reducer = createReducer(
    initialState,
    on(
        actions.filtro,
        (state, { filtro }) => filtro
    ),
);

export function filtroReducer ( state : any, action : Action )
{
    return reducer( state, action )
}


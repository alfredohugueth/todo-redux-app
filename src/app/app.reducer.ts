import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { FiltrosValidos } from "./todos/store-filtro/filtro.actions";
import { filtroReducer } from "./todos/store-filtro/filtro.reducer";
import { todoReducer } from "./todos/store-todo/todo.reducer";


export interface AppState
{
    todos : Todo[],
    filtro : FiltrosValidos
}


export const appReducers : ActionReducerMap< AppState > = 
{
    todos : todoReducer,
    filtro : filtroReducer
}
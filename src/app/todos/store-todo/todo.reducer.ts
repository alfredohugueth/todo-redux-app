import * as actions from "./todo.actions";

import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from "../models/todo.model";



const initialState: Todo[] = [
    new Todo( 'Salvar al mundo' ),
    new Todo( 'Vencer a Thanos' ),
    new Todo( 'Comer' ),
    new Todo( 'Comprar traje de Iron Man' ),
];

export const reducer = createReducer(
    initialState,
    on(
        actions.Crear,
        ( state, { texto }) => [ ...state, new Todo( texto ) ],
    ),
    on( 
        actions.toggle,
        ( state, { id }) => {
            return state.map( todo => {
                if( todo.id === id ){

                    return {
                        ...todo,
                        completado : !todo.completado
                    }

                } else {

                    return todo
                    
                } 

            })
        }),
    on(
        actions.editar,
        ( state, { id, texto } ) => 
        {
            return state.map( todo => 
                {
                    if( todo.id === id )
                    {
                        return {
                            ...todo,
                            texto
                        };
                    }
                    else
                    {
                        return todo;
                    }
                })
        }
    ),
    on(
        actions.borrar,
        ( state, { id } ) => 
        {
           return state.filter( todo => todo.id !== id );
        }
    ),
    on(
        actions.toogleAll,
        ( state, { estado } ) => 
        {
            return state.map( todo => 
                {
                    return {
                        ...todo,
                        completado : estado
                    }
                });
        }
    ),
    on(
        actions.limpiarCompletados,
        ( state ) => 
        {
            return state.filter( todo => !todo.completado );
        }
    )
);

export function todoReducer( state: Todo[] | undefined , action: Action  )
{
    return reducer( state, action );
}
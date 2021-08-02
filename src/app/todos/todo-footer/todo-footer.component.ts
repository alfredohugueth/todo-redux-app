import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../store-filtro/filtro.actions';
import * as todoActions from "../store-todo/todo.actions";

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  filtroActual : actions.FiltrosValidos = 'todos'
  filtros : actions.FiltrosValidos[] = [ 'todos','completados', 'activos' ];
  pendientes : number = 0;
  constructor( private store : Store < AppState >) { }

  ngOnInit(): void 
  {
    // this.store.select( 'filtro' ).subscribe( filtro => 
    //   {
    //     this.filtroActual = filtro;
    //   });

    this.store.subscribe( state => 
      {
        
        this.filtroActual = state.filtro;
        this.pendientes = state.todos.filter( todo => todo.completado === false ).length;

      })
  }

  cambiarFiltro( filtro : actions.FiltrosValidos )
  {
    this.store.dispatch( actions.filtro( { filtro } ) );
  }

  limpiarCompletados()
  {
    this.store.dispatch( todoActions.limpiarCompletados() );
  }
}

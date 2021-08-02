import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from '../environments/environment';

/* Modules */
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo.module';
import { ReactiveFormsModule } from "@angular/forms";
/* Components */
import { FooterComponent } from './footer/footer.component';

/* NgRx */
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/store-todo/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.reducer';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    ReactiveFormsModule,
    StoreModule.forRoot( appReducers ),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todos.reducer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { TodosModule } from './todos/todos.module';

@NgModule({
  declarations: [AppComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodosModule,
    StoreModule.forRoot({ todo: todoReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

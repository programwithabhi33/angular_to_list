import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './myComponent/todos/todos.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { AbhiShekComponent } from './abhi-shek/abhi-shek.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    SecondComponentComponent,
    AbhiShekComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

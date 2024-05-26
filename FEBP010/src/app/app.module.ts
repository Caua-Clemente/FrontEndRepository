import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ItemComponent } from './componentes/item/item.component';
import { DivItemDirective } from './directives/div-item.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    DivItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

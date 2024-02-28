import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ClassesComponent } from './classes/classes.component';
import { ObjetosComponent } from './objetos/objetos.component';
import { PropriedadesComponent } from './propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './valor-propriedade/valor-propriedade.component';
import { TitleDirectiveDirective } from './shared/directives/title-directive.directive';
import { BodyDirectiveDirective } from './shared/directives/body-directive.directive';
import { TextContentDirectiveDirective } from './shared/directives/text-content-directive.directive';
import { TextTitleDirectiveDirective } from './shared/directives/text-title-directive.directive';
import { CarrinhoDirectiveDirective } from './shared/directives/carrinho-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    TitleDirectiveDirective,
    BodyDirectiveDirective,
    TextContentDirectiveDirective,
    TextTitleDirectiveDirective,
    CarrinhoDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

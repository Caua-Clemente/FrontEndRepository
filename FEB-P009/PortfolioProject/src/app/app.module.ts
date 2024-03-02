import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { UescPageComponent } from './components/uesc-page/uesc-page.component';
import { DestaqueComponent } from './components/uesc-page/destaque/destaque.component';
import { FooterComponent } from './components/uesc-page/footer/footer.component';
import { HeaderComponent } from './components/uesc-page/header/header.component';
import { MenuComponent } from './components/uesc-page/menu/menu.component';
import { NoticiasComponent } from './components/uesc-page/noticias/noticias.component';
import { ResultadosComponent } from './components/uesc-page/resultados/resultados.component';
import { ServicosComponent } from './components/uesc-page/servicos/servicos.component';

import { JreaderPageComponent } from './components/jreader-page/jreader-page.component';
import { CarrinhoComponent } from './components/jreader-page/carrinho/carrinho.component';
import { ClassesComponent } from './components/jreader-page/classes/classes.component';
import { ObjetosComponent } from './components/jreader-page/objetos/objetos.component';
import { PropriedadesComponent } from './components/jreader-page/propriedades/propriedades.component';
import { ValorPropriedadeComponent } from './components/jreader-page/valor-propriedade/valor-propriedade.component';
import { BodyDirectiveDirective } from './shared/directives/body-directive.directive';
import { CarrinhoDirectiveDirective } from './shared/directives/carrinho-directive.directive';
import { TextContentDirectiveDirective } from './shared/directives/text-content-directive.directive';
import { TextTitleDirectiveDirective } from './shared/directives/text-title-directive.directive';
import { TitleDirectiveDirective } from './shared/directives/title-directive.directive';

import { WikipediaPageComponent } from './components/wikipedia-page/wikipedia-page.component';
import { NegritoPipe } from './shared/negrito.pipe';
import { BarraBuscaComponent } from './components/wikipedia-page/barra-busca/barra-busca.component';
import { ResultadoPesquisaComponent } from './components/wikipedia-page/resultado-pesquisa/resultado-pesquisa.component';

const routes: Routes = [
  { path: 'uescPage', component: UescPageComponent },
  { path: 'jreaderPage', component: JreaderPageComponent },
  { path: 'wikipediaPage', component: WikipediaPageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UescPageComponent,
    JreaderPageComponent,
    WikipediaPageComponent,
    DestaqueComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent,
    NoticiasComponent,
    ResultadosComponent,
    ServicosComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    BodyDirectiveDirective,
    CarrinhoDirectiveDirective,
    TextContentDirectiveDirective,
    TextTitleDirectiveDirective,
    TitleDirectiveDirective,
    NegritoPipe,
    BarraBuscaComponent,
    ResultadoPesquisaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

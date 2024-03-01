import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UescPageComponent } from './components/uesc-page/uesc-page.component';
import { JreaderPageComponent } from './components/jreader-page/jreader-page.component';
import { WikipediaPageComponent } from './components/wikipedia-page/wikipedia-page.component';

import { DestaqueComponent } from './components/uesc-page/destaque/destaque.component';
import { FooterComponent } from './components/uesc-page/footer/footer.component';
import { HeaderComponent } from './components/uesc-page/header/header.component';
import { MenuComponent } from './components/uesc-page/menu/menu.component';
import { NoticiasComponent } from './components/uesc-page/noticias/noticias.component';
import { ResultadosComponent } from './components/uesc-page/resultados/resultados.component';
import { ServicosComponent } from './components/uesc-page/servicos/servicos.component';

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
    ServicosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

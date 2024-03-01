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
    WikipediaPageComponent
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

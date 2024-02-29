import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { PostComponentComponent } from './components/post-component/post-component.component';
import { PutComponentComponent } from './components/put-component/put-component.component';
import { GetAllComponentComponent } from './components/get-all-component/get-all-component.component';
import { GetComponentComponent } from './components/get-component/get-component.component';

const routes: Routes = [
  { path: 'postPage', component: PostComponentComponent },
  { path: 'getAllPage', component: GetAllComponentComponent },
  { path: 'getPage/:id', component: GetComponentComponent },
  { path: 'putPage/:id', component: PutComponentComponent },
  { path: '', redirectTo: '/getAllPage', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponentComponent,
    PutComponentComponent,
    GetAllComponentComponent,
    GetComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

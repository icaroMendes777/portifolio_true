import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { EditorModule } from '@tinymce/tinymce-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { ContatoComponent } from './contato/contato.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SobreComponent,
    ProjetosComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    EditorModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'sobre', component: SobreComponent },
      { path: 'projetos', component: ProjetosComponent },
      { path: 'contato', component: ContatoComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

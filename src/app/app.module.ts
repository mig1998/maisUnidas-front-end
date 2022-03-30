import { HttpClientModule } from '@angular/common/http'


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';

import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { PerfilComponent } from './perfil/perfil.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { InicioComponent } from './inicio/inicio.component';
import { ContatoComponent } from './contato/contato.component';
import { MenulateralComponent } from './menulateral/menulateral.component';
import { FormsModule } from '@angular/forms';
import { EntrarComponent } from './entrar/entrar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    CadastrarComponent,
    PerfilComponent,
    SobreNosComponent,
    InicioComponent,
    ContatoComponent,
    MenulateralComponent,
    EntrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

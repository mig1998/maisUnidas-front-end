import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { EntrarComponent } from './entrar/entrar.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [


  {path:'',redirectTo:'entrar', pathMatch:'full'},

  {path:'entrar',component:EntrarComponent},
  {path:'cadastrar',component:CadastrarComponent},
  {path:'inicio',component:InicioComponent},
  {path:'perfil',component:InicioComponent},
  {path:'sobre-nos',component:SobreNosComponent},
  {path:'contato',component:ContatoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

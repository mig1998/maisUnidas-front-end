import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [


  {path:'',redirectTo:'login', pathMatch:'full'},

  {path:'login',component:LoginComponent},
  {path:'cadastrar',component:CadastrarComponent},

  {path:'inicio',component:InicioComponent},
  {path:'sobre-nos',component:SobreNosComponent},
  {path:'contato',component:ContatoComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

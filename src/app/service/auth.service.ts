import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private html:HttpClient) { 

  }




  Entrar(usuarioLogin:UsuarioLogin):Observable<UsuarioLogin>{
    return this.html.post<UsuarioLogin>('https://unidasheroku.herokuapp.com/usuarios/logar',usuarioLogin);
  }



  Cadastrar(usuario:Usuario):Observable<Usuario>{
    return this.html.post<Usuario>('https://unidasheroku.herokuapp.com/usuarios/cadastrar',usuario);

  }


  logado(){
    let ok:boolean=false;


    if(environment.token!=''){
      ok=true;
    }

    return ok;
  }

}

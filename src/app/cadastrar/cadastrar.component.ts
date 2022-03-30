import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario= new Usuario;

confirmSenha:string;


  constructor(
    private authService:AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  window.scroll(0,0);
  }

confirmarSenha(event:any){
this.confirmSenha=event.target.value
}



cadastrarUsuario() {


  if (this.confirmSenha === this.usuario.senha) {

    this.authService.Cadastrar(this.usuario).subscribe((resp: Usuario) => {
      this.usuario = resp;
      this.router.navigate(['/entrar']);
      alert('Usuário cadastrado com sucesso!');
    });
  } else {
    alert('As senha não estão iguais.');
  }
}
}
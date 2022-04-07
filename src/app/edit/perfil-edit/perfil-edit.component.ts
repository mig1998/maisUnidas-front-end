import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.component.html',
  styleUrls: ['./perfil-edit.component.css']
})
export class PerfilEditComponent implements OnInit {
  usuario: Usuario = new Usuario();

  confirmarSenha: string;
  tipoUsuario: string;


  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private alertas: AlertasService

  ) { }

  ngOnInit(): void {
    window.scroll(0, 0);


    if (environment.token == '') {
      this.alertas.showAlertDanger("sessão expirada");
      this.router.navigate(['/entrar'])
    }



    let idUser = this.route.snapshot.params['id']

    this.findByIdUsuario(idUser);

  }



  tipoUser(event: any) {
    this.tipoUsuario = event.target.value
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value
  }

  findByIdUsuario(id: number) {
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp;
    })
  }

  altUser() {
    if (this.usuario.nome == null || this.usuario.nome == null || this.usuario.senha == null) {
      this.alertas.showAlertDanger("Voce deixou algum campo vazio!")
    } else {

      if (this.confirmarSenha == this.usuario.senha) {

        this.usuario.tipo = this.tipoUsuario;

        this.authService.putUser(this.usuario).subscribe((resp: Usuario) => {
          this.usuario = resp;
          this.alertas.showAlertSuccess('Perfil alterado com sucesso! logue novamente!');
          this.router.navigate(['/entrar']);
          environment.token = ''
          environment.nome = ''
          environment.descricao = ''
          environment.foto = ''
          environment.id = 0
        });
      } else {
        this.alertas.showAlertDanger("as senhas nao estão iguais!")
      }

    }




  }

}


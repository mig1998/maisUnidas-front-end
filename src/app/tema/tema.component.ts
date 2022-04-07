import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema = new Tema();
  listaTemas:Tema[];
  
  
  key='id'
  reverse=true;
  
    constructor(
      private router: Router,
      private temaService: TemaService,
      private alertas:AlertasService
  
      ) { }
  
    ngOnInit(): void {
  
     
      if (environment.token == '') {
        this.alertas.showAlertDanger("sessão expirada");
        this.router.navigate(['/entrar'])
      }
  
      // if (environment.tipo != 'adm') {
      //   this.alertas.showAlertInfo("precisa ser adm pra acessar esta pagina");
      //   this.router.navigate(['/home'])
      // }
  

      this.findAllTemas();
  
    }
  
  
  
  
    cadastrarTema() {
      this.temaService.createTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
        this.alertas.showAlertSuccess("cadastrado com sucesso!");
      this.findAllTemas();
      this.tema=new Tema()
      });
    }
  
  
  
  findAllTemas(){
    this.temaService.getAllTema().subscribe((resp: Tema[])=>{
      this.listaTemas=resp;
    })
  }
  
  }
  
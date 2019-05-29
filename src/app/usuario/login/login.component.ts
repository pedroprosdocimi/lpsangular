import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  estaLogado: boolean = true;
  coordenador: boolean = false;
  professor: boolean = false;
  aluno: boolean = false;
  admin: boolean = false;
  cadastrarTurmaA: boolean = false;
  associarUsuariosA: boolean = false;
  gerenciarUsuariosA: boolean = false;
  submeterProfA: boolean = false;
  submeterAlunoA: boolean = false;
  escolherTurmasA: boolean = false;
  avaliarPontoControleA: boolean = false;
  solicitacoesPendentesA: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  aoEntrar(){
    this.estaLogado=false;
    this.admin = true;
  }

  deslogar(){
    this.estaLogado = true;
  }

  cadastrarTurma(){
    this.cadastrarTurmaA = true;
    this.associarUsuariosA = false;
    this.gerenciarUsuariosA = false;
  }

  associarUsuarios(){
    this.associarUsuariosA = true;
    this.cadastrarTurmaA = false;
    this.gerenciarUsuariosA = false;
  }

  gerenciarUsuarios(){
    this.gerenciarUsuariosA = true;
    this.cadastrarTurmaA = false;
    this.associarUsuariosA = false;
  }

  submeterProf(){
    this.submeterProfA = true;
  }

  submeterAluno(){
    this.submeterAlunoA = true;
    this.escolherTurmasA = false;
  }

  escolherTurmas(){
    this.escolherTurmasA = true;
    this.submeterAlunoA = false;
  }

  avaliarPontoControle(){
    this.avaliarPontoControleA = true;
    this.solicitacoesPendentesA = false;
  }

  solicitacoesPendentes(){
    this.solicitacoesPendentesA = true;
    this.avaliarPontoControleA = false;
  }

}
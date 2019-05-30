import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import {AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { EditComponent } from './usuario/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { NavegacaoModule } from './navegacao.module';
import { LoginComponent } from './usuario/login/login.component';
import { CadastrarTurmaComponent } from './usuario/admin/cadastrar-turma/cadastrar-turma.component';
import { AssociarUsuariosComponent } from './usuario/admin/associar-usuarios/associar-usuarios.component';
import { GerenciarUsuariosComponent } from './usuario/admin/gerenciar-usuarios/gerenciar-usuarios.component';
import { SubmeterComponent } from './usuario/professor/submeter/submeter.component';
import { SubmeterAlunoComponent } from './usuario/aluno/submeter-aluno/submeter-aluno.component';
import { EscolherTurmaComponent } from './usuario/aluno/escolher-turma/escolher-turma.component';
import { SolicitacoesPendentesComponent } from './usuario/coordenador/solicitacoes-pendentes/solicitacoes-pendentes.component';
import { AvaliarPontoControleComponent } from './usuario/coordenador/avaliar-ponto-controle/avaliar-ponto-controle.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    LoginComponent,
    CadastrarTurmaComponent,
    AssociarUsuariosComponent,
    GerenciarUsuariosComponent,
    SubmeterComponent,
    SubmeterAlunoComponent,
    EscolherTurmaComponent,
    SolicitacoesPendentesComponent,
    AvaliarPontoControleComponent
  ],
  imports: [
    [BrowserAnimationsModule],
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireDatabaseModule,
    NavegacaoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

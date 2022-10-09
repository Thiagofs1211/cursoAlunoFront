import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { AlunosComponent } from './alunos/alunos.component';
import { AppRoutingModule } from './app-routing.module';
import { AdicionarEditarAlunoComponent } from './adicionar-editar-aluno/adicionar-editar-aluno.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export var options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    AlunosComponent,
    AdicionarEditarAlunoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxMaskModule.forRoot(options),
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

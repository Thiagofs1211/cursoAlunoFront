import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AlunosComponent } from './alunos/alunos.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent},
  { path: 'cursos', component: CursosComponent}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

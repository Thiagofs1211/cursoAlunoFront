import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aluno } from '../Modelos/Aluno';
import { Curso } from '../Modelos/Curso';
import { RestService } from '../rest.service';

interface DialogData {
  editar: Boolean
  aluno: Aluno
}

@Component({
  selector: 'app-adicionar-editar-aluno',
  templateUrl: './adicionar-editar-aluno.component.html',
  styleUrls: ['./adicionar-editar-aluno.component.css']
})
export class AdicionarEditarAlunoComponent implements OnInit {

  curso: Curso = new Curso()
  cursos: Curso[] = []
  nome: string = ""
  matricula: string = ""
  cpf: string = ""

  constructor(public dialogRef: MatDialogRef<AdicionarEditarAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public service: RestService) { }

  ngOnInit(): void {
    this.getCursos()
    console.log(this.data)
    if(this.data.editar) {
      this.cpf = this.data.aluno.alunoPk.cpf
      this.curso = this.data.aluno.curso
      this.nome = this.data.aluno.nome
      this.matricula = this.data.aluno.alunoPk.matricula
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getCursos() {
    this.service.getCursos().subscribe({
      next: (data) => this.cursos = data,
      error: (e) => console.log(e),
      complete: () => console.info('complete') 
    })
  }

  adicionarEditarAluno() {
    let aluno = new Aluno()
    aluno.alunoPk.cpf = this.cpf
    aluno.alunoPk.matricula = this.matricula
    aluno.curso = this.curso
    aluno.nome = this.nome
    if(!this.data.editar) {
      this.service.salvarAluno(aluno).subscribe({
        next: () => console.log("Aluno adicionado com sucesso"),
        error: (e) => console.log(e),
        complete: () => console.info('complete') 
      })
    } else {
      this.service.editarAluno(aluno).subscribe({
        next: () => console.log("Aluno editado com sucesso"),
        error: (e) => console.log(e),
        complete: () => console.info('complete') 
      })
    }
  }

}

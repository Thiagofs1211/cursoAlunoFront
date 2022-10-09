import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdicionarEditarAlunoComponent } from '../adicionar-editar-aluno/adicionar-editar-aluno.component';
import { Aluno } from '../Modelos/Aluno';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  constructor(public dialog: MatDialog, public service: RestService) { }

  ngOnInit(): void {
    this.listarAlunos()
  }

  alunos: Aluno[] = [];

  openDialogAdicionarAluno(): void {
    const dialogRef = this.dialog.open(AdicionarEditarAlunoComponent, {
      width: '1000px', height: '700px',
      data: {
        editar: false
      }
    });
  }

  openDialogEditarAluno(item : Aluno) {
    const dialogRef = this.dialog.open(AdicionarEditarAlunoComponent, {
      width: '1000px', height: '700px',
      data: {
        editar: true,
        aluno: item
      }
    });
  }

  excluirAluno(item: Aluno) {
    if(confirm("Deseja excluir o aluno "+ item.nome + "?")) {
      this.service.deletarAluno(item).subscribe({
        next: () => console.log("Aluno excluído com sucesso"),
        error: (e) => console.log(e),
        complete: () => console.info('complete') 
      })
    }
  }

  listarAlunos() {
    this.service.getAlunos().subscribe({
      next: (data) => this.alunos = data,
      error: (e) => console.log(e),
      complete: () => console.info('complete') 
    })
  }

}

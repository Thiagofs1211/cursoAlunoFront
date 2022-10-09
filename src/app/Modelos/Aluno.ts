import { AlunoPk } from "./AlunoPk";
import { Curso } from "./Curso";

export class Aluno {
    alunoPk: AlunoPk = new AlunoPk;
    nome: string = "";
    curso: Curso = new Curso;
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Curso } from './Modelos/Curso';
import { Aluno } from './Modelos/Aluno';

const endpoint = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  headers={
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getCursos(): Observable<any> {
    return this.http.get<Curso[]>(endpoint + '/cursos');
  }

  getAlunos(): Observable<any> {
    return this.http.get<Aluno[]>(endpoint + '/aluno/listar');
  }

  salvarAluno(data: Object): Observable<any> {
    return this.http.post(endpoint + '/aluno', JSON.stringify(data), this.headers);
  }

  editarAluno(data: Object) :Observable<any> {
    return this.http.put(endpoint + '/aluno', JSON.stringify(data), this.headers);
  }

  deletarAluno(data: Object) : Observable<any> {
    var options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    };
    return this.http.delete(endpoint + '/aluno', options);
  }

}
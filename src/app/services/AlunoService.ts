import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  private readonly baseUrl = 'http://localhost:3000/alunos'; 

  constructor(private http: HttpClient) { }

  getAlunos(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(this.baseUrl);
  }
  
  selecionarAluno(codigo: number): Observable<Aluno> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.get<Aluno>(url);
  }

  criarAluno(curso: Aluno): Observable<Aluno> {
    return this.http.post<Aluno>(this.baseUrl, curso);
  }

  atualizarAluno(curso: Aluno): Observable<Aluno> {
    const url = `${this.baseUrl}/${curso.codigo}`;
    return this.http.patch<Aluno>(url, curso);
  }

  excluirAluno(codigo: number): Observable<any> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.delete(url);
  }
}
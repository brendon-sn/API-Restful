import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../models/Curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private readonly baseUrl = 'http://localhost:3000/cursos'; 

  constructor(private http: HttpClient) { }

  getCursos(): Observable<Curso[]> {
    return this.http.get<Curso[]>(this.baseUrl);
  }
  
  selecionarCurso(codigo: number): Observable<Curso> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.get<Curso>(url);
  }

  criarCurso(curso: Curso): Observable<Curso> {
    return this.http.post<Curso>(this.baseUrl, curso);
  }

  atualizarCurso(curso: Curso): Observable<Curso> {
    const url = `${this.baseUrl}/${curso.codigo}`;
    return this.http.patch<Curso>(url, curso);
  }

  excluirCurso(codigo: number): Observable<any> {
    const url = `${this.baseUrl}/${codigo}`;
    return this.http.delete(url);
  }
}
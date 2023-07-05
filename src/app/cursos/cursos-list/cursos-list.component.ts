import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Curso } from 'src/app/models/Curso';
import { CursoService } from 'src/app/services/CursoService';
import { CursosFormComponent } from '../cursos-form/cursos-form.component';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursoListComponent implements OnInit {
  cursos: Curso[] = [];
  cursoSelecionado: Curso | undefined;
  codigoCursoSelecionado: number | undefined;

  constructor(
    private dialog: MatDialog,
    private cursoService: CursoService
    ) {}

  ngOnInit() {
    this.carregarCursos();
  }

  create(){
    this.dialog.open(CursosFormComponent);
  }

  selecionarCurso(curso: Curso): void {
    this.cursoSelecionado = curso;
    this.codigoCursoSelecionado = curso.codigo;
  }

  carregarCursos() {
    this.cursoService.getCursos().subscribe(
      cursos => this.cursos = cursos,
      error => console.log('Erro ao carregar cursos:', error)
    );
  }

  atualizarCurso() {
    if (this.codigoCursoSelecionado !== undefined) {
      const cursoSelecionado = this.cursos.find(curso => curso.codigo === this.codigoCursoSelecionado);
  
      if (cursoSelecionado) {
        this.cursoService.atualizarCurso(cursoSelecionado).subscribe(
          cursoAtualizado => {
          const index = this.cursos.findIndex(c => c.codigo === cursoAtualizado.codigo);
          if (index !== -1) {
            this.cursos[index] = cursoAtualizado;
          }

          this.dialog.closeAll();
          setTimeout(() => {
            window.location.reload();
          }, 700);
        },
        error => console.log('Erro ao atualizar curso:', error)
      );
    }
  }
}

  excluirCurso(): void {
    if (this.cursoSelecionado) {
      this.cursoService.excluirCurso(this.cursoSelecionado.codigo).subscribe(
        () => {
          setTimeout(() => {
          window.location.reload();
        }, 700);
      },
        error => {
          console.error('Erro ao excluir o curso:', error);
        }
      );
    }
  }

}

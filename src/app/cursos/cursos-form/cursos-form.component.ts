import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/Curso';
import { CursoService } from 'src/app/services/CursoService';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss'],
})
export class CursosFormComponent implements OnInit {
  cursos: Curso[] = [];
  cursoSelecionado: Curso | undefined;
  cursoForm: Curso = {
    codigo: 0,
    descricao: '',
    ementa: ''
  };

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<CursosFormComponent>,
    private cursoService: CursoService
    ) { }

  ngOnInit() :void {
  }

  criarCurso() {
    this.cursoService.criarCurso(this.cursoForm).subscribe(() => {
      this.dialog.closeAll();
      setTimeout(() => {
        window.location.reload();
      }, 700);
    })
  }
  
  

  selecionarCurso(codigo: number) {
    this.cursoService.selecionarCurso(codigo).subscribe(
      cursoSelecionado => {
        this.cursoSelecionado = cursoSelecionado;
      },
      error => console.log('Erro ao selecionar curso:', error)
    );
  }

  atualizarCurso(curso: Curso) {
    if (this.cursoSelecionado) {
      this.cursoService.atualizarCurso(curso).subscribe(
        cursoAtualizado => {
          const index = this.cursos.findIndex(c => c.codigo === cursoAtualizado.codigo);
          if (index !== -1) {
            this.cursos[index] = cursoAtualizado;
          }
          this.cursoSelecionado = undefined;
          this.dialog.closeAll();
          setTimeout(() => {
            window.location.reload();
          }, 700);
        },
        error => console.log('Erro ao atualizar curso:', error)
      );
    }
  }

  cancel() {
    if (this.cursoForm.descricao != "") {
      this.dialog.open(CursosFormComponent);
    } else {
      this.dialogRef.close();
    }
  }
}

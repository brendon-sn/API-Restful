import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/AlunoService';
import { MatDialog } from '@angular/material/dialog';
import { AlunosFormComponent } from '../alunos-form/alunos-form.component';

@Component({
  selector: 'app-alunos-list',
  templateUrl: './alunos-list.component.html',
  styleUrls: ['./alunos-list.component.scss']
})
export class AlunoListComponent implements OnInit {
  alunos: Aluno[] = [];
  alunoSelecionado: Aluno | undefined;

  constructor(
    private dialog: MatDialog,
    private alunoService: AlunoService
    ) {}

  ngOnInit() {
    this.carregarAlunos();
  }

  create(){
    this.dialog.open(AlunosFormComponent);
  }

  selecionarAluno(aluno: Aluno): void {
    this.alunoSelecionado = aluno;
  }

  carregarAlunos() {
    this.alunoService.getAlunos().subscribe(
      alunos => this.alunos = alunos,
      error => console.log('Erro ao carregar alunos:', error)
    );
  }

  excluirAluno(): void {
    if (this.alunoSelecionado) {
      this.alunoService.excluirAluno(this.alunoSelecionado.codigo).subscribe(
        () => {
          setTimeout(() => {
          window.location.reload();
        }, 700);
      },
        error => {
          console.error('Erro ao excluir o aluno:', error);
        }
      );
    }
  }
}

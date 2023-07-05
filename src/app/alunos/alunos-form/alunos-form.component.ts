import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from  '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Aluno } from 'src/app/models/Aluno';
import { AlunoService } from 'src/app/services/AlunoService';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrls: ['./alunos-form.component.scss']
})
export class AlunosFormComponent implements OnInit {

  alunos: Aluno[] = [];
  alunoSelecionado: Aluno | undefined;
  alunoForm: Aluno = {
    codigo: 0,
    nome: ''
  };

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<AlunosFormComponent>,
    private alunoService: AlunoService
    ) { }

  ngOnInit() :void {
  }

  criarAluno() {
    this.alunoService.criarAluno(this.alunoForm).subscribe(() => {
      this.dialog.closeAll();
      setTimeout(() => {
        window.location.reload();
      }, 700);
    })
  }

  selecionarAluno(codigo: number) {
    this.alunoService.selecionarAluno(codigo).subscribe(
      alunoSelecionado => {
        this.alunoSelecionado = alunoSelecionado;
      },
      error => console.log('Erro ao selecionar aluno:', error)
    );
  }

  atualizarAluno(aluno: Aluno) {
    if (this.alunoSelecionado) {
      this.alunoService.atualizarAluno(aluno).subscribe(
        alunoAtualizado => {
          const index = this.alunos.findIndex(c => c.codigo === alunoAtualizado.codigo);
          if (index !== -1) {
            this.alunos[index] = alunoAtualizado;
          }
          this.alunoSelecionado = undefined;
          this.dialog.closeAll();
          setTimeout(() => {
            window.location.reload();
          }, 700);
        },
        error => console.log('Erro ao atualizar aluno:', error)
      );
    }
  }

  cancel() {
    if (this.alunoForm.nome != "") {
      this.dialog.open(AlunosFormComponent);
    } else {
      this.dialogRef.close();
    }
  }
}


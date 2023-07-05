import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosRoutingModule } from './alunos-routing.module';
import { AlunoListComponent } from './alunos-list/alunos-list.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';


@NgModule({
  declarations: [
    AlunoListComponent,
    AlunosFormComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ]
})
export class AlunosModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlunoListComponent } from './alunos-list/alunos-list.component';
import { AlunosFormComponent } from './alunos-form/alunos-form.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {path: '', component: AlunoListComponent},
  {path: 'novo', component: AlunosFormComponent},
  {path: 'editar/:codigo', component: AlunosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule],
  exports: [RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule]
})
export class AlunosRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoListComponent } from './cursos-list/cursos-list.component';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { MatCardModule } from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

const routes: Routes = [
  {path: '', component: CursoListComponent},
  {path: 'novo', component: CursosFormComponent},
  {path: 'editar/:codigo', component: CursosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule],
  exports: [RouterModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule]
})
export class CursosRoutingModule { }

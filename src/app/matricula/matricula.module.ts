import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatriculaRoutingModule } from './matricula-routing.module';
import { MatriculaListComponent } from './matricula-list/matricula-list.component';


@NgModule({
  declarations: [
    MatriculaListComponent
  ],
  imports: [
    CommonModule,
    MatriculaRoutingModule
  ]
})
export class MatriculaModule { }

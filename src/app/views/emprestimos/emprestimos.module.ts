import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts';

import { EmprestimosRoutingModule } from './emprestimos.routing.module';
import { AngularMaterialModule } from '../../helpers/angular-material.module';

import { EmprestimosComponent } from './emprestimos.component';
import { DetalheEmprestimoComponent } from '../emprestimos/detalhe-emprestimo/detalhe-emprestimo.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';

@NgModule({
  declarations: [
    EmprestimosComponent,
    DetalheEmprestimoComponent,
    OportunidadesComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ChartsModule,
    EmprestimosRoutingModule,
    AngularMaterialModule
  ]
})
export class EmprestimosModule { }

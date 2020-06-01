import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { DetalheEmprestimoComponent } from '../emprestimos/detalhe-emprestimo/detalhe-emprestimo.component';
import { EmprestimosComponent } from './emprestimos.component';

const routes: Routes = [
  { path: '', component: EmprestimosComponent },
  { path: 'detalhe-emprestimo', component: DetalheEmprestimoComponent },
  { path: 'oportunidades', component: OportunidadesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmprestimosRoutingModule { }

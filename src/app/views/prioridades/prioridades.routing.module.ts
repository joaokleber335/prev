import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhePrioridadeComponent } from './detalhe-prioridade/detalhe-prioridade.component';
import { PrioridadesComponent } from './prioridades.component';

const routes: Routes = [
  { path: '', component: PrioridadesComponent },
  { path: 'detalhe-prioridade', component: DetalhePrioridadeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrioridadesRoutingModule { }

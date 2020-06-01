import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'emprestimos', pathMatch: 'full' },
  { path: 'emprestimos', loadChildren: './views/emprestimos/emprestimos.module#EmprestimosModule'},
  { path: 'prioridades', loadChildren: './views/prioridades/prioridades.module#PrioridadesModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

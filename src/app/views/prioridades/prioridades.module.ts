import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';


import { PrioridadesRoutingModule } from './prioridades.routing.module';
import { AngularMaterialModule } from './../../helpers/angular-material.module';

import { PrioridadesComponent } from './prioridades.component';
import { DetalhePrioridadeComponent } from './detalhe-prioridade/detalhe-prioridade.component';

@NgModule({
  declarations: [
    PrioridadesComponent,
    DetalhePrioridadeComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PrioridadesRoutingModule,
    AngularMaterialModule
  ]
})
export class PrioridadesModule { }

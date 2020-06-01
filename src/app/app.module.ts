import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from './helpers/angular-material.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EmprestimosModule } from './views/emprestimos/emprestimos.module';
import { PrioridadesModule } from './views/prioridades/prioridades.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularMaterialModule,
    FlexLayoutModule,
    EmprestimosModule,
    PrioridadesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

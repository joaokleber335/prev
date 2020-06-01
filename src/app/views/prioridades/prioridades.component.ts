import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prioridades',
  templateUrl: './prioridades.component.html',
  styleUrls: ['./prioridades.component.scss']
})
export class PrioridadesComponent implements OnInit {

  public prioridades = [
    { title: 'Quais as suas prioridades?' },
    { title: 'Investimento' },
    { title: 'Saúde' },
    { title: 'Conforto' },
    { title: 'Lazer' }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetalhePrioridade() {
    this.router.navigate(['prioridades/detalhe-prioridade']);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oportunidades',
  templateUrl: './oportunidades.component.html',
  styleUrls: ['./oportunidades.component.scss']
})
export class OportunidadesComponent implements OnInit {

  public oportunidades = [
    { title: 'Empréstimo emergêncial para cirurgias' },
    { title: 'Empréstimo para exames' },
    { title: 'Empréstimo para remédios' },
    { title: 'Esporte e Bem Viver' },
    { title: 'Ortodontia' }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

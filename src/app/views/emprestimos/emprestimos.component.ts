import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emprestimos',
  templateUrl: './emprestimos.component.html',
  styleUrls: ['./emprestimos.component.scss']
})
export class EmprestimosComponent implements OnInit {

    public informacoesEmprestimo = [
      { title: 'Informações (AutoEmpréstimo):',
      informacoes: [
        { title: 'Valor Retirado', value: 'R$ 400,00'},
        { title: 'Taxa Atribuida', value: 'R$ 3,5% a.m'},
        { title: 'Motivo da Retirada', value: 'Emergência Médica'}
      ]}
    ];

    public informacoesPrevidencia = [
      { title: 'Informações (Contrado de Previdência):',
      informacoes: [
        { title: 'Tipos de Previdência', value: 'PGBL' },
        { title: 'Valor Desejado ao Final', value: 'R$ 1.000.000,00' },
        { title: 'Tempo Estipulado', value: '40 anos' }
      ]}
    ];

    public barChartOptions: ChartOptions = {
      responsive: true,
    };
    public barChartLabels: Label[] = ['Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
    public barChartType: ChartType = 'bar';
    public barChartLegend = true;

    public barChartData: ChartDataSets[] = [
      { data: [425 , 450, 500, 550, 600, 650, 700], label: 'Fluxo de contribuição' }
    ];

    public barChartColors: Color[] = [
      { backgroundColor: '#a654e8' }
    ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goDetalheEmprestimo() {
    this.router.navigate(['emprestimos/detalhe-emprestimo']);
  }

  goToPrioridades() {
    this.router.navigate(['prioridades']);
  }
}

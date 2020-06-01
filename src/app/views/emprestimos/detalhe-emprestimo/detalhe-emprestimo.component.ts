import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-detalhe-emprestimo',
  templateUrl: './detalhe-emprestimo.component.html',
  styleUrls: ['./detalhe-emprestimo.component.scss']
})
export class DetalheEmprestimoComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
  };
  public pieChartLabels: Label[] = ['Valor a pagar', 'Compensado'];
  public pieChartData: number[] = [443.49, 200.00];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];

  public emprestimos = [
    { title: 'Empréstimo', value: '10% do total', title2: 'Juros', value2: '2,5% a.m'},
    { title: 'Empréstimo', value: '15% do total', title2: 'Juros', value2: '3% a.m'},
    { title: 'Empréstimo', value: '20% do total', title2: 'Juros', value2: '3,5% a.m'},
    { title: 'Empréstimo', value: '25% do total', title2: 'Juros', value2: '4% a.m'},
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToOportunidades() {
    this.router.navigate(['emprestimos/oportunidades'])
  }

}

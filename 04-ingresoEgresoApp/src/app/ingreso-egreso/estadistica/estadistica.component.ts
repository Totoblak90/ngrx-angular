import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { ChartData, ChartEvent } from 'chart.js';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
  styleUrls: ['./estadistica.component.scss'],
})
export class EstadisticaComponent implements OnInit {
  ingresosTotales: number = 0;
  egresosTotales: number = 0;

  cantidadIngresos: number = 0;
  cantidadEgresos: number = 0;

  private store = inject(Store<AppState>);

  ngOnInit(): void {
    this.store.select('ingresoEgreso').subscribe(({ items }) => {

      this.ingresosTotales = 0;
      this.egresosTotales = 0;
      this.cantidadEgresos = 0;
      this.cantidadIngresos = 0;

      for (const item of items) {
        if (item.tipo === 'ingreso') {
          this.ingresosTotales += item.monto;
          this.cantidadIngresos++;
        } else {
          this.egresosTotales += item.monto;
          this.cantidadEgresos++;
        }
      }

      this.doughnutChartData.datasets = [ { data: [ this.ingresosTotales, this.egresosTotales ] } ]
    });
  }

  // Chart js

  public doughnutChartLabels: string[] = ['Ingresos', 'Egresos'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [ { data: [ ] } ],
  };
}

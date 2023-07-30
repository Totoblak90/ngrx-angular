import { Pipe, PipeTransform } from '@angular/core';
import { IngresoEgreso } from '../models/ingreso-egreso.model';

@Pipe({
  name: 'ordenIngresos',
})
export class OrdenIngresosPipe implements PipeTransform {
  transform(value: IngresoEgreso[]): IngresoEgreso[] {
    const ingresos = value.filter(item => item.tipo === 'ingreso').sort((a, b) => a.descripcion < b.descripcion ? -1 : 1);
    const egresos = value.filter(item => item.tipo === 'egreso').sort((a, b) => a.descripcion < b.descripcion ? -1 : 1);
    return [ ...ingresos, ...egresos]
  }
}

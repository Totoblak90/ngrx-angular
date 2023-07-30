import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdenIngresosPipe } from './orden-ingresos.pipe';

@NgModule({
  declarations: [OrdenIngresosPipe],
  imports: [CommonModule],
  exports: [OrdenIngresosPipe],
})
export class PipesModule {}

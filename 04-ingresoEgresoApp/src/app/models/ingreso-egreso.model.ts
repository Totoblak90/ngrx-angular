export class IngresoEgreso {

  constructor(
    public descripcion: string,
    public monto: number,
    public tipo: 'ingreso' | 'egreso',
    public uid?: string,
  ){}

}

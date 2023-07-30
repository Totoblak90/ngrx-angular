import { IngresoEgreso } from "./ingreso-egreso.model";

export class Usuario {
  constructor (
    public uid: string,
    public nombre: string,
    public email: string,
    public ingresoEgreso: IngresoEgreso[] = [],
  ) {}

  static fromFirebase( { email, uid, nombre }: {[key: string]: string} ) {
    return new Usuario(uid, nombre, email);
  }

}

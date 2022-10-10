import { Injectable } from '@angular/core';
import { Empleado } from '../interface/empleado.interface';


@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {


  listEmpleados: Empleado[] = [
      {nombre: 'pepe', apellido: 'gomes', puesto: 'dev', fechaInicio: new Date (2009,4,4) },
      {nombre: 'juan', apellido: 'lopez', puesto: 'rrhh', fechaInicio: new Date (2020,12,12) }, 
      {nombre: 'pedro', apellido: 'messi', puesto: 'gerente', fechaInicio: new Date (2010,6,6) },
      {nombre: 'luz', apellido: 'rojo', puesto: 'mantenimiento', fechaInicio: new Date (2005,5,3) },  
      {nombre: 'mia', apellido: 'rio', puesto: 'ventas', fechaInicio: new Date (1999,3,3) }
  ];

  constructor() { }

  getEmpleado(){
    return this.listEmpleados.slice();
  }

  eliminarEmpleado(index: number){
    this.listEmpleados.splice(index,1)
  }

  agregarEmpleado(empleado: Empleado){
    this.listEmpleados.push(empleado)
  }


//no logre hacer que la data que cargo al form 'alterando' la data fetcheada vincule realmente.
  editarEmpleado(empleado: Empleado, id: number){
      this.listEmpleados[id].nombre = empleado.nombre;
      this.listEmpleados[id].apellido = empleado.apellido;
      this.listEmpleados[id].puesto = empleado.puesto;
      this.listEmpleados[id].fechaInicio = empleado.fechaInicio;
  }


}

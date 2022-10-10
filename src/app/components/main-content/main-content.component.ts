import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/interface/empleado.interface';
import { EmpleadoService } from 'src/app/services/empleado.service';

//prueba edit con dialog
import { MatDialog } from '@angular/material/dialog';
import { DialogFormComponent } from '../dialog-form/dialog-form.component';




@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  nombre: string = ''
  formAddEmpleado!: FormGroup;
  listaEmpleados: Empleado[] = [];
  displayedColumns: string[] = ['nombre', 'apellido', 'puesto', 'fechaInicio', 'acciones'];
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatSort) sort!: MatSort;

  constructor( private fb: FormBuilder,
               private _empleadoService: EmpleadoService,
//prueba dialog edit FALLA
               private dialog: MatDialog               
               ) {
    this.formAddEmpleado = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      puesto: ['',Validators.required],
      fechaInicio: ['', Validators.required]
    });
   }

  ngOnInit(): void {
    this.cargarEmpleados()
  }

  cargarEmpleados(){
    this.listaEmpleados = this._empleadoService.getEmpleado();
    this.dataSource = new MatTableDataSource(this.listaEmpleados)
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  Filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  

// Pablo, como estas, aca la verdad tuve mucha dificltad y recurri a muchos tutoriales puesto que no entendia muy bien como llamar un regitro
// o sea, no sin un Http request ni un "id"s. la verdad eso me dificulto bastante.
  eliminarEmpleado(index: number){
    console.log(index)
    this._empleadoService.eliminarEmpleado(index);
    this.cargarEmpleados();
  }

  agregarEmpleado(){
    const empleado: Empleado = {
      nombre: this.formAddEmpleado.value.nombre,
      apellido: this.formAddEmpleado.value.apellido,
      puesto: this.formAddEmpleado.value.puesto,
      fechaInicio: this.formAddEmpleado.value.fechaInicio,
    }
    this._empleadoService.agregarEmpleado(empleado);
    this.cargarEmpleados();
  }
  
//prueba edit dialog falla, no altera la data y genera error

  openDialog(index:number) {
    this.dialog.open(DialogFormComponent,{
      data : this.listaEmpleados[index]
      
    })  
    this.cargarEmpleados();
    }

/*
    Pablo, esta fue otra idea que tuve pero no llego a concretar tampoco por la vinculacion entre componentes.
    no se bien como hacer la verdad, siempre que lo tuve que hacer pude usar peticiones http y  ahi podia,
    lastimosamente no solo no encontre documentacion de este tipo de vinculacion sino ya agote todas las posibilidades que pude.

  editarEmpleado(index: number){
      this._empleadoService.editarEmpleado(
        this.listaEmpleados[index], index
      );

    console.log(this.listaEmpleados[index])
    this.cargarEmpleados()
  }


*/
}

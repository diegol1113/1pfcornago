import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Empleado } from 'src/app/interface/empleado.interface';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-dialog-form',
  templateUrl: './dialog-form.component.html',
  styleUrls: ['./dialog-form.component.css']
})
export class DialogFormComponent implements OnInit {
  formAddEmpleado!: FormGroup;
  listaEmpleados: Empleado[] = [];

  constructor( private fb: FormBuilder,
    private _empleadoService: EmpleadoService,
//prueba dialog edit
    @Inject(MAT_DIALOG_DATA) public editData: any             
    )
    {
    this.formAddEmpleado = this.fb.group({
    nombre: ['', Validators.required],
    apellido: ['', Validators.required],
    puesto: ['', Validators.required],
    fechaInicio: ['', Validators.required]
    });

    if(this.editData){
      this.formAddEmpleado.controls['nombre'].setValue(this.editData.nombre);
      this.formAddEmpleado.controls['apellido'].setValue(this.editData.apellido);
      this.formAddEmpleado.controls['puesto'].setValue(this.editData.puesto);
      this.formAddEmpleado.controls['fechaInicio'].setValue(this.editData.fechaInicio);
    }
    }

  editEmpleado(){
    this.editData._empleadoService.editarEmpleado()
    this._empleadoService.getEmpleado()
  }

  ngOnInit(): void {
  }

  

}

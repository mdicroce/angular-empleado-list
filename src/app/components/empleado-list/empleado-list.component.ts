import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  listEmpleados: Empleado[] = [
    {
      legajo: 1, nombre: 'Juan', apellido: 'Perez', sexo: 'm', salario: 25000
    },
    {
      legajo: 2, nombre: 'Marcos', apellido: 'Gonzalez', sexo: 'm', salario: 65000
    },
    {
      legajo: 3, nombre: 'Marta', apellido: 'Garcia', sexo: 'f', salario: 75000
    },
    {
      legajo: 4, nombre: 'Maria', apellido: 'Navarro', sexo: 'f', salario: 80000
    },
    {
      legajo: 5, nombre: 'Joaquin', apellido: 'Marquez', sexo: 'm', salario: 80000
    },
  ]
  radioButtonSeleccionado:string = 't';

  empleadoCountRadioButtonChange(radioButtonSelec: string):void {
    this.radioButtonSeleccionado = radioButtonSelec;
  }
  getCuantity(sex: string): number{
    switch(sex){
      case 't':
        return this.listEmpleados.length;
      case 'm':
        return this.listEmpleados.filter(e => e.sexo === 'm').length
      case 'f':
        return this.listEmpleados.filter(e => e.sexo === 'f').length
      default: return 0
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}

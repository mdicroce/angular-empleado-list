import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent implements OnInit {
  @Input() todos:number = 0;
  @Input() fem:number= 0;
  @Input() mas:number= 0;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  radioButtonSeleccionado:string = 't';

  radioChange(): void{
    this.countRadioButtonChange.emit(this.radioButtonSeleccionado);
  }
  constructor() { }

  ngOnInit(): void {
    
  }

}

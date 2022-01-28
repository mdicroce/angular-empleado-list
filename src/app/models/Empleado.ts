export class Empleado {
	legajo: number;
	nombre: string;
	apellido: string;
	sexo: string;
	salario: number;

	constructor(legajo: number, nombre: string, apellido: string, sexo :string, salario: number){
		this.legajo = legajo;
		this.apellido = apellido;
		this.sexo = sexo;
		this.nombre = nombre;
		this.salario = salario;
	}
}
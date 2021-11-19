import { ListaItem } from "./lista-item.model";


export class Lista {
	
	id: number;
	titulo: string;
	creadaEn: Date;
	terminadaEn: Date;
	completada: boolean;
	items: ListaItem[];

	constructor(titulo: string) {

		this.titulo = titulo;
		this.creadaEn = new Date();
		this.completada = false;
		this.items = [];
		this.id = new Date().getTime(); // Esto nos da un numero entero y como las tareas no se cran en el mismo instante, obtenemos un time especifico para cada tarea y ese time es lo que usamos como id.
	}
}
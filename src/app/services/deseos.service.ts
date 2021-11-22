import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { // El constructor se va a llamar una unica vez cuando se haga referencia a este servicio por primera vez en un componente. Aunque llame a este servicio en varios componentes, este se dispara una unica vez, la primera vez que es llamado.
    this.cargarStorage();
  }
  
  crearLista(titulo: string) {
    const nuevaLista = new Lista(titulo);
    this.listas.push(nuevaLista);
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('data', JSON.stringify(this.listas)); //JSON.stringify lo que hace es convertir un objeto en un json valido de tipo string
  }

  cargarStorage(){
    if (localStorage.getItem('data')) this.listas = JSON.parse(localStorage.getItem('data')); // Validamos que exista la data en el localStorage y si existe inicializamos this.listas con esta data, de lo contrario no hacemos nada y this.listas queda vacio porque cuando lo declaramos lo inicializamos vacio. Esta validacion la hacemos porque de lo contrario, si solo hacemos JSON.parse(localStorage.getItem('data')) y la data no existe, el JSON.parse devolveria null y eso nos daria un error.
  } 
}


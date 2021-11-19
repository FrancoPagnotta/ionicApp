import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { // Este constructor se va a llamar una unica vez aunque haga referencia a este servicio en varios componentes, o sea lo que este constructor contenga se va a ejecutar una unica vez aunque haga referencia a este servicio en varios componentes. 
    
    const lista1 = new Lista('Recolectar piedras del infinito');
    const lista2 = new Lista('Heroes a desaparecer');

    this.listas.push(lista1, lista2);

    console.log('Listas --> ',this.listas);
  }
}

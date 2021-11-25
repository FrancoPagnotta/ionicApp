import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtro',
  pure: false // Por defecto, todos los pipes son puros, o sea por defecto su propiedad pure es true. Esto quiere decir que se van a llamar solo cuando el ciclo de deteccion de cambios de angular detecte cambios en el componente en donde esta siendo usado el pipe. En cambio, cuando lo seteamos como impuro o sea pure: false, de esa forma estamos haciendo que este pipe pueda ser llamado cuando el ciclo de deteccion de angular detecte cambios en otro componente fuera del componente en donde esta siendo usado el pipe. Resumen, con pure: false, cada vez que se dispare el ciclo de deteccion de cambios de angular, este pipe va a ser llamado.
})
export class FiltroPipe implements PipeTransform {

  transform(listas: Lista[], finalizada: boolean = true): Lista[] {
    
    return listas.filter(lista =>  lista.completada === finalizada); // Retorna todas las lista que esten completadas o sea que tengan a su propiedad completada en true
  }

}

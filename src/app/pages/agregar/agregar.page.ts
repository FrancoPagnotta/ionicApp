import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaItem } from 'src/app/models/lista-item.model';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string;

  constructor( private _deseosService: DeseosService,
              private _route: ActivatedRoute ) {

    const listaId = this._route.snapshot.paramMap.get('listaId'); // Usamos snapshot.paramMap para obtener un parametro de la ruta sin tener que andar generando un observable
    this.lista = this._deseosService.obtenerLista(listaId);
  }

  ngOnInit() {
  }

  agregarItem() {
    if (this.nombreItem.length === 0) return;
    
    const nuevoItem = new ListaItem(this.nombreItem);
    this.lista.items.push(nuevoItem);

    this.nombreItem = '';
    this._deseosService.guardarStorage();
  }

  cambioCheck(item: ListaItem) {
    const pendientes = this.lista.items.filter(itemData => !itemData.completado).length;
    console.log({ pendientes });

    if (pendientes === 0) {
      this.lista.completada = true;
      this.lista.terminadaEn = new Date();
    } else {
      this.lista.completada = false;
      this.lista.terminadaEn = null;
    }

    this._deseosService.guardarStorage();
    console.log(this._deseosService.listas);
  }

  borrarItem(i: number) {
    this.lista.items.splice(i,1);
    this._deseosService.guardarStorage();
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminada = true;

  constructor(public _deseosService: DeseosService, private _router: Router) { }

  ngOnInit() {}

  verLista(id: number | string) {
    if (this.terminada) this._router.navigateByUrl(`/tabs/tab2/agregar/${id}`);
    else this._router.navigateByUrl(`/tabs/tab1/agregar/${id}`)
  }

  borrarLista(lista: Lista) {
    this._deseosService.borrarLista(lista);
  }

}

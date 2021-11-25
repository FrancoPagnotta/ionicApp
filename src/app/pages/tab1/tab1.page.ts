import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(public _deseosService: DeseosService, 
              private _router: Router,
              public _alertController: AlertController ) {
  }

  async agregarLista() {
    // this._router.navigateByUrl('/tabs/tab1/agregar');
    const alert = await this._alertController.create({
      cssClass: 'my-custom-class',
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Crear',
          handler: (data) => {

            console.log('Data del formulario --> ', data);
            if (data.titulo.length === 0) return;
            else {
              const listaId = this._deseosService.crearLista(data.titulo);
              this._router.navigateByUrl(`/tabs/tab1/agregar/${listaId}`);
            };
            
          }
        }
      ]
    });
    
    await alert.present();
    
  }
  
}
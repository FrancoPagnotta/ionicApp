import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Lo que trae es el ngFor, ngIf, ngSwitch, etc
import { ListasComponent } from './listas/listas.component';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';



@NgModule({
  declarations: [
    ListasComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports: [
    ListasComponent,
  ]
})
export class ComponentsModule { }

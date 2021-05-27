import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

//Decorador
@NgModule({
    //componentes
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
})

export class HeroesModule{

}
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {

  constructor() { 
    console.log("mensaje de constructor");
  }

  heroes:string[]=['Spiderman','SuperWoman','Batman','Hulk'];
  heroeBorrado:string='';
   
  borrarHeroe(){
    console.log("borrando ");   
    this.heroeBorrado=this.heroes.shift()||'';
    console.log(this.heroeBorrado);
  }
 
}

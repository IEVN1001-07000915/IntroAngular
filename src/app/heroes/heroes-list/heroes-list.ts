import { Component } from '@angular/core';
import { IHeroes } from '../heroes';


@Component({
  selector: 'app-heroes-list',
  standalone: false,
  templateUrl: './heroes-list.html',
})
export class HeroesList {
  imageWidth:number=40;
  imageMargin:number=2;
  muestraImage:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImage=!this.muestraImage;
  }


  heroes:IHeroes[]=[
    
    {imagen:'https://dragonball-api.com/characters/goku_normal.webp',
    nombre:'Goku',
    description:'El protagonista de la serie, conocido por su gran poder y personalidad amigable.',
    race:'Saiyan',
    ki:6000000  
  },
  {imagen:'https://dragonball-api.com/transformaciones/vegeta SSJ (2).webp',
    nombre:'Vegeta',
    description:'Príncipe de los Saiyans, inicialmente un villano, pero luego se une a los Z Fighters.',
    race:'Saiyan',
    ki:5400000  
  },
  {imagen:'https://dragonball-api.com/characters/picolo_normal.webp',
    nombre:'Piccolo',
    description:'Es un namekiano que surgió tras ser creado en los últimos momentos de vida de su padre, siendo su actual reencarnación.',
    race:'Namekian',
    ki:200000  
  },
  {imagen:'https://dragonball-api.com/characters/Freezer.webp',
    nombre:'Freezer',
    description:'reezer es el tirano espacial y el principal antagonista de la saga de Freezer.',
    race:'Frieza Race',
    ki:530000  
  },
  {imagen:'https://dragonball-api.com/characters/gohan.webp',
    nombre:'Gohan',
    description:'Son Gohanda en su tiempo en España, o simplemente Gohan en Hispanoamérica, es uno de los personajes principales de los arcos argumentales de Dragon Ball Z',
    race:'Saiyan',
    ki:9000000  
  },
  ]

}

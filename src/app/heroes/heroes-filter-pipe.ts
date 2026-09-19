import { Pipe, PipeTransform } from '@angular/core';
import { IHeroes } from './heroes';

@Pipe({
  name: 'heroesFilter',
  standalone: false,
})
export class HeroesFilterPipe implements PipeTransform {
  transform(value: IHeroes[], args: string): IHeroes[] {
    let filter:string=args?args.toLocaleUpperCase():'';

    return filter?value.filter((hero:IHeroes))=>
      hero.nombre.toLoccaleLowerCase().indexOf(filter)!==-1):value;
  }
}

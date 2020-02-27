import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipovfindv'
})
export class TipovfindvPipe implements PipeTransform {

  transform(value: any, args: any[]): any {
    for(let a of args) {
      if (a.id == value) return a.valor;
    }
    return value;
  }

}

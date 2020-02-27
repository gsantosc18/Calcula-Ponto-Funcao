import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tipocfindc'
})
export class TipocfindcPipe implements PipeTransform {

  transform(value: any, args: any[], args2: any[]): any {
    if (!args || !args2) return value;
    for (let a of args) {
      if (a.id == value) {
        let tipo = a;
        for (let b of args2) {
          if (b.id == tipo.classificacao) return b.nome;
        }
      }
    }
    return value;
  }

}

import { Pipe, PipeTransform } from '@angular/core';
import { Tipo } from './tipo';

@Pipe({
    name: 'tipopipe'
})
export class TipoPipe implements PipeTransform {
    transform(value: any, args?: Tipo[]): any {
        for (let a of args) {
            if (a.id == value) return a.nome;
        }
        return value;
    }

}

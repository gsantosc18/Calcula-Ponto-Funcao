import { Pipe, PipeTransform } from '@angular/core';
import { Classificacao } from './classificacao';

@Pipe({
    name: "classificacaopipe"
})
export class ClassificacaoTipe implements PipeTransform {
    transform(value: any, args?: Classificacao[]):any {
        for (let a of args) {
            if (a.id == value) return a.nome;
        }
        return value;
    }

}
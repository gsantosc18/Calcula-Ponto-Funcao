import { take } from 'rxjs/operators';
import { Tipoclassificacao } from './tipoclassificacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TipoclassificacaoService {
    private api: string = `${environment.api}/tipoclassificacaos`;

    constructor(private http: HttpClient) { }

    all() {
        return this.http.get<Tipoclassificacao[]>(this.api);
    }

    save(tipoclassificacao: Tipoclassificacao) {
        return this.http.post(this.api, tipoclassificacao).pipe(take(1));
    }

    delete(tipoclassificacao:Tipoclassificacao) {
        return this.http.delete(`${this.api}/${tipoclassificacao.id}`).pipe( take(1) );
    }

    get(id:number) {
        return this.http.get<Tipoclassificacao>(`${this.api}/${id}`).pipe(take(1));
    }

    findByTipoAndClassificacao(tipo:string,classificacao:string) {
        const data = {
            tipo: tipo,
            classificacao:classificacao
        };
        return this.http.get<Tipoclassificacao[]>(this.api,{params:data}).pipe(take(1));
    }

    getQuery(query:string) {
        return this.http.get<Tipoclassificacao[]>(`${this.api}?${query}`).pipe(take(1));
    }

}

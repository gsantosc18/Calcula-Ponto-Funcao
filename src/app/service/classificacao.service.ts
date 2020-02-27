import { Classificacao } from './classificacao';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ClassificacaoService {

    private api: string = `${environment.api}/classificacao`;

    constructor(private http: HttpClient) { }

    all() {
        return this.http.get<Classificacao[]>(this.api).pipe(take(1));
    }

}

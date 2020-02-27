import { take } from 'rxjs/operators';
import { Orcamento } from './orcamento';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {
  private api: string = `${environment.api}/orcamentos`;

  constructor(private http: HttpClient) { }

  all(id: any) {
    let data = { 
      projeto: id,
      '_expand':"tipoclassificacao"
    };
    return this.http.get<Orcamento[]>(this.api, { params: data }).pipe(take(1));
  }

  save(orcamento: Orcamento) {
    return this.http.post(this.api, orcamento).pipe(take(1));
  }

  delete(id) {
    return this.http.delete(`${this.api}/${id}`).pipe(take(1));
  }

  get(id: number) {
    return this.http.get<Orcamento>(`${this.api}/${id}`).pipe(take(1));
  }

  update(orcamento: Orcamento) {
    return this.http.put(`${this.api}/${orcamento.id}`, orcamento).pipe(take(1));
  }
}

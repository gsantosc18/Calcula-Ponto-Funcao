import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { take } from 'rxjs/operators';
import { Projeto } from './projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  private api: string = `${environment.api}/projetos`;

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Projeto[]>(this.api);
  }

  save(projeto: Projeto) {
    return this.http.post(this.api, projeto).pipe(take(1));
  }

  delete(projeto: Projeto) {
    return this.http.delete(`${this.api}/${projeto.id}`).pipe(take(1));
  }

  get(id:number) {
    return this.http.get<Projeto>( `${this.api}/${id}` ).pipe(take(1));
  }

  update(projeto:Projeto) {
    return this.http.put(`${this.api}/${projeto.id}`,projeto).pipe(take(1));
  }

}

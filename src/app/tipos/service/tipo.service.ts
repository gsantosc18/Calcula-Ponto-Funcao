import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { take } from 'rxjs/operators';
import { Tipo } from './tipo';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private api: string = `${environment.api}/tipos`;

  constructor(private http: HttpClient) { }

  all() {
    return this.http.get<Tipo[]>(this.api);
  }

  save(tipo: Tipo) {
    return this.http.post(this.api, tipo).pipe(take(1));
  }

  delete(tipo: Tipo) {
    return this.http.delete(`${this.api}/${tipo.id}`).pipe(take(1));
  }

}

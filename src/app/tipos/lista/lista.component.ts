import { Component, OnInit } from '@angular/core';
import { TipoService } from './../service/tipo.service';
import { Tipo } from './../service/tipo';
import { catchError, take } from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  tipos: Tipo[];

  constructor(private tiposService: TipoService) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.tiposService.all()
    .pipe(
      take(1),
      catchError(e => {
        console.error(e);
        return empty();
      })
    )
    .subscribe(t => { this.tipos = t; });
  }

  delete(tipo: Tipo) {
    let result = confirm("Deseja realmente apagar esse registro?")
    if (result) {
      this.tiposService.delete(tipo).subscribe(
        () => {
          this.list();
        },
        error => console.log(error)
      );
    }
  }

}

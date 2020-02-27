import { TipoService } from './../service/tipo.service';
import { Tipo } from './../service/tipo';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  tipo: Tipo = {
    id: null,
    nome: "",
    descricao: ""
  };

  constructor(private tipoService: TipoService, private router: Router) { }

  ngOnInit(): void {
  }

  save() {
    this.tipoService.save( this.tipo ).subscribe(
      success => {
        console.log(success);
        this.router.navigate(['/tipos']);
      },
      error => console.error(error)
    );
  }

}

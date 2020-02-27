import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { ProjetoService } from '../service/projeto.service';
import { Projeto } from '../service/projeto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  projetos: Projeto[];

  constructor(
    private projetoService: ProjetoService
  ) { }

  ngOnInit(): void {
    this.list();
  }

  list() {
    this.projetoService.all()
      .pipe(take(1))
      .subscribe(
        projetos => this.projetos = projetos,
        error => console.log(error)
      );
  }

  delete(projeto:Projeto) {
    console.log("Você apagou o registro!");
    let confirmacao = confirm("Deseja realmente apagar o projeto?");
    if (confirmacao) {
      this.projetoService.delete(projeto)
        .subscribe(
          () => this.list(),
          error => console.log(error)
        );
    }
  }

}

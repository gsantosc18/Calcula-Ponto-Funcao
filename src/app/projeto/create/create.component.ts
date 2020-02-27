import { Component, OnInit } from '@angular/core';
import { Projeto } from '../service/projeto';
import { ProjetoService } from '../service/projeto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  projeto:Projeto = {
    nome: "",
    descricao: "",
    valorpf: 0,
    status: 1
  };

  constructor(
    private projetoService: ProjetoService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  save() {
    this.projetoService.save(this.projeto)
      .subscribe(
        () => this.route.navigate(['/projetos']),
        error => console.log(error)
      );
  }

}

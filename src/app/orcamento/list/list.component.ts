import { TipoclassificacaoService } from './../../tipoclassificacao/service/tipoclassificacao.service';
import { ClassificacaoService } from './../../service/classificacao.service';
import { TipoService } from './../../tipos/service/tipo.service';
import { Classificacao } from './../../service/classificacao';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrcamentoService } from './../service/orcamento.service';
import { take } from 'rxjs/operators';
import { ProjetoService } from './../../projeto/service/projeto.service';
import { Projeto } from 'src/app/projeto/service/projeto';
import { Orcamento } from '../service/orcamento';
import { Tipo } from 'src/app/tipos/service/tipo';
import { Tipoclassificacao } from 'src/app/tipoclassificacao/service/tipoclassificacao';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private id: number;
  projeto: Projeto = null;
  orcamentos: Orcamento[];
  tipos: Tipo[];
  classificacoes: Classificacao[];
  tipoclassificacoes: Tipoclassificacao[];

  total: number = 0;

  constructor(
    private activatedroute: ActivatedRoute,
    private projetoService: ProjetoService,
    private orcamentoService: OrcamentoService,
    private tipoService: TipoService,
    private classificacaoService: ClassificacaoService,
    private tipoc: TipoclassificacaoService
  ) { }

  ngOnInit(): void {
    this.listTipoClassificacao();
    this.listTipo();
    this.listClassificacao();
    this.activatedroute.params.subscribe(
      param => {
        this.id = param.id;
        this.getProjeto();
        this.list();
      }
    );
  }

  getProjeto() {
    this.projetoService.get(this.id)
      .pipe(take(1))
      .subscribe(
        projeto => this.projeto = projeto,
        error => console.log(error)
      );
  }

  list() {
    this.orcamentoService.all(this.id)
      .subscribe(
        orcamentos => {
          this.orcamentos = orcamentos;
          this.getTotal(orcamentos);
        },
        error => console.log(error)
      );
  }

  listTipo() {
    this.tipoService.all()
      .subscribe(
        tipos => this.tipos = tipos,
        error => console.log(error)
      );
  }

  listClassificacao() {
    this.classificacaoService.all()
      .subscribe(
        classificacaoes => this.classificacoes = classificacaoes,
        error => console.log(error)
      );
  }

  listTipoClassificacao() {
    this.tipoc.all().subscribe(
      tipoc => this.tipoclassificacoes = tipoc,
      error => console.log(error)
    );
  }

  getTotal(orcamentos:Orcamento[]) {
    if (!orcamentos.length) {
      this.total = 0;
      return;
    }
    this.total = orcamentos
      .map( e => e.tipoclassificacao['valor'] )
      .reduce( (a,b) => a+b );
  }

  delete(id:number) {
    console.log("Você apagou o registro!");
    let confirmacao = confirm("Deseja realmente apagar o registro?");
    if (confirmacao) {
      this.orcamentoService.delete(id)
        .subscribe(
          () => this.list(),
          error => console.log(error)
        );
    }
  }
}
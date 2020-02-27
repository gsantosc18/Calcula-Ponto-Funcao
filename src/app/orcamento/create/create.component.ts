import { OrcamentoService } from './../service/orcamento.service';
import { take } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoclassificacaoService } from './../../tipoclassificacao/service/tipoclassificacao.service';
import { Classificacao } from 'src/app/service/classificacao';
import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/tipos/service/tipo';
import { TipoService } from 'src/app/tipos/service/tipo.service';
import { ClassificacaoService } from 'src/app/service/classificacao.service';
import { Tipoclassificacao } from 'src/app/tipoclassificacao/service/tipoclassificacao';
import { Projeto } from 'src/app/projeto/service/projeto';
import { ProjetoService } from 'src/app/projeto/service/projeto.service';
import { Orcamento } from '../service/orcamento';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    data: any = {
        descricao: "",
        classificacao: "",
        tipo: "",
        valor: 0
    };

    tipoclassificacao: Tipoclassificacao;

    tipos: Tipo[];
    classificacoes: Classificacao[];

    projeto: Projeto;

    constructor(
        private activatedroute: ActivatedRoute,
        private route: Router,
        private tipoService: TipoService,
        private classificacaoService: ClassificacaoService,
        private tipoc: TipoclassificacaoService,
        private projetoService: ProjetoService,
        private orcamentoService: OrcamentoService
    ) { }

    ngOnInit(): void {
        this.listTipo();
        this.listClassificacao();
        this.activatedroute.params.subscribe(
            param => this.getProjeto(param.id)
        );
    }

    getProjeto(id: number) {
        this.projetoService.get(id)
          .pipe(take(1))
          .subscribe(
            projeto => this.projeto = projeto,
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

    save() {
        let orcamento: Orcamento = {
            projeto: this.projeto.id,
            descricao: this.data.descricao,
            tipoclassificacaoId: this.tipoclassificacao.id
        };

        this.orcamentoService.save(orcamento)
            .subscribe(
                () => this.route.navigate(['/orcamentos',this.projeto.id]),
                error => console.log(error)
            );
    }

    findValor() {
        if (this.data.tipo.trim() && this.data.classificacao.trim()) {
            let tipo = this.data.tipo,
                classificacao = this.data.classificacao;
            this.tipoc.findByTipoAndClassificacao(tipo,classificacao)
                .subscribe(
                    tipoc => {
                        this.tipoclassificacao = tipoc[0];
                        this.data.valor = this.tipoclassificacao.valor;
                    }
                );
        }
    }

}

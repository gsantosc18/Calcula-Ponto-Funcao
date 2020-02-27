import { TipoService } from './../../tipos/service/tipo.service';
import { take } from 'rxjs/operators';
import { TipoclassificacaoService } from './../service/tipoclassificacao.service';
import { Tipoclassificacao } from './../service/tipoclassificacao';
import { Component, OnInit } from '@angular/core';
import { Tipo } from 'src/app/tipos/service/tipo';
import { Classificacao } from 'src/app/service/classificacao';
import { ClassificacaoService } from 'src/app/service/classificacao.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    tipocs: Tipoclassificacao[];
    tipos: Tipo[];
    classificacoes: Classificacao[];

    constructor(
        private tipocservice: TipoclassificacaoService,
        private tiposervice: TipoService,
        private classifService: ClassificacaoService
    ) { }

    ngOnInit(): void {
        this.listTipos();
        this.listClassificacao();
        this.list();
    }

    list() {
        this.tipocservice.all().pipe(take(1)).subscribe(
            tipocs => {
                this.tipocs = tipocs;
            }
        );
    }

    listTipos() {
        this.classifService.all().pipe(take(1)).subscribe(
            classificacoes => {
                this.classificacoes = classificacoes;
            }
        );
    }

    listClassificacao() {
        this.tiposervice.all().pipe(take(1)).subscribe(
            tipos => {
                this.tipos = tipos;
            }
        );
    }

    delete(tiposclassificacao:Tipoclassificacao) {
        let dialog = confirm("Deseja realmente apagar o registro?");
        if (dialog) {
            console.log("Você apagou o registro");
            this.tipocservice.delete( tiposclassificacao )
                .subscribe(
                    () => this.list(),
                    error => console.log(error)
                );
        }
    }

}
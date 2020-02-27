import { Router } from '@angular/router';
import { TipoService } from './../../tipos/service/tipo.service';
import { take } from 'rxjs/operators';
import { TipoclassificacaoService } from './../service/tipoclassificacao.service';
import { Tipoclassificacao } from './../service/tipoclassificacao';
import { Component, OnInit } from '@angular/core';
import { ClassificacaoService } from 'src/app/service/classificacao.service';
import { Classificacao } from 'src/app/service/classificacao';
import { Tipo } from 'src/app/tipos/service/tipo';

@Component({
    selector: 'app-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

    tipoclassificacao: Tipoclassificacao = {
        classificacao: 1,
        tipo: 1,
        valor: 0
    };

    tipos: Tipo[];
    classificacoes: Classificacao[];

    constructor(
        private tipocservice: TipoclassificacaoService,
        private tiposervice: TipoService,
        private classifService: ClassificacaoService,
        private route: Router
    ) { }

    ngOnInit(): void {
        this.listTipos();
        this.listClassificacao();
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

    save() {
        this.tipocservice.save(this.tipoclassificacao)
            .subscribe(
                () => this.route.navigate(['/tipoclassificacao']),
                error => console.log(error)
            );
    }
}

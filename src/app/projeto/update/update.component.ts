import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Projeto } from '../service/projeto';
import { ProjetoService } from '../service/projeto.service';

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
    projeto: Projeto = {
        nome: "",
        descricao:"",
        valorpf: 0,
        status: 0
    };

    constructor(
        private activatedRoute: ActivatedRoute,
        private projetoService: ProjetoService,
        private route: Router
    ) { }

    ngOnInit(): void {
        this.activatedRoute.params.subscribe(
            param => this.get(param.id)
        );
    }

    get(id:any) {
        this.projetoService.get(id)
            .subscribe(
                projeto => this.projeto = projeto
            );
    }

    save() {
        this.projetoService.update(this.projeto)
            .subscribe(
                () => this.route.navigate(['/projetos']),
                error => console.log(error)
            );
    }
}

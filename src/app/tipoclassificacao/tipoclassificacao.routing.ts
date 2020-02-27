import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    {
        path: "tipoclassificacao",
        children: [
            {
                path: "",
                component: ListComponent
            },
            {
                path: "create",
                component: CreateComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [
        RouterModule
    ]
})
export class TipoClassificacaoRouting { }
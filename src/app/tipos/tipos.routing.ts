import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ListaComponent } from './lista/lista.component';

const routes: Routes = [
    {
        path: 'tipos',
        children: [
            {
                path: "",
                component: ListaComponent,
            },
            {
                path: "create",
                component: CreateComponent
            }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class TiposRouting { }

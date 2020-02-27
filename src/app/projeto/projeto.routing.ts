import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateComponent } from './update/update.component';

const route: Routes = [
    {
        path: 'projetos',
        children: [
            {
                path: '',
                component: ListComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: ':id',
                component: UpdateComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(route)
    ],
    exports: [RouterModule]
})
export class ProjetoRouting {

}
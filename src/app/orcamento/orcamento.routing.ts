import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'orcamentos',
    children: [
      {
        path: ':id',
        component: ListComponent
      },
      {
        path: ':id/create',
        component: CreateComponent
      }
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrcamentoRouting { }

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProjetoRouting } from './projeto.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProjetoService } from './service/projeto.service';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    ProjetoRouting,
    FormsModule,
    RouterModule
  ],
  providers: [
    ProjetoService
  ]
})
export class ProjetoModule { }

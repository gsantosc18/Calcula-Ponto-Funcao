import { TipoclassificacaoService } from './../tipoclassificacao/service/tipoclassificacao.service';
import { FormsModule } from '@angular/forms';
import { TipovfindvPipe } from './../tipoclassificacao/service/tipovfindv.pipe';
import { TipocfindcPipe } from './../tipoclassificacao/service/tipocfindc.pipe';
import { TipoService } from './../tipos/service/tipo.service';
import { OrcamentoService } from './service/orcamento.service';
import { ProjetoService } from './../projeto/service/projeto.service';
import { OrcamentoRouting } from './orcamento.routing';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TipotfindtPipe } from '../tipoclassificacao/service/tipotfindt.pipe';
import { ClassificacaoService } from '../service/classificacao.service';
import { CreateComponent } from './create/create.component';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    TipotfindtPipe,
    TipocfindcPipe,
    TipovfindvPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    OrcamentoRouting,
    FormsModule
  ],
  providers: [
    ProjetoService,
    OrcamentoService,
    TipoService,
    ClassificacaoService,
    TipoclassificacaoService
  ]
})
export class OrcamentoModule { }

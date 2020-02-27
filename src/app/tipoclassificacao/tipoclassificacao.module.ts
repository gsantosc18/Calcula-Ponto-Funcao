import { ClassificacaoTipe } from './../service/classificacao.pipe';
import { ClassificacaoService } from './../service/classificacao.service';
import { TipoService } from './../tipos/service/tipo.service';
import { TipoPipe } from './../tipos/service/tipo.pipe';
import { TipoclassificacaoService } from './service/tipoclassificacao.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { TipoClassificacaoRouting } from './tipoclassificacao.routing';
import { CreateComponent } from './create/create.component';
import { RouterModule } from '@angular/router';
// import { TipocfindcPipe } from './service/tipocfindc.pipe';
// import { TipotfindtPipe } from './service/tipotfindt.pipe';
// import { TipovfindvPipe } from './service/tipovfindv.pipe';

@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    TipoPipe,
    ClassificacaoTipe,
    // TipocfindcPipe,
    // TipotfindtPipe,
    // TipovfindvPipe
  ],
  imports: [
    CommonModule,
    TipoClassificacaoRouting,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    TipoclassificacaoService,
    TipoService,
    ClassificacaoService
  ]
})
export class TipoclassificacaoModule { }

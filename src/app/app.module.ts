import { OrcamentoModule } from './orcamento/orcamento.module';
import { ProjetoModule } from './projeto/projeto.module';
import { TipoclassificacaoModule } from './tipoclassificacao/tipoclassificacao.module';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TipoService } from './tipos/service/tipo.service';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TiposModule } from './tipos/tipos.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TiposModule,
    TipoclassificacaoModule,
    ProjetoModule,
    OrcamentoModule
  ],
  providers: [TipoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

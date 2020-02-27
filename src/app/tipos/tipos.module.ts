import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { CreateComponent } from './create/create.component';
import { TiposRouting } from './tipos.routing';
// import { TipoPipe } from './service/tipo.pipe';



@NgModule({
  declarations: [
    ListaComponent,
    CreateComponent,
    // TipoPipe
  ],
  imports: [
    CommonModule,
    TiposRouting,
    FormsModule
  ],
  exports: [],
  providers:[]
})
export class TiposModule { }

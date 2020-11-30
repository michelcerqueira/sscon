import { NgModule } from '@angular/core';
import { CepRoutingModule } from './cep-routing.module';
import { MainComponent } from './components/main/main.component';
import { BuscaCepComponent } from './components/busca-cep/busca-cep.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ListaCepComponent } from './components/lista-cep/lista-cep.component';


@NgModule({
  imports: [
    CommonModule,
    CepRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ],
  declarations: [MainComponent, BuscaCepComponent, ListaCepComponent
  ]
})
export class CepModule { }

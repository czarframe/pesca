import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPageRoutingModule } from './cadastro-routing.module';

import { CadastroPage } from './cadastro.page';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@NgModule({
  declarations: [CadastroPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPageRoutingModule,
    FooterComponent,
    ReactiveFormsModule,
  ],
})
export class CadastroPageModule {}

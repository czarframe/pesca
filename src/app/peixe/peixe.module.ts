import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeixePageRoutingModule } from './peixe-routing.module';

import { PeixePage } from './peixe.page';
import { FooterComponent } from "../shared/components/footer/footer.component";

@NgModule({
    declarations: [PeixePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PeixePageRoutingModule,
        FooterComponent
    ]
})
export class PeixePageModule {}

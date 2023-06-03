import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeixeService } from '../service/peixe.service';
import {
  ItemReorderEventDetail,
  ToastController,
  AlertController,
} from '@ionic/angular';

@Component({
  selector: 'app-peixe',
  templateUrl: './peixe.page.html',
  styleUrls: ['./peixe.page.scss'],
})
export class PeixePage implements OnInit {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);
    ev.detail.complete();
  }

  constructor(
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController,
    private service: PeixeService
  ) {}

  ngOnInit() {}

  trocarPagina(route: string) {
    this.router.navigateByUrl(route);
  }

  async deletarPeixe(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmação',
      message: 'Tem certeza de que deseja excluir o peixe?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Excluir',
          handler: async () => {
            await this.service.deletePeixe(id);
            const toast = await this.toastController.create({
              message: 'Peixe excluído com sucesso!',
              duration: 2000,
              position: 'bottom',
            });
            toast.present();
          },
        },
      ],
    });

    alert.present();
  }
}

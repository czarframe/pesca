import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ItemReorderEventDetail } from '@ionic/angular';

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

  constructor(private router: Router) {}

  ngOnInit() {}

  trocarPagina(route: string) {
    this.router.navigateByUrl(route);
  }
}

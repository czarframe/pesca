import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FooterComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  trocarPagina(route: string) {
    this.router.navigateByUrl(route);
  }
}

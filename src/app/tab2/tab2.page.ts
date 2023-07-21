import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  links = [
    { id: 'link1', text: 'Ссылка 1' },
    { id: 'link2', text: 'Ссылка 2' },
    { id: 'link3', text: 'Ссылка 3' },
    { id: 'link4', text: 'Ссылка 4' },
    { id: 'link5', text: 'Ссылка 5' },
  ];

  constructor(private router: Router) {}

  openLinkDetails(id: string) {
    this.router.navigateByUrl(`tabs/tab2/links/${id}`);
  }
}

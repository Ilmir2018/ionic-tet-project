import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-links',
  templateUrl: './links.page.html',
  styleUrls: ['./links.page.scss'],
})
export class LinksPage implements OnInit {
  linkUrl: string;
  linkText: string;

  constructor(private route: ActivatedRoute) {
    this.linkUrl = '';
    this.linkText = '';
  }

  ngOnInit() {
    this.linkUrl = String(this.route.snapshot.paramMap.get('info'));
    this.linkText = this.getLinkTextById(this.linkUrl);
  }

  getLinkTextById(info: string): string {
    return `Какая то информация ${info}`;
  }
}

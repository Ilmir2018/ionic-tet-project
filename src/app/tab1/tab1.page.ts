import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalWindowPage } from './modal-window/modal-window.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalWindowPage,
    });
    await modal.present();
  }
}

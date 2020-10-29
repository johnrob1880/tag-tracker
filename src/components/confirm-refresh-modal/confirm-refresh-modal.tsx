import { Component, h } from '@stencil/core';

@Component({
  tag: 'confirm-refresh-modal'
})
export class ConfirmRefreshModal {
  render() {
    return [
      <ion-card>
        <ion-card-content>
          <ion-label>Are you sure?</ion-label>
        </ion-card-content>
      </ion-card>
    ]
  }
}

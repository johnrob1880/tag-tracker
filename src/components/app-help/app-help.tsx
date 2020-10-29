import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-help'
})
export class AppHelp {
  render() {
    return [
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/" />
            </ion-buttons>
            <ion-title>Help</ion-title>
          </ion-toolbar>
        </ion-header>,
        <ion-content fullscreen class="ion-padding">
        <h1>Available Actions:</h1>
        <ion-list>
          <ion-item lines="none">
            <ion-button color="danger" slot="start">
              <ion-icon name="close-outline"></ion-icon>
            </ion-button>
            <ion-label>Removes all tags.</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-button color="light" slot="start">
              <ion-icon name="refresh-outline"></ion-icon>
            </ion-button>
            <ion-label>Sets all tags to an un-done state.</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-button color="success" slot="start">
              <ion-icon name="checkmark-outline"></ion-icon>
            </ion-button>
            <ion-label>Sets all tags to a done state.</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-button color="dark" slot="start">
              <ion-icon name="eye-outline"></ion-icon>
            </ion-button>
            <ion-label>Hides / shows tags that are done.</ion-label>
          </ion-item>
          <ion-item lines="none">
            <ion-button color="primary" slot="start">
              <ion-icon name="help-outline"></ion-icon>
            </ion-button>
            <ion-label>Shows this page.</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>,

    ]
  }
}

import { Component, State, Watch, h } from '@stencil/core';
import { AppSettings, TagVisibility } from '../../interfaces/app-settings';

@Component({
  tag: 'app-settings-page',
})
export class AppSettingsPage {
  @State() settings: AppSettings;

  @Watch('settings')
  storeSettings() {
    localStorage.setItem('app_settings', JSON.stringify(this.settings));
  }

  componentWillLoad() {
    if (localStorage.getItem('app_settings')) {
      this.settings = JSON.parse(localStorage.getItem('app_settings')) as AppSettings;
    } else {
      this.settings = {
        visibility: TagVisibility.All,
        itemPlural: 'Tags',
        itemSingular: 'Tag',
      };
    }
  }

  updateItemPlural(e: any) {
    const { value } = e.target;

    this.settings = {
      ...this.settings,
      itemPlural: value,
    };
  }

  updateItemSingular(e: any) {
    const { value } = e.target;

    this.settings = {
      ...this.settings,
      itemSingular: value,
    };
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>Settings</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen class="ion-padding">
        <ion-list>
          <ion-item>
            <ion-label>Singular Name</ion-label>
            <ion-input placeholder="Enter a name" value={this.settings.itemSingular} onChange={e => this.updateItemSingular(e)}></ion-input>
          </ion-item>
          <ion-item>
            <ion-label>Plural Name</ion-label>
            <ion-input placeholder="Enter a name" value={this.settings.itemPlural} onChange={e => this.updateItemPlural(e)}></ion-input>
          </ion-item>
        </ion-list>
      </ion-content>,
    ];
  }
}

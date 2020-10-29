import { Component, State, Watch, h } from '@stencil/core';
import { alertController } from '@ionic/core';
import { TaggedItem } from '../../interfaces/tagged-item';
import { AppSettings, TagVisibility } from '../../interfaces/app-settings';
import { slugify } from '../../helpers/utils';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
})
export class AppHome {
  @State() tags: TaggedItem[];
  @State() settings: AppSettings;

  tagList: HTMLIonListElement;
  inputEl: HTMLIonInputElement;

  async presentAlertConfirm() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Remove all tags?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Okay',
          handler: () => {
            this.tags = [];
          },
        },
      ],
    });

    await alert.present();
  }

  componentWillLoad() {
    const storageKey = `tracker-${slugify(this.settings ? this.settings.itemSingular : 'tag')}`;

    if (localStorage.getItem(storageKey)) {
      this.tags = JSON.parse(localStorage.getItem(storageKey)) as TaggedItem[];
    } else {
      this.tags = [];
    }

    if (localStorage.getItem('app_settings')) {
      this.settings = {
        itemSingular: 'Tag',
        itemPlural: 'Tags',
        ...JSON.parse(localStorage.getItem('app_settings')) as AppSettings
      };
    } else {
      this.settings = {
        visibility: TagVisibility.All,
        itemSingular: 'Tag',
        itemPlural: 'Tags'
      };
    }
  }

  @Watch('tags')
  storeTags() {
    const storageKey = `tracker-${slugify(this.settings ? this.settings.itemSingular : 'tag')}`;

    localStorage.setItem(storageKey, JSON.stringify(this.tags));
  }

  @Watch('settings')
  storeSettings() {
    localStorage.setItem('app_settings', JSON.stringify(this.settings));
  }

  addTag() {
    this.tagList.closeSlidingItems();
    let inp = document.querySelector('input');

    let val = inp.value;
    let idx = this.tags.findIndex(x => x.tag === val);

    if (idx !== -1) {
      alert('Already exists');
      return;
    }
    this.tags = [...this.tags, { tag: val, done: false }];
    inp.value = '';
    inp.focus();
  }

  removeTag(tag: string) {
    this.tags = [...this.tags.filter(x => x.tag !== tag)];
    this.tagList.closeSlidingItems();
  }

  markTag(tag: TaggedItem) {
    tag.done = !tag.done;
    this.tags = [...this.tags];
    this.tagList.closeSlidingItems();
    console.log('marked', this.tags);
  }

  markAll(marked: boolean) {
    this.tags = [
      ...this.tags.map(x => {
        x.done = marked;
        return x;
      }),
    ];
  }

  getTagCountDone():number {
    return this.tags.filter(x => x.done).length;
  }

  getTagPercentDone() {
    if (!this.tags || !this.tags.length) {
      return 0;
    }
    return parseFloat((this.getTagCountDone() / this.tags.length).toFixed(2));
  }

  toggleVisibility() {
    this.settings = {
      visibility: this.settings.visibility === TagVisibility.All ? TagVisibility.DoneOnly : TagVisibility.All,
    };
  }

  render() {
    return [
      <ion-header>
        <ion-toolbar color="dark">
          <ion-title>Tag Tracker</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen class="ion-padding">
        <ion-fab horizontal="end" vertical="top" slot="fixed" edge>
          <ion-fab-button color="primary">
            <ion-icon name="ellipsis-vertical-outline"></ion-icon>
          </ion-fab-button>
          <ion-fab-list>
            <ion-fab-button color="danger" onClick={() => this.presentAlertConfirm()}>
              <ion-icon name="close-outline"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="light" onClick={() => this.markAll(false)}>
              <ion-icon name="refresh-outline"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="success" onClick={() => this.markAll(true)}>
              <ion-icon name="checkmark-outline"></ion-icon>
            </ion-fab-button>
            <ion-fab-button color="dark" onClick={() => this.toggleVisibility()}>
              <ion-icon name={this.settings.visibility === TagVisibility.DoneOnly ? 'eye-off-outline' : 'eye-outline'}></ion-icon>
            </ion-fab-button>
            <ion-fab-button href="/help" color="primary">
              <ion-icon name="help-outline"></ion-icon>
            </ion-fab-button>
          </ion-fab-list>
        </ion-fab>
        <ion-list>
          <ion-item>
            <ion-icon name="add" slot="start"></ion-icon>
            <ion-input autofocus inputmode="numeric" placeholder="Type tag" onFocus={() => this.tagList.closeSlidingItems()} ref={el => (this.inputEl = el)} onChange={() => this.addTag()} />
          </ion-item>
        </ion-list>
        <ion-list ref={el => (this.tagList = el as HTMLIonListElement)}>
          {this.tags.map(tag => (
            <ion-item-sliding hidden={tag.done && this.settings.visibility === TagVisibility.DoneOnly}>
              <ion-item lines="full">
                <ion-label>{tag.tag}</ion-label>
                {tag.done ? <ion-icon slot="start" color="success" name="checkmark-outline"></ion-icon> : <ion-icon slot="start" color="light" name="checkmark-outline"></ion-icon>}
              </ion-item>
              <ion-item-options side="start">
                <ion-item-option onClick={() => this.removeTag(tag.tag)} color="danger">
                  <ion-icon slot="icon-only" name="close-outline"></ion-icon>
                </ion-item-option>
              </ion-item-options>
              <ion-item-options side="end">
                <ion-item-option onClick={() => this.markTag(tag)} color={tag.done ? 'light' : 'success'}>
                  <ion-icon slot="icon-only" name={tag.done ? 'reload-outline' : 'checkmark-outline'}></ion-icon>
                </ion-item-option>
              </ion-item-options>
            </ion-item-sliding>
          ))}
        </ion-list>
      </ion-content>,
      <ion-footer>
      <ion-progress-bar color="primary" value={this.getTagPercentDone()}></ion-progress-bar>
        <ion-toolbar>
          <ion-title size="small">{this.getTagCountDone()} of {this.tags.length} done ({this.getTagPercentDone() * 100}%).</ion-title>
        </ion-toolbar>
      </ion-footer>,
    ];
  }
}

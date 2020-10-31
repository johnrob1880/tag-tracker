import { Component, h, Prop, Event, EventEmitter } from "@stencil/core";
import { TaggedItem } from "../../interfaces/tagged-item";

@Component({
  tag: 'notes-popover',
})
export class NotesPopover {
  @Prop({mutable: true}) tag: TaggedItem;
  @Event() noteSaved: EventEmitter<TaggedItem>;

  inputEl: any;

  clearNote() {
    this.tag.note = '';
    this.noteSaved.emit({...this.tag});
  }

  updateNote(e: any) {
    this.tag.note = e.target.value;

  }

  handleEnterKey(e:any) {
    let char = e.keyCode || e.which;
    if (char === 13) {
      this.noteSaved.emit({...this.tag});
    }
  }

  close() {
    this.noteSaved.emit({...this.tag});
  }

  render() {
    return (<ion-list class="ion-padding">
        <ion-item>
          <ion-input placeholder="Enter a note" onKeyUp={(e) => this.handleEnterKey(e)} onInput={(e) => this.updateNote(e)} value={this.tag.note ? this.tag.note : ''} />
        </ion-item>
        <ion-item lines="none">
          <ion-button slot="start" color="danger" onClick={() => this.clearNote()}>Clear</ion-button>
          <ion-button slot="end" expand="block" color="primary" onClick={() => this.close()}>OK</ion-button>
        </ion-item>
      </ion-list>)
  }
}

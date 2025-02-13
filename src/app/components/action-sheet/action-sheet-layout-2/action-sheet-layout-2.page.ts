import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'cs-action-sheet-layout-2',
  templateUrl: 'action-sheet-layout-2.page.html',
  styleUrls: ['action-sheet-layout-2.page.scss'],
})
export class ActionSheetLayout2Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onItemClickActionSheet = new EventEmitter();
  @Output() onChangeScroll = new EventEmitter();
  @Output() onComment = new EventEmitter();
  @Output() onLike = new EventEmitter();

  slideOpts = {
    effect: 'flip'
  };

  constructor(public actionSheetCtrl: ActionSheetController) { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onCommentFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onComment.emit(item);
  }

  onLikeFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onLike.emit(item);
  }

  async presentActionSheet(item) {
    if (event) {
      event.stopPropagation();
    }
    const actionSheet = await this.actionSheetCtrl.create(this.data.actionSheet);
    this.data.actionSheet.buttons.forEach(element => {
      element['handler'] = function () {
        this.onItemClickActionSheet.emit({ 'button': element, 'item': item });
      };
    });
    await actionSheet.present();
  }
}

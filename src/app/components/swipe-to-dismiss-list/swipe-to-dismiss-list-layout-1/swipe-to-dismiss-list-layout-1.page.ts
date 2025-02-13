import { Component, Output, EventEmitter, Input, ViewChild, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-swipe-to-dismiss-list-layout-1',
  templateUrl: 'swipe-to-dismiss-list-layout-1.page.html',
  styleUrls: ['swipe-to-dismiss-list-layout-1.page.scss'],
})
export class SwipeToDismissListLayout1Page implements OnChanges {
  @ViewChild('sliding', {static: false}) sliding;
  @ViewChild('dynamicList', {static: false}) dynamicList;

  @Input() data: any;

  @Output() onItemClick = new EventEmitter();
  @Output() onUndo = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onProceed = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onUndoFunc = () => {
    if (event) {
      event.stopPropagation();
    }
    this.sliding.closeOpened();
    this.onUndo.emit()
  }

  onDeleteFunc = (item: any): void => {
    if (event) {
      event.stopPropagation();
    }
    this.dynamicList.closeSlidingItems()
    const index = this.data.items.indexOf(item);
    if (index > -1) {
      this.data.items.splice(index, 1);
    }
    this.onDelete.emit(item)
  }

  onItemClickFunc(item) {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }

  onProceedFunc() {
    if (event) {
      event.stopPropagation();
    }
    this.onProceed.emit();
  }
}

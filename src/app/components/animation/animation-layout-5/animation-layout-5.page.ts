import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'cs-animation-layout-5',
  templateUrl: 'animation-layout-5.page.html',
  styleUrls: ['animation-layout-5.page.scss'],
})
export class AnimationLayout5Page implements OnChanges {
  @Input() data: any;

  @Output() onItemClick = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: { [propKey: string]: any }) {
    this.data = changes['data'].currentValue;
  }

  onItemClickFunc(item): void {
    if (event) {
      event.stopPropagation();
    }
    this.onItemClick.emit(item);
  }
}

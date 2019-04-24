import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemComponent implements OnInit {
  @Input() itemForm: FormGroup
  @Input() index: number;
  @Output() deleteItem: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleteItem.emit(this.index);
  }

}

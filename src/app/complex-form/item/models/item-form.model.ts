import { FormControl, Validators } from '@angular/forms';
import { Item } from './item.model';

export class ItemForm {
  name = new FormControl();
  value = new FormControl();

  constructor(
    item: Item
  ) {
    this.name.setValue(item.name);
    this.name.setValidators([Validators.required]);
    this.value.setValue(item.value);
  }
}

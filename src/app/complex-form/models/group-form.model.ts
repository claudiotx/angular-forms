import { FormArray, FormControl } from '@angular/forms';
import { Group } from './group.model';

export class GroupForm {
  title = new FormControl()
  items = new FormArray([])

  constructor(group: Group) {
    if (group.title) {
      this.title.setValue(group.title);
    }

    if (group.items) {
      this.items.setValue(group.items);
    }
  }
}

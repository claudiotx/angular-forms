import { Injectable } from '@angular/core'
import { Observable, BehaviorSubject } from 'rxjs'
import { FormGroup, FormBuilder, FormArray } from '@angular/forms'
import { GroupForm, Group } from './models'
import { ItemForm, Item } from './item';

@Injectable()
export class ComplexFormService {
  private groupForm:
  BehaviorSubject<FormGroup | undefined> = new BehaviorSubject(this.fb.group(new GroupForm(new Group('Complex Form Example'))))
  formsAggregation$: Observable<FormGroup> = this.groupForm.asObservable();

  constructor(private fb: FormBuilder) {}

  addItem() {
    console.log('addItem via service');
    const currentItem = this.groupForm.getValue();
    const currentItems = currentItem.get('items') as FormArray;
    currentItems.push(
      this.fb.group(
        new ItemForm(new Item())
      )
    )
    this.groupForm.next(currentItem);
  }

  deleteItem(position: number) {
    const currentItem = this.groupForm.getValue();
    const currentItems = currentItem.get('items') as FormArray;
    currentItems.removeAt(position);
    this.groupForm.next(currentItem);
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core'
import { FormGroup, FormArray } from '@angular/forms'
import { ComplexFormService } from './complex-form.service'
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-complex-form',
  templateUrl: './complex-form.component.html',
  styleUrls: ['./complex-form.component.scss']
})
export class ComplexFormComponent implements OnInit {
  groupForm: FormGroup
  formSubscription: Subscription
  formInvalid = false;
  items: FormArray;

  constructor(private complexFormService: ComplexFormService) { }

  ngOnInit() {
    this.formSubscription = this.complexFormService.formsAggregation$
      .subscribe(group => {
        console.log('subscription stream new form group arrived');
        this.groupForm = group;
        this.items = this.groupForm.get('items') as FormArray;
      });
  }
  ngOnDestroy() {
    this.formSubscription.unsubscribe();
  }

  addItem() {
    this.complexFormService.addItem();
  }

  deleteItem(position: number) {
    this.complexFormService.deleteItem(position);
  }

  saveGroup() {
    console.log('saving group', this.groupForm.value);
  }

}

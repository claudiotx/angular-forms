import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComplexFormComponent } from './complex-form/complex-form.component';
import { CustomFormComponent } from './custom-form/custom-form.component';

const routes: Routes = [
  {
    path: '',
    component: ComplexFormComponent,
    data: { type: undefined }
  },
  {
    path: 'dynamic-form',
    component: ComplexFormComponent,
    data: { type: undefined }
  },
  {
    path: 'custom-form',
    component: CustomFormComponent,
    data: { type: undefined }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Complex Form
import { ComplexFormComponent } from './complex-form/complex-form.component';
import { ItemComponent } from './complex-form/item/item.component'
import { ComplexFormService } from './complex-form/complex-form.service';
import { HeaderComponent } from './header/header.component';
import { CustomFormComponent } from './custom-form/custom-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ComplexFormComponent,
    ItemComponent,
    HeaderComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ComplexFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

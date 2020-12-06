import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormlyFormFieldModule } from '@ngx-formly/primeng/form-field';
import { FormlyInputNumber } from './inputnumber.type';

@NgModule({
  declarations: [FormlyInputNumber],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputNumberModule,

    FormlyFormFieldModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'inputnumber',
          component: FormlyInputNumber,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FormlyInputNumberModule { }

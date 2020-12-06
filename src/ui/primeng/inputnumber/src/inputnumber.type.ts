import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-primeng-inputnumber',
  template: `
  <p-inputNumber
      [mode]="to.mode || 'currency'"
      [currency]="to.currency || 'USD'"
      [currencyDisplay]="to.currencyDisplay || 'symbol'"
      [format]="to.format"
      [locale]="to.locale"
      [prefix]="to.prefix"
      [suffix]="to.suffix"
      [useGrouping]="to.useGrouping"
      [minFractionDigits]="to.minFractionDigits"
      [maxFractionDigits]="to.maxFractionDigits"
      [min]="to.min"
      [max]="to.max"
      [step]="to.step || 1"
      [showButtons]="to.showButtons"
      [buttonLayout]="to.buttonLayout || 'stacked'"
      [title]="to.title"
      [placeholder]="to.placeholder"
      [disabled]="to.disabled || null"
      [required]="to.required || null"
      [formControl]="formControl"
      [formlyAttributes]="field">
  </p-inputNumber>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormlyInputNumber extends FieldType {}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IxTypography,
  IxInput,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxRadioGroup,
  IxRadio,
  IxButton,
} from '@siemens/ix-angular/standalone';
import { PAGE_PADDING, FORM_MAX_WIDTH } from '@ix-starter/shared';

@Component({
  selector: 'app-forms-page',
  standalone: true,
  imports: [
    FormsModule,
    IxTypography,
    IxInput,
    IxSelect,
    IxSelectItem,
    IxDateInput,
    IxRadioGroup,
    IxRadio,
    IxButton,
  ],
  template: `
    <div class="forms-page" [style.padding]="PAGE_PADDING">
      <ix-typography format="h1">Forms</ix-typography>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience provides consistent form elements for collecting and validating user input.
      </ix-typography>

      <div class="form-container" [style.max-width]="FORM_MAX_WIDTH">
        <ix-input
          label="Inspector Name"
          placeholder="Jane Doe"
          helperText="Enter the certified inspector's full name"
          [value]="inspectorName"
          (valueChange)="inspectorName = $event.detail"
        ></ix-input>

        <ix-select
          label="Inspection Type"
          helperText="Choose the inspection to perform"
          (valueChange)="onInspectionTypeChange($event)"
        >
          <ix-select-item value="visual" label="Visual Inspection"></ix-select-item>
          <ix-select-item value="dimensional" label="Dimensional Check"></ix-select-item>
          <ix-select-item value="functional" label="Functional Test"></ix-select-item>
          <ix-select-item value="pressure" label="Pressure Test"></ix-select-item>
        </ix-select>

        <ix-date-input
          label="Inspection Date"
          helperText="Schedule the inspection"
          (valueChange)="onInspectionDateChange($event)"
        ></ix-date-input>

        <ix-radio-group
          label="Inspection Mode"
          helperText="Inline inspections take place during production. Offline sampling requires batch removal for lab testing."
          [value]="inspectionMode"
          (valueChange)="inspectionMode = $event.detail"
        >
          <ix-radio value="inline" label="In-line inspection"></ix-radio>
          <ix-radio value="offline" label="Offline sampling"></ix-radio>
        </ix-radio-group>

        <div class="button-row">
          <ix-button variant="secondary" (click)="handleCancel()">Cancel</ix-button>
          <ix-button variant="primary" (click)="handleSave()">Save</ix-button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .description {
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
    .form-container {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }
    .button-row {
      display: flex;
      gap: 1rem;
      margin-top: 0.5rem;
      justify-content: flex-end;
    }
  `],
})
export class FormsComponent {
  PAGE_PADDING = PAGE_PADDING;
  FORM_MAX_WIDTH = FORM_MAX_WIDTH;
  inspectorName = '';
  inspectionType = '';
  inspectionDate = '';
  inspectionMode = '';

  onInspectionTypeChange(event: CustomEvent<string | string[]>) {
    const value = event.detail;
    this.inspectionType = Array.isArray(value) ? value[0] || '' : value;
  }

  onInspectionDateChange(event: CustomEvent<string | undefined>) {
    this.inspectionDate = event.detail || '';
  }

  handleSave() {
    console.log({
      inspectorName: this.inspectorName,
      inspectionType: this.inspectionType,
      inspectionDate: this.inspectionDate,
      inspectionMode: this.inspectionMode,
    });
  }

  handleCancel() {
    this.inspectorName = '';
    this.inspectionType = '';
    this.inspectionDate = '';
    this.inspectionMode = '';
  }
}

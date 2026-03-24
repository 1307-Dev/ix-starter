<script setup lang="ts">
import { ref } from 'vue';
import {
  IxTypography,
  IxInput,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxRadioGroup,
  IxRadio,
  IxButton,
} from '@siemens/ix-vue';
import { PAGE_PADDING, FORM_MAX_WIDTH } from '@ix-starter/shared';

const inspectorName = ref('');
const inspectionType = ref('');
const inspectionDate = ref('');
const inspectionMode = ref('');

function handleSave() {
  console.log({
    inspectorName: inspectorName.value,
    inspectionType: inspectionType.value,
    inspectionDate: inspectionDate.value,
    inspectionMode: inspectionMode.value,
  });
}

function handleCancel() {
  inspectorName.value = '';
  inspectionType.value = '';
  inspectionDate.value = '';
  inspectionMode.value = '';
}
</script>

<template>
  <div :style="{ padding: PAGE_PADDING }">
    <IxTypography format="h1">
      Forms
    </IxTypography>
    <IxTypography
      format="body"
      style="display: block; margin-top: 0.5rem; margin-bottom: 2rem"
    >
      Siemens Industrial Experience provides consistent form elements for collecting and validating user input.
    </IxTypography>

    <div :style="{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: FORM_MAX_WIDTH }">
      <IxInput
        label="Inspector Name"
        placeholder="Jane Doe"
        helper-text="Enter the certified inspector's full name"
        :value="inspectorName"
        @value-change="inspectorName = $event.detail"
      />

      <IxSelect
        label="Inspection Type"
        helper-text="Choose the inspection to perform"
        @value-change="inspectionType = String($event.detail)"
      >
        <IxSelectItem
          value="visual"
          label="Visual Inspection"
        />
        <IxSelectItem
          value="dimensional"
          label="Dimensional Check"
        />
        <IxSelectItem
          value="functional"
          label="Functional Test"
        />
        <IxSelectItem
          value="pressure"
          label="Pressure Test"
        />
      </IxSelect>

      <IxDateInput
        label="Inspection Date"
        helper-text="Schedule the inspection"
        @value-change="inspectionDate = $event.detail ?? ''"
      />

      <IxRadioGroup
        label="Inspection Mode"
        helper-text="Inline inspections take place during production. Offline sampling requires batch removal for lab testing."
        :value="inspectionMode"
        @value-change="inspectionMode = $event.detail"
      >
        <IxRadio
          value="inline"
          label="In-line inspection"
        />
        <IxRadio
          value="offline"
          label="Offline sampling"
        />
      </IxRadioGroup>

      <div style="display: flex; gap: 1rem; margin-top: 0.5rem; justify-content: flex-end">
        <IxButton
          variant="secondary"
          @click="handleCancel"
        >
          Cancel
        </IxButton>
        <IxButton
          variant="primary"
          @click="handleSave"
        >
          Save
        </IxButton>
      </div>
    </div>
  </div>
</template>

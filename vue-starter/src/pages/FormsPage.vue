<script setup lang="ts">
import { ref } from 'vue';
import { showMessage } from '@siemens/ix';
import {
  IxContentHeader,
  IxTypography,
  IxInput,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxRadioGroup,
  IxRadio,
  IxButton,
} from '@siemens/ix-vue';
import {
  FORM_MAX_WIDTH,
  LABEL_INSPECTOR_NAME,
  LABEL_INSPECTION_TYPE,
  LABEL_INSPECTION_DATE,
  INSPECTION_TYPES,
  PAGE_FORMS,
} from '../shared';

const inspectorName = ref('');
const inspectionType = ref('');
const inspectionDate = ref('');
const inspectionMode = ref('inline');

function handleSave() {
  console.log({
    inspectorName: inspectorName.value,
    inspectionType: inspectionType.value,
    inspectionDate: inspectionDate.value,
    inspectionMode: inspectionMode.value,
  });
  showMessage({
    icon: 'info',
    messageTitle: 'Time slot unavailable',
    message: 'Inspections can only be scheduled during operational hours, 06:00–22:00. Select a time within this range.',
    actions: [
      { id: 'cancel', type: 'cancel', text: 'Cancel' },
      { id: 'ok', type: 'okay', text: 'OK' },
    ],
    centered: true,
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
  <IxContentHeader :header-title="PAGE_FORMS" />
  <IxTypography format="body" class="description">
    Siemens Industrial Experience provides consistent form elements for collecting and validating
    user input.
  </IxTypography>

  <div class="form-container" :style="{ maxWidth: FORM_MAX_WIDTH }">
      <IxInput
        :label="LABEL_INSPECTOR_NAME"
        placeholder="Jane Doe"
        helper-text="Enter the certified inspector's full name"
        :value="inspectorName"
        @value-change="inspectorName = $event.detail"
      />

      <IxSelect
        :label="LABEL_INSPECTION_TYPE"
        helper-text="Choose the inspection to perform"
        @value-change="inspectionType = String($event.detail)"
      >
        <IxSelectItem v-for="type in INSPECTION_TYPES" :key="type" :value="type" :label="type" />
      </IxSelect>

      <IxDateInput
        :label="LABEL_INSPECTION_DATE"
        helper-text="Schedule the inspection"
        placeholder="DD/MM/YYYY"
        @value-change="inspectionDate = $event.detail ?? ''"
      />

      <IxRadioGroup
        label="Inspection Mode"
        helper-text="In-line inspection takes place during production. Offline sampling requires batch removal for lab testing."
        :value="inspectionMode"
        @value-change="inspectionMode = $event.detail"
      >
        <IxRadio value="inline" label="In-line inspection" />
        <IxRadio value="offline" label="Offline sampling" />
      </IxRadioGroup>

      <div class="button-row">
        <IxButton variant="secondary" @click="handleCancel"> Cancel </IxButton>
        <IxButton variant="primary" @click="handleSave"> Save </IxButton>
      </div>
    </div>
</template>

<style scoped>
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
</style>

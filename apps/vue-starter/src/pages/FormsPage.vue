<template>
  <div :style="{ padding: PAGE_PADDING }">
    <ix-typography format="h1">Forms</ix-typography>
    <ix-typography format="body" style="display: block; margin-top: 0.5rem; margin-bottom: 2rem">
      Siemens Industrial Experience provides consistent form elements for collecting and validating user input.
    </ix-typography>

    <div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 480px">
      <ix-input
        label="Inspector Name"
        helper-text="Enter the certified inspector's full name"
        :value="inspectorName"
        @value-change="inspectorName = $event.detail"
      ></ix-input>

      <ix-select
        label="Inspection Type"
        helper-text="Choose the inspection to perform"
        @value-change="inspectionType = $event.detail"
      >
        <ix-select-item value="visual" label="Visual Inspection"></ix-select-item>
        <ix-select-item value="dimensional" label="Dimensional Check"></ix-select-item>
        <ix-select-item value="functional" label="Functional Test"></ix-select-item>
        <ix-select-item value="pressure" label="Pressure Test"></ix-select-item>
      </ix-select>

      <ix-date-input
        label="Inspection Date"
        helper-text="Schedule the inspection"
        @value-change="inspectionDate = $event.detail"
      ></ix-date-input>

      <ix-radio-group
        label="Inspection Mode"
        helper-text="Inline inspections take place during production. Offline sampling requires batch removal for lab testing."
        :value="inspectionMode"
        @value-change="inspectionMode = $event.detail"
      >
        <ix-radio value="inline" label="In-line inspection"></ix-radio>
        <ix-radio value="offline" label="Offline sampling"></ix-radio>
      </ix-radio-group>

      <div style="display: flex; gap: 1rem; margin-top: 0.5rem; justify-content: flex-end">
        <ix-button variant="secondary" @click="handleCancel">Cancel</ix-button>
        <ix-button variant="primary" @click="handleSave">Save</ix-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PAGE_PADDING } from '@ix-starter/shared';

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

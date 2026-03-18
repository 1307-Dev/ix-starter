

import { useState } from 'react';
import {
  IxInput,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxRadioGroup,
  IxRadio,
  IxButton,
  IxTypography,
} from '@siemens/ix-react';

function Forms() {
  const [inspectorName, setInspectorName] = useState('');
  const [inspectionType, setInspectionType] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');
  const [inspectionMode, setInspectionMode] = useState('');

  const handleSave = () => {
    console.log({ inspectorName, inspectionType, inspectionDate, inspectionMode });
  };

  const handleCancel = () => {
    setInspectorName('');
    setInspectionType('');
    setInspectionDate('');
    setInspectionMode('');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <IxTypography format="h1">Forms</IxTypography>
      <IxTypography format="body" style={{ display: 'block', marginTop: '0.5rem', marginBottom: '2rem' }}>
        Siemens Industrial Experience provides consistent form elements for collecting and validating user input.
      </IxTypography>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '480px' }}>

        <IxInput
          label="Inspector Name"
          helperText="Enter the certified inspector's full name"
          value={inspectorName}
          onValueChange={(e) => setInspectorName(e.detail)}
        />

        <IxSelect
          label="Inspection Type"
          helperText="Choose the inspection to perform"
          onValueChange={(e) => setInspectionType(e.detail as string)}
        >
          <IxSelectItem value="visual" label="Visual Inspection" />
          <IxSelectItem value="dimensional" label="Dimensional Check" />
          <IxSelectItem value="functional" label="Functional Test" />
          <IxSelectItem value="pressure" label="Pressure Test" />
        </IxSelect>

        <IxDateInput
          label="Inspection Date"
          helperText="Schedule the inspection"
          onValueChange={(e) => setInspectionDate(e.detail as string)}
        />

        <IxRadioGroup
          label="Inspection Mode"
          helperText="Inline inspections take place during production. Offline sampling requires batch removal for lab testing."
          value={inspectionMode}
          onValueChange={(e) => setInspectionMode(e.detail as string)}
        >
          <IxRadio value="inline" label="In-line inspection" />
          <IxRadio value="offline" label="Offline sampling" />
        </IxRadioGroup>

        <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', justifyContent: 'flex-end' }}>
          <IxButton variant="secondary" onClick={handleCancel}>Cancel</IxButton>
          <IxButton variant="primary" onClick={handleSave}>Save</IxButton>
        </div>

      </div>
    </div>
  );
}

export default Forms;


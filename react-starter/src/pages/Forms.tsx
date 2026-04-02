import { useState } from 'react';
import { showMessage } from '@siemens/ix';
import {
  IxInput,
  IxSelect,
  IxSelectItem,
  IxDateInput,
  IxRadioGroup,
  IxRadio,
  IxButton,
  IxContentHeader,
  IxTypography,
} from '@siemens/ix-react';
import {
  FORM_MAX_WIDTH,
  LABEL_INSPECTOR_NAME,
  LABEL_INSPECTION_TYPE,
  LABEL_INSPECTION_DATE,
  INSPECTION_TYPES,
  PAGE_FORMS,
} from '../shared';
import './Forms.css';

function Forms() {
  const [inspectorName, setInspectorName] = useState('');
  const [inspectionType, setInspectionType] = useState('');
  const [inspectionDate, setInspectionDate] = useState('');
  const [inspectionMode, setInspectionMode] = useState('inline');

  const handleSave = () => {
    console.log({ inspectorName, inspectionType, inspectionDate, inspectionMode });
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
  };

  const handleCancel = () => {
    setInspectorName('');
    setInspectionType('');
    setInspectionDate('');
    setInspectionMode('');
  };

  return (
    <>
      <IxContentHeader headerTitle={PAGE_FORMS} />
      <IxTypography format="body" className="description">
        Siemens Industrial Experience provides consistent form elements for collecting and
        validating user input.
      </IxTypography>

      <div className="form-container" style={{ maxWidth: FORM_MAX_WIDTH }}>
        <IxInput
          label={LABEL_INSPECTOR_NAME}
          placeholder="Jane Doe"
          helperText="Enter the certified inspector's full name"
          value={inspectorName}
          onValueChange={(e) => setInspectorName(e.detail)}
        />

        <IxSelect
          label={LABEL_INSPECTION_TYPE}
          helperText="Choose the inspection to perform"
          onValueChange={(e) => setInspectionType(e.detail as string)}
        >
          {INSPECTION_TYPES.map((type) => (
            <IxSelectItem key={type} value={type} label={type} />
          ))}
        </IxSelect>

        <IxDateInput
          label={LABEL_INSPECTION_DATE}
          helperText="Schedule the inspection"
          placeholder="DD/MM/YYYY"
          onValueChange={(e) => setInspectionDate(e.detail as string)}
        />

        <IxRadioGroup
          label="Inspection Mode"
          helperText="In-line inspection takes place during production. Offline sampling requires batch removal for lab testing."
          value={inspectionMode}
          onValueChange={(e) => setInspectionMode(e.detail as string)}
        >
          <IxRadio value="inline" label="In-line inspection" />
          <IxRadio value="offline" label="Offline sampling" />
        </IxRadioGroup>

        <div className="button-row">
          <IxButton variant="secondary" onClick={handleCancel}>
            {'Cancel'}
          </IxButton>
          <IxButton variant="primary" onClick={handleSave}>
            {'Save'}
          </IxButton>
        </div>
      </div>
    </>
  );
}

export default Forms;

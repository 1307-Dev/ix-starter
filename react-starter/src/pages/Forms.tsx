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
import {
  FORM_MAX_WIDTH,
  SECTION_MARGIN_TOP,
  SECTION_MARGIN_BOTTOM,
  LABEL_INSPECTOR_NAME,
  LABEL_INSPECTION_TYPE,
  LABEL_INSPECTION_DATE,
  INSPECTION_TYPES,
  PAGE_FORMS,
} from '../shared';

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
    <>
      <IxTypography format="h1">{PAGE_FORMS}</IxTypography>
      <IxTypography
        format="body"
        style={{
          display: 'block',
          marginTop: SECTION_MARGIN_TOP,
          marginBottom: SECTION_MARGIN_BOTTOM,
        }}
      >
        Siemens Industrial Experience provides consistent form elements for collecting and
        validating user input.
      </IxTypography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          maxWidth: FORM_MAX_WIDTH,
        }}
      >
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

        <div
          style={{
            display: 'flex',
            columnGap: '1rem',
            marginTop: '0.5rem',
            justifyContent: 'flex-end',
          }}
        >
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

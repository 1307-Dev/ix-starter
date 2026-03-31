import { IxTypography } from '@siemens/ix-react';
import { AgGridReact } from 'ag-grid-react';
import {
  GRID_ROW_DATA,
  GRID_COL_DEFS,
  URL_AG_GRID,
  PAGE_PADDING,
  PAGE_GRIDS,
  SECTION_MARGIN_TOP,
  SECTION_MARGIN_BOTTOM,
} from '@ix-starter/shared';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import '@ix-starter/shared/styles/ag-grid-theme.css';

function Grids() {
  return (
    <div style={{ padding: PAGE_PADDING }}>
      <IxTypography format="h1">{PAGE_GRIDS}</IxTypography>
      <IxTypography
        format="body"
        style={{ display: 'block', marginTop: SECTION_MARGIN_TOP, marginBottom: SECTION_MARGIN_BOTTOM }}
      >
        Siemens Industrial Experience integrates the data grid library{' '}
        <a
          href={URL_AG_GRID}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          AG Grid
        </a>
        .<br />
        This lets you use its features while staying consistent with the Siemens Industrial
        Experience design system.
      </IxTypography>

      <div className="ag-theme-alpine ix-ag-grid">
        <AgGridReact
          rowData={GRID_ROW_DATA}
          columnDefs={GRID_COL_DEFS}
          domLayout="autoHeight"
          theme="legacy"
        />
      </div>
    </div>
  );
}

export default Grids;

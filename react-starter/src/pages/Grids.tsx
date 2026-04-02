import { IxTypography, IxContentHeader } from '@siemens/ix-react';
import { AgGridReact } from 'ag-grid-react';
import * as ag from 'ag-grid-community';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  GRID_ROW_DATA,
  GRID_COL_DEFS,
  URL_AG_GRID,
  PAGE_GRIDS,
  SECTION_MARGIN_TOP,
  SECTION_MARGIN_BOTTOM,
  GRID_MAX_WIDTH,
} from '../shared';

const ixTheme = getIxTheme(ag).withParams({
  wrapperBorder: false,
  headerRowBorder: true,
  rowBorder: false,
  borderColor: 'var(--theme-color-std-bdr)',
});

function Grids() {
  return (
    <>
      <IxContentHeader headerTitle={PAGE_GRIDS} />
      <IxTypography
        format="body"
        style={{
          display: 'block',
          marginTop: SECTION_MARGIN_TOP,
          marginBottom: SECTION_MARGIN_BOTTOM,
        }}
      >
        Siemens Industrial Experience integrates the data grid library{' '}
        <a
          href={URL_AG_GRID}
          target="_blank"
          rel="noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          AG Grid
        </a>
        .<br />
        This lets you use its features while staying consistent with the Siemens Industrial
        Experience design system.
      </IxTypography>

      <div style={{ maxWidth: GRID_MAX_WIDTH }}>
        <AgGridReact
          rowData={GRID_ROW_DATA}
          columnDefs={GRID_COL_DEFS}
          domLayout="autoHeight"
          theme={ixTheme}
        />
      </div>
    </>
  );
}

export default Grids;

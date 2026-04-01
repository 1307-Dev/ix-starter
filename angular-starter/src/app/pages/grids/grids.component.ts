import { Component } from '@angular/core';
import { IxContentHeader, IxTypography } from '@siemens/ix-angular/standalone';
import { AgGridAngular } from 'ag-grid-angular';
import * as ag from 'ag-grid-community';
import { ColDef } from 'ag-grid-community';
import { getIxTheme } from '@siemens/ix-aggrid';
import {
  GRID_ROW_DATA,
  GRID_COL_DEFS,
  URL_AG_GRID,
  PAGE_GRIDS,
  type GridRowData,
} from '../../../shared';

@Component({
  selector: 'app-grids',
  standalone: true,
  imports: [IxContentHeader, IxTypography, AgGridAngular],
  template: `
    <div class="grids-page">
      <ix-content-header [headerTitle]="PAGE_GRIDS"></ix-content-header>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience integrates the data grid library
        <a [href]="urlAgGrid" target="_blank" rel="noreferrer"> AG Grid </a>.
        <br />
        This lets you use its features while staying consistent with the Siemens Industrial
        Experience design system.
      </ix-typography>

      <div>
        <ag-grid-angular
          [rowData]="rowData"
          [columnDefs]="columnDefs"
          domLayout="autoHeight"
          [theme]="ixTheme"
        />
      </div>
    </div>
  `,
  styles: [
    `
      .description {
        display: block;
        margin-top: 0.5rem;
        margin-bottom: 2rem;
      }
      .description a {
        color: inherit;
        text-decoration: underline;
      }
    `,
  ],
})
export class GridsComponent {
  protected readonly urlAgGrid = URL_AG_GRID;
  protected readonly PAGE_GRIDS = PAGE_GRIDS;
  protected readonly ixTheme = getIxTheme(ag);

  rowData = GRID_ROW_DATA;

  columnDefs: ColDef<GridRowData>[] = GRID_COL_DEFS;
}

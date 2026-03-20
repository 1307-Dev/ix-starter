import { Component } from '@angular/core';
import { IxTypography } from '@siemens/ix-angular/standalone';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, ModuleRegistry, AllCommunityModule } from 'ag-grid-community';
import {
  GRID_ROW_DATA,
  GRID_COL_DEFS,
  URL_AG_GRID,
  type GridRowData,
} from '@ix-starter/shared';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-grids',
  standalone: true,
  imports: [IxTypography, AgGridAngular],
  template: `
    <div class="grids-page">
      <ix-typography format="h1">Grids</ix-typography>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience integrates the data grid library
        <a [href]="urlAgGrid" target="_blank" rel="noreferrer">
          AG Grid
        </a>.
        <br />
        This lets you use its features while staying consistent with the Siemens Industrial Experience design system.
      </ix-typography>

      <div class="ag-theme-alpine ix-ag-grid">
        <ag-grid-angular
          style="width: 100%;"
          [rowData]="rowData"
          [columnDefs]="columnDefs"
          domLayout="autoHeight"
        />
      </div>
    </div>
  `,
  styles: [`
    .grids-page {
      padding: 2rem;
    }
    .description {
      display: block;
      margin-top: 0.5rem;
      margin-bottom: 2rem;
    }
    .description a {
      text-decoration: underline;
    }
  `],
})
export class GridsComponent {
  protected readonly urlAgGrid = URL_AG_GRID;

  rowData = GRID_ROW_DATA;

  columnDefs: ColDef<GridRowData>[] = GRID_COL_DEFS;
}

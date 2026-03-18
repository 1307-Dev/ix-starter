import { Component } from '@angular/core';
import { IxTypography } from '@siemens/ix-angular/standalone';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';

interface GridRowData {
  series: string;
  model: string;
  quantity: number;
}

const GRID_ROW_DATA: GridRowData[] = [
  { series: 'SIMATIC', model: 'S7-1500', quantity: 32 },
  { series: 'SIPLUS', model: 'CMS1200', quantity: 16 },
  { series: 'SIMATIC', model: 'S7-1200', quantity: 41 },
  { series: 'SIMATIC', model: 'S7-1500V', quantity: 32 },
  { series: 'SIMATIC', model: 'ET 200pro', quantity: 52 },
  { series: 'SINUMERIK', model: '828D', quantity: 73 },
];

@Component({
  selector: 'app-grids',
  standalone: true,
  imports: [IxTypography, AgGridAngular],
  template: `
    <div class="grids-page">
      <ix-typography format="h1">Grids</ix-typography>
      <ix-typography format="body" class="description">
        Siemens Industrial Experience integrates the data grid library
        <a href="https://www.ag-grid.com" target="_blank" rel="noreferrer">
          AG Grid
        </a>.
        <br />
        This lets you use its features while staying consistent with the Siemens Industrial Experience design system.
      </ix-typography>

      <div class="ag-theme-alpine ix-ag-grid" style="max-width: 700px">
        <ag-grid-angular
          style="height: 300px; width: 100%;"
          [rowData]="rowData"
          [columnDefs]="columnDefs"
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
  rowData = GRID_ROW_DATA;
  
  columnDefs: ColDef<GridRowData>[] = [
    { field: 'series', headerName: 'Series', flex: 1 },
    { field: 'model', headerName: 'Model', flex: 1 },
    { field: 'quantity', headerName: 'Quantity', flex: 1 },
  ];
}

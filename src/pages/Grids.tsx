import { IxTypography } from "@siemens/ix-react";
import { AgGridReact } from "ag-grid-react";
import type { ColDef } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "@siemens/ix-aggrid/dist/ix-aggrid/ix-aggrid.css";
import "./Grids.css";

const rowData = [
  { series: "SIMATIC", model: "S7-1500", quantity: 32 },
  { series: "SIPLUS", model: "CMS1200", quantity: 16 },
  { series: "SIMATIC", model: "S7-1200", quantity: 41 },
  { series: "SIMATIC", model: "S7-1500V", quantity: 32 },
  { series: "SIMATIC", model: "ET 200pro", quantity: 52 },
  { series: "SINUMERIK", model: "828D", quantity: 73 },
];

const colDefs: ColDef[] = [
  { field: "series", headerName: "Series", flex: 1 },
  { field: "model", headerName: "Model", flex: 1 },
  { field: "quantity", headerName: "Quantity", flex: 1 },
];

function Grids() {
  return (
    <div style={{ padding: "2rem" }}>
      <IxTypography format="h1">Grids</IxTypography>
      <IxTypography
        format="body"
        style={{ display: "block", marginTop: "0.5rem", marginBottom: "2rem" }}
      >
        Siemens Industrial Experience integrates the data grid library{" "}
        <a
          href="https://www.ag-grid.com"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline" }}
        >
          AG Grid
        </a>
        .<br />
        This lets you use its features while staying consistent with the Siemens
        Industrial Experience design system.
      </IxTypography>

      <div
        className="ag-theme-ix grid-custom"
        style={{ height: "300px", maxWidth: "700px" }}
      >
        <AgGridReact rowData={rowData} columnDefs={colDefs} />
      </div>
    </div>
  );
}

export default Grids;

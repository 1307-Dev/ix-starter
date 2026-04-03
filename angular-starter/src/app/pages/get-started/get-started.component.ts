import { Component } from '@angular/core';
import { IxContentHeader, IxTypography, IxLinkButton } from '@siemens/ix-angular/standalone';
import { URL_IX_DOCS } from '../../../shared';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [IxContentHeader, IxTypography, IxLinkButton],
  template: `
    <div>
      <ix-content-header
        headerTitle="Get started with Siemens Industrial Experience"
      ></ix-content-header>
      <ix-typography
        format="body"
        style="display: block; margin-top: 1.5rem; margin-bottom: 1.5rem"
      >
        Explore the Siemens Industrial Experience design system with our interactive starter app.
        <br />
        Build faster with ready-to-use components and documentation.
      </ix-typography>

      <ix-typography format="body" style="display: block; margin-bottom: 1.5rem">
        The starter app includes an application shell and three example pages featuring our most
        popular components:
      </ix-typography>

      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem">
        <ix-link-button url="/forms">Forms</ix-link-button>
        <ix-link-button url="/charts">Charts</ix-link-button>
        <ix-link-button url="/grids">Grids</ix-link-button>
      </div>

      <ix-typography
        format="body"
        style="display: block; margin-top: 1.5rem; margin-bottom: 1.5rem"
      >
        Browse the full component library in our documentation:
        <a
          [href]="URL_IX_DOCS"
          target="_blank"
          rel="noreferrer"
          style="color: inherit; text-decoration: underline"
          >ix.siemens.io</a>
      </ix-typography>
    </div>
  `,
})
export class GetStartedComponent {
  URL_IX_DOCS = URL_IX_DOCS;
}

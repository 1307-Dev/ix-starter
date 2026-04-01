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
        headerTitle="Get Started with Siemens Industrial Experience"
      ></ix-content-header>
      <ix-typography
        format="body"
        style="display: block; margin-top: 0.5rem; margin-bottom: 1.5rem"
      >
        The starter app includes an application shell and three example pages with commonly used
        components.
      </ix-typography>

      <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 2rem">
        <ix-link-button url="/forms">Forms</ix-link-button>
        <ix-link-button url="/charts">Charts</ix-link-button>
        <ix-link-button url="/grids">Grids</ix-link-button>
      </div>

      <ix-typography format="body" style="display: block">
        Browse the full component library at
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

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IxTypography } from '@siemens/ix-angular/standalone';
import { PAGE_PADDING, URL_IX_DOCS } from '../../../shared';

@Component({
  selector: 'app-get-started',
  standalone: true,
  imports: [IxTypography],
  template: `
    <div [style.padding]="PAGE_PADDING">
      <ix-typography format="h1"> Get Started with Siemens Industrial Experience </ix-typography>
      <ix-typography format="body" style="display: block; margin-top: 1rem; margin-bottom: 1.5rem">
        The starter app includes an application shell and three example pages with commonly used
        components.
      </ix-typography>

      <ul
        style="list-style: none; padding: 0; margin: 0 0 2rem 0; display: flex; flex-direction: column; gap: 0.5rem"
      >
        <li>
          <a
            href="/forms"
            (click)="$event.preventDefault(); navigate('/forms')"
            style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline"
          >
            &gt; Forms
          </a>
        </li>
        <li>
          <a
            href="/charts"
            (click)="$event.preventDefault(); navigate('/charts')"
            style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline"
          >
            &gt; Charts
          </a>
        </li>
        <li>
          <a
            href="/grids"
            (click)="$event.preventDefault(); navigate('/grids')"
            style="cursor: pointer; color: var(--theme-color-primary); text-decoration: underline"
          >
            &gt; Grids
          </a>
        </li>
      </ul>

      <ix-typography format="body" style="display: block">
        Browse the full component library at
        <a [href]="URL_IX_DOCS" target="_blank" rel="noreferrer">ix.siemens.io</a>
      </ix-typography>
    </div>
  `,
})
export class GetStartedComponent {
  PAGE_PADDING = PAGE_PADDING;
  URL_IX_DOCS = URL_IX_DOCS;

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}

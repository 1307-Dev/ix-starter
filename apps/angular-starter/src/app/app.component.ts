import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-angular/standalone';
import { addIcons } from '@siemens/ix-icons';
import {
  iconHome,
  iconDocument,
  iconBarchart,
  iconTable,
  iconDragAndDrop,
} from '@siemens/ix-icons/icons';
import { themeSwitcher } from '@siemens/ix';

const DEFAULT_THEME = 'theme-classic-light';

function initializeTheme(initialTheme = DEFAULT_THEME): () => void {
  const handleThemeChange = (newTheme: string) => {
    document.body.classList.remove('theme-classic-light', 'theme-classic-dark');
    document.body.classList.add(newTheme);
  };

  themeSwitcher.themeChanged.on(handleThemeChange);
  themeSwitcher.setTheme(initialTheme);

  return () => {
    themeSwitcher.themeChanged.off(handleThemeChange);
  };
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    IxApplication,
    IxApplicationHeader,
    IxMenu,
    IxMenuItem,
    IxContent,
  ],
  template: `
    <ix-application>
      <ix-application-header name="Siemens Industrial Experience Starter App">
        <div slot="logo">
          <img src="assets/logo.png" alt="Siemens" style="height: 40px" />
        </div>
      </ix-application-header>

      <ix-menu enableToggleTheme>
        <a routerLink="">
          <ix-menu-item
            icon="home"
            [class.active]="activePage === 'get-started'"
            (click)="activePage = 'get-started'"
          >
            Get Started
          </ix-menu-item>
        </a>
        <a routerLink="forms">
          <ix-menu-item
            icon="document"
            [class.active]="activePage === 'forms'"
            (click)="activePage = 'forms'"
          >
            Forms
          </ix-menu-item>
        </a>
        <a routerLink="charts">
          <ix-menu-item
            icon="barchart"
            [class.active]="activePage === 'charts'"
            (click)="activePage = 'charts'"
          >
            Charts
          </ix-menu-item>
        </a>
        <a routerLink="grids">
          <ix-menu-item
            icon="table"
            [class.active]="activePage === 'grids'"
            (click)="activePage = 'grids'"
          >
            Grids
          </ix-menu-item>
        </a>
      </ix-menu>

      <ix-content>
        <router-outlet />
      </ix-content>
    </ix-application>
  `,
  styles: [`
    :host { display: block; height: 100%; }
  `],
})
export class AppComponent implements OnInit, OnDestroy {
  activePage = 'get-started';
  private cleanupTheme: (() => void) | null = null;

  constructor(private router: Router) {
    addIcons({ iconHome, iconDocument, iconBarchart, iconTable, iconDragAndDrop });
  }

  ngOnInit() {
    // Initialize theme
    this.cleanupTheme = initializeTheme('theme-classic-light');

    this.router.events.subscribe(() => {
      const url = this.router.url;
      if (url.includes('forms')) this.activePage = 'forms';
      else if (url.includes('charts')) this.activePage = 'charts';
      else if (url.includes('grids')) this.activePage = 'grids';
      else this.activePage = 'get-started';
    });
  }

  ngOnDestroy() {
    this.cleanupTheme?.();
  }
}

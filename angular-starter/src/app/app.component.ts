import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-angular/standalone';
import { NAV_ITEMS, APP_TITLE, LOGO_HEIGHT } from '../shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    IxApplication,
    IxApplicationHeader,
    IxAvatar,
    IxMenu,
    IxMenuItem,
    IxContent,
  ],
  template: `
    <ix-application>
      <ix-application-header name="{{APP_TITLE}}">
        <div slot="logo">
          <img src="assets/logo.png" alt="Siemens" [style.height]="LOGO_HEIGHT" />
        </div>
        <ix-avatar username="John Doe"></ix-avatar>
      </ix-application-header>

      <ix-menu enableToggleTheme>
        @for (item of navItems; track item.path) {
          <a [routerLink]="item.path === '/' ? '' : item.path.slice(1)">
            <ix-menu-item icon="{{item.icon}}" [class.active]="isActiveRoute(item.path)">
              {{ item.label }}
            </ix-menu-item>
          </a>
        }
      </ix-menu>

      <ix-content>
        <router-outlet />
      </ix-content>
    </ix-application>
  `,
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class AppComponent {
  navItems = NAV_ITEMS;
  APP_TITLE = APP_TITLE;
  LOGO_HEIGHT = LOGO_HEIGHT;

  constructor(private router: Router) {}

  isActiveRoute(path: string): boolean {
    if (path === '/') {
      return this.router.url === '/' || this.router.url === '';
    }
    return this.router.url === path || this.router.url.startsWith(path + '/');
  }
}

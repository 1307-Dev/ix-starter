import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-angular/standalone';
import { initializeTheme, initializeIcons, NAV_ITEMS } from '@ix-starter/shared';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
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
        @for (item of navItems; track item.path) {
          <a [routerLink]="item.path === '/' ? '' : item.path.slice(1)">
            <ix-menu-item
              [attr.icon]="item.icon"
              [class.active]="isActiveRoute(item.path)"
            >
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
  styles: [`
    :host { display: block; height: 100%; }
  `],
})
export class AppComponent implements OnInit, OnDestroy {
  navItems = NAV_ITEMS;
  private cleanupTheme: (() => void) | null = null;
  private routerSubscription: Subscription | null = null;

  constructor(private router: Router) {
    initializeIcons();
  }

  isActiveRoute(path: string): boolean {
    if (path === '/') {
      return this.router.url === '/' || this.router.url === '';
    }
    return this.router.url.includes(path.slice(1));
  }

  ngOnInit() {
    this.cleanupTheme = initializeTheme('theme-classic-light');
  }

  ngOnDestroy() {
    this.cleanupTheme?.();
    this.routerSubscription?.unsubscribe();
  }
}

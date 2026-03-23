/**
 * Shared icon name constants for consistent usage across apps
 */
import { addIcons } from '@siemens/ix-icons';
import {
  iconHome,
  iconDocument,
  iconBarchart,
  iconTable,
  iconDragAndDrop,
  iconBulb,
} from '@siemens/ix-icons/icons';

// Navigation icons
export const ICON_HOME = 'home';
export const ICON_DOCUMENT = 'document';
export const ICON_BARCHART = 'barchart';
export const ICON_TABLE = 'table';

// UI icons
export const ICON_DRAG_AND_DROP = 'drag-and-drop';
export const ICON_BULB = 'bulb';

/**
 * Initialize all common icons used across apps.
 * Call this once at app startup.
 */
export function initializeIcons(): void {
  addIcons({
    iconHome,
    iconDocument,
    iconBarchart,
    iconTable,
    iconDragAndDrop,
    iconBulb,
  });
}

// Navigation menu configuration
export interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Get Started', icon: ICON_HOME, path: '/' },
  { label: 'Forms', icon: ICON_DOCUMENT, path: '/forms' },
  { label: 'Charts', icon: ICON_BARCHART, path: '/charts' },
  { label: 'Grids', icon: ICON_TABLE, path: '/grids' },
];

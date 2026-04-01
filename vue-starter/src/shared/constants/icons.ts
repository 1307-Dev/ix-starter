/**
 * Shared icon name constants for consistent usage across apps
 */
import { addIcons } from '@siemens/ix-icons';
import {
  iconHome,
  iconPiechart,
  iconTextDocument,
  iconTable,
  iconDragAndDrop,
  iconBulb,
  iconInfo,
} from '@siemens/ix-icons/icons';

export const ICON_HOME = 'home';
export const ICON_TEXT_DOCUMENT = 'text-document';
export const ICON_PIECHART = 'piechart';
export const ICON_TABLE = 'table';

export const ICON_DRAG_AND_DROP = 'drag-and-drop';
export const ICON_BULB = 'bulb';

/**
 * Initialize all common icons used across apps.
 * Call this once at app startup.
 */
export function initializeIcons(): void {
  addIcons({
    iconHome,
    iconPiechart,
    iconTextDocument,
    iconTable,
    iconDragAndDrop,
    iconBulb,
    iconInfo,
  });
}

export interface NavItem {
  label: string;
  icon: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Get Started', icon: ICON_HOME, path: '/' },
  { label: 'Forms', icon: ICON_TEXT_DOCUMENT, path: '/forms' },
  { label: 'Charts', icon: ICON_PIECHART, path: '/charts' },
  { label: 'Grids', icon: ICON_TABLE, path: '/grids' },
];

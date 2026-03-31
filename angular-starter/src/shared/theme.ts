import { themeSwitcher } from '@siemens/ix';

/**
 * Available theme names
 */
export type ThemeName = 'classic';

/**
 * Available color schemes
 */
export type ColorScheme = 'light' | 'dark';

/**
 * Initialize theme switching functionality.
 * Uses data-ix-theme and data-ix-color-schema attributes (recommended by iX docs).
 * The initial theme is set via HTML attributes; this syncs the themeSwitcher.
 *
 * @param theme - The theme to apply (default: 'classic')
 * @param colorScheme - The color scheme (default: 'light')
 */
export function initializeTheme(
  theme: ThemeName = 'classic',
  colorScheme: ColorScheme = 'light',
): void {
  themeSwitcher.setTheme(`theme-${theme}-${colorScheme}`);
}

/**
 * Toggle between light and dark themes
 */
export function toggleTheme(): void {
  themeSwitcher.toggleMode();
}

/**
 * Get the current theme name
 */
export function getCurrentTheme(): string {
  return themeSwitcher.getCurrentTheme();
}

/**
 * Set a specific theme
 */
export function setTheme(theme: ThemeName, colorScheme: ColorScheme = 'light'): void {
  themeSwitcher.setTheme(`theme-${theme}-${colorScheme}`);
}

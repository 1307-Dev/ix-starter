import { themeSwitcher } from '@siemens/ix';

/**
 * Available theme names
 */
export type ThemeName = 'theme-classic-light' | 'theme-classic-dark';

/**
 * Initialize theme switching functionality.
 * Sets up a listener on themeSwitcher.themeChanged to update the body class.
 * 
 * @param initialTheme - The theme to apply initially (default: 'theme-classic-light')
 * @returns Cleanup function to remove the listener
 */
export function initializeTheme(initialTheme: ThemeName = 'theme-classic-light'): () => void {
  const handleThemeChange = (newTheme: string) => {
    document.body.classList.remove('theme-classic-light', 'theme-classic-dark');
    document.body.classList.add(newTheme);
  };

  // Listen to theme changes
  themeSwitcher.themeChanged.on(handleThemeChange);

  // Set initial theme
  themeSwitcher.setTheme(initialTheme);

  // Return cleanup function
  return () => {
    themeSwitcher.themeChanged.off(handleThemeChange);
  };
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
export function setTheme(theme: ThemeName): void {
  themeSwitcher.setTheme(theme);
}

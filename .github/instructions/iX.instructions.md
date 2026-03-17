# Siemens iX AI Agent Instructions

This document provides comprehensive guidelines for AI agents (Claude Sonnet 4.5, GPT-4.0, Gemini 2.5) working with the Siemens iX Design System.

## Table of Contents
1. [Core Principles](#core-principles)
2. [Package Versions & Dependencies](#package-versions--dependencies)
3. [Component Usage Guidelines](#component-usage-guidelines)
4. [Icon System](#icon-system)
5. [Theme Management](#theme-management)
6. [Common Patterns](#common-patterns)
7. [Troubleshooting](#troubleshooting)

## Core Principles

### 1. Always Search Documentation First
- Use the iX documentation search tool (`mcp__siemens_ix-m_ix-search`) before implementing any component
- Use the icon search tool (`mcp__siemens_ix-m_ix-icon-search`) to verify icon names
- Never assume API structure - always verify with documentation

### 2. Version Compatibility
- **@siemens/ix**: Use version 4.0.0+
- **@siemens/ix-react**: Use version 4.0.0+ (for React projects)
- **@siemens/ix-icons**: Use version 3.2.0 (CRITICAL: Not 4.0.0 due to peer dependencies)

### 3. Framework-Specific Setup

#### React Projects
```javascript
// main.jsx or index.jsx
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import { initializeIcons } from './utils/icons';

// Initialize icons once at app startup
initializeIcons();

// DO NOT use applyPolyfills() or defineCustomElements() in React
// The @siemens/ix-react wrappers handle registration automatically
```

#### Vanilla JavaScript
```javascript
// Use loader for vanilla JS only
import { applyPolyfills, defineCustomElements } from '@siemens/ix/loader';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

## Package Versions & Dependencies

### Critical Version Matrix
```json
{
  "dependencies": {
    "@siemens/ix": "^4.0.0",
    "@siemens/ix-react": "^4.0.0",
    "@siemens/ix-icons": "^3.2.0"  // ⚠️ MUST be 3.2.0, NOT 4.0.0
  }
}
```

### Why @siemens/ix-icons must be 3.2.0
- @siemens/ix 4.0.0 has peer dependency requiring @siemens/ix-icons ^3.2.0
- Using 4.0.0 will cause dependency conflicts
- Icon naming conventions differ between versions

## Component Usage Guidelines

### 1. Application Structure
```jsx
<IxApplication>
  <IxApplicationHeader name="App Name">
    <div slot="logo">Logo Content</div>
    {/* Right-aligned content - no slot needed */}
    <IxIconButton icon="..." />
    <IxAvatar username="User" />
  </IxApplicationHeader>

  <IxMenu>
    <IxMenuItem icon="..." active={boolean}>Label</IxMenuItem>
    {/* Settings panel - no slot attribute */}
    <IxMenuSettings>
      <IxMenuSettingsItem label="..." onClick={handler} />
    </IxMenuSettings>
  </IxMenu>

  <IxContent>
    <IxContentHeader slot="header" headerTitle="..." headerSubtitle="...">
      {/* Header actions */}
    </IxContentHeader>
    {/* Content goes here */}
  </IxContent>
</IxApplication>
```

### 2. Common Component Patterns

#### IxPushCard (Expandable Cards)
```jsx
<IxPushCard
  icon="icon-name"
  heading="Title"
  subheading="Subtitle"
  variant="insight|success|warning|alarm|info"
  collapse={true}  // Enables expand/collapse
>
  {/* Expanded content goes here */}
  <div style={{ padding: '1rem' }}>
    <IxTypography>Details...</IxTypography>
  </div>
</IxPushCard>
```

#### IxCard (Static Cards)
```jsx
<IxCard variant="outline|filled">
  <IxCardContent>
    {/* Card content */}
  </IxCardContent>
</IxCard>
```

#### IxMenu Navigation
```jsx
// ✅ Correct: Consistent casing
const [activeMenuItem, setActiveMenuItem] = useState('dashboard');

<IxMenuItem 
  active={activeMenuItem === 'dashboard'}
  onClick={() => setActiveMenuItem('dashboard')}
>
  Dashboard
</IxMenuItem>

// ❌ Wrong: Mismatched casing will break navigation
active={activeMenuItem === 'dashboard'} // lowercase
onClick={() => setActiveMenuItem('Dashboard')} // capitalized
```

### 3. Layout System
```jsx
<IxLayoutGrid>
  <IxRow>
    <IxCol size="12" sizeMd="6" sizeLg="4">
      {/* Content */}
    </IxCol>
  </IxRow>
</IxLayoutGrid>

// Breakpoints: size (xs), sizeSm, sizeMd, sizeLg, sizeXl
// Values: 1-12 (follows 12-column grid)
```

## Icon System

### Critical Icon Rules

1. **Icon Naming Convention**
   - Import: `iconCamelCase` (e.g., `iconBarchart`, `iconAlarmBell`)
   - Usage in JSX: `kebab-case` string (e.g., `icon="barchart"`, `icon="alarm-bell"`)

2. **Icon Initialization**
```javascript
// utils/icons.js
import { addIcons } from '@siemens/ix-icons';
import {
  iconBarchart,
  iconHome,
  // ... other icons
} from '@siemens/ix-icons/icons';

export const initializeIcons = () => {
  addIcons({
    iconBarchart,
    iconHome,
    // ... register all icons you'll use
  });
};
```

3. **Common Icon Name Mappings**
   - Settings → `iconCogwheel` (NOT iconSettings)
   - Warning → `iconWarningRhomb` (NOT iconWarning)
   - Error → `iconCertificateError` (NOT iconError)
   - Success → `iconSuccess` (formerly iconCheckCircle)
   - Notifications → `iconAlarmBell` (NOT iconNotifications)

4. **Always Verify Icons**
   ```javascript
   // Use icon search tool before adding new icons
   mcp__siemens_ix-m_ix-icon-search("search terms")
   ```

### Icon Search Best Practices
- Search with descriptive terms, not exact names
- Limit queries to 20 items or fewer
- Check multiple related terms if first search fails
- Common categories: actions, status, navigation, devices, data

## Theme Management

### Theme Switching
```javascript
import { themeSwitcher } from '@siemens/ix';

// Available themes
const themes = [
  'theme-brand-dark',
  'theme-brand-light',
  'theme-classic-dark',
  'theme-classic-light'
];

// Set theme (must be in setTimeout for proper initialization)
setTimeout(() => {
  themeSwitcher.setTheme('theme-brand-dark');
}, 0);

// Toggle mode (light/dark within same theme variant)
themeSwitcher.toggleMode();

// ❌ DO NOT manually set document.body.className
// ✅ themeSwitcher handles this automatically
```

### React Theme Management
```javascript
const [currentTheme, setCurrentTheme] = useState('theme-brand-dark');

useEffect(() => {
  setTimeout(() => {
    themeSwitcher.setTheme(currentTheme);
  }, 0);
}, []); // Only on mount

const handleThemeToggle = () => {
  const newTheme = themes[nextIndex];
  setCurrentTheme(newTheme);
  themeSwitcher.setTheme(newTheme); // Call immediately in handler
};
```

## Common Patterns

### 1. Form Controls
```jsx
// Input with label
<IxInputGroup>
  <span slot="input-start">Label</span>
  <input type="text" className="ix-form-control" placeholder="..." />
</IxInputGroup>

// Select dropdown
<IxSelect placeholder="Select...">
  <IxSelectItem label="Option 1" value="opt1" />
  <IxSelectItem label="Option 2" value="opt2" />
</IxSelect>

// Toggle switch
<IxToggle 
  checked={state}
  onCheckedChange={(e) => setState(e.detail)}
>
  Label
</IxToggle>

// Checkbox
<input type="checkbox" className="ix-form-control" id="check1" />
<label className="ix-form-label" htmlFor="check1">Label</label>
```

### 2. Notifications & Toasts
```javascript
import { toast } from '@siemens/ix';

toast({
  message: 'Message text',
  type: 'info|success|warning|error',
  autoClose: true,
  autoCloseDelay: 3000
});

// Toast container (add once at app root)
<IxToastContainer />
```

### 3. Data Tables
```jsx
<table className="data-table">
  <thead>
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </tbody>
</table>
```

### 4. Button Groups
```jsx
// ❌ DO NOT use IxButtonGroup component (doesn't exist)
// ✅ Use div with class
<div className="ix-button-group">
  <IxButton variant="primary">Save</IxButton>
  <IxButton variant="secondary">Cancel</IxButton>
</div>
```

## Troubleshooting

### Problem: Icons not showing
**Solutions:**
1. Verify icon names with search tool
2. Check icon is imported in utils/icons.js
3. Ensure initializeIcons() is called before React renders
4. Verify @siemens/ix-icons is version 3.2.0

### Problem: Theme not switching
**Solutions:**
1. Call themeSwitcher.setTheme() directly in event handler
2. Wrap initial theme call in setTimeout()
3. Don't manually set document.body.className
4. Ensure themeSwitcher import is from '@siemens/ix'

### Problem: Menu navigation not working
**Solutions:**
1. Ensure state values match exactly (case-sensitive)
2. Check active prop uses correct state value
3. Verify onClick updates state correctly
4. Use lowercase for all menu item identifiers

### Problem: Settings panel shows dim overlay but no content
**Solutions:**
1. Remove slot="bottom" from IxMenuSettings
2. Add IxMenuSettingsItem children with labels and onClick handlers
3. Ensure items have proper event handlers

### Problem: Components not rendering
**Solutions:**
1. Check console for errors
2. Verify all imports from '@siemens/ix-react'
3. Ensure CSS is imported: '@siemens/ix/dist/siemens-ix/siemens-ix.css'
4. Check component prop names in documentation

## AI Agent Workflow

### When implementing a new feature:
1. **Search documentation** for the component
2. **Verify icon names** if icons are used
3. **Check version compatibility** if installing packages
4. **Follow naming conventions** (camelCase imports, kebab-case usage)
5. **Test incrementally** - don't create everything at once
6. **Check errors** immediately after changes

### When debugging:
1. **Read error messages carefully** - they often indicate exact issue
2. **Verify imports** - check spelling and source
3. **Check props** - use documentation to verify available props
4. **Inspect dependencies** - ensure versions are compatible
5. **Search similar patterns** in existing code

### Code Quality Standards:
- Use functional components and hooks (React)
- Keep components focused and single-purpose
- Extract reusable logic into utilities
- Follow Siemens iX theming and spacing conventions
- Use semantic HTML and ARIA attributes
- Implement proper error handling

## Quick Reference

### Essential Imports
```javascript
// React components
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxContent,
  IxContentHeader,
  IxCard,
  IxCardContent,
  IxButton,
  IxIconButton,
  // ... others as needed
} from '@siemens/ix-react';

// Utilities
import { themeSwitcher, toast } from '@siemens/ix';
import { addIcons } from '@siemens/ix-icons';
```

### CSS Class Reference
- `.ix-form-control` - Form inputs
- `.ix-form-label` - Form labels
- `.ix-button-group` - Button containers
- Standard spacing: Use CSS variables or iX layout components

### Event Handling
- Most iX events use `detail` property: `e.detail`
- Standard events: `onClick`, `onChange`, `onValueChange`, `onCheckedChange`
- Always check documentation for component-specific events

---

**Remember:** When in doubt, search the iX documentation first. The tools are there to help you write correct, idiomatic iX code.

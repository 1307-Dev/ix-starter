import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ErrorBoundary } from './components/ErrorBoundary';
import { initializeIcons } from './utils/icons';
import { initializeTheme } from '@ix-starter/shared';

// Import iX styles and both theme variants
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';

// Initialize icons once at app startup
initializeIcons();

// Initialize theme using shared utility
initializeTheme('theme-classic-light');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
);

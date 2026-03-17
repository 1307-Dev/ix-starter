import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { initializeIcons } from './utils/icons';
import { themeSwitcher } from '@siemens/ix';

// Import iX styles and both theme variants
import '@siemens/ix/dist/siemens-ix/siemens-ix.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-dark.css';
import '@siemens/ix/dist/siemens-ix/theme/classic-light.css';

// Initialize icons once at app startup
initializeIcons();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Initialize theme after DOM is ready so ix-menu picks up the state
setTimeout(() => {
  themeSwitcher.setTheme('theme-classic-light');
});

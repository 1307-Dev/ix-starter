import { IxContentHeader, IxTypography } from '@siemens/ix-react';

function GetStarted() {
  return (
    <>
      <IxContentHeader
        slot="header"
        headerTitle="Get Started"
        headerSubtitle="Welcome to the Siemens Industrial Experience Starter App"
      />
      <div className="page-content">
        <IxTypography format="h2">Welcome to Siemens iX</IxTypography>
        <p>
          This starter application demonstrates the core features of the Siemens Industrial 
          Experience (iX) design system. Use the navigation menu to explore different 
          components and patterns.
        </p>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>🎨 Brand Theme</h3>
            <p>
              Built with the Siemens brand theme by default. Toggle between light and 
              dark modes using the theme switcher in the header.
            </p>
          </div>

          <div className="feature-card">
            <h3>📝 Forms</h3>
            <p>
              Explore form components including inputs, selects, checkboxes, and more 
              with built-in validation support.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Charts</h3>
            <p>
              Visualize data with various chart types including line, bar, and pie charts 
              using the iX charting library.
            </p>
          </div>

          <div className="feature-card">
            <h3>📋 Grids</h3>
            <p>
              Display and manage tabular data with powerful grid components featuring 
              sorting, filtering, and pagination.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GetStarted;

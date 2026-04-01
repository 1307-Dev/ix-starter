import { IxTypography, IxLinkButton, IxContentHeader } from '@siemens/ix-react';
import { URL_IX_DOCS, SECTION_MARGIN_TOP } from '../shared';

function GetStarted() {
  return (
    <>
      <IxContentHeader headerTitle="Get Started with Siemens Industrial Experience" />
      <IxTypography
        format="body"
        style={{ display: 'block', marginTop: SECTION_MARGIN_TOP, marginBottom: '1.5rem' }}
      >
        The starter app includes an application shell and three example pages with commonly used
        components.
      </IxTypography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginBottom: '2rem',
        }}
      >
        <IxLinkButton url="/forms">Forms</IxLinkButton>
        <IxLinkButton url="/charts">Charts</IxLinkButton>
        <IxLinkButton url="/grids">Grids</IxLinkButton>
      </div>

      <IxTypography format="body" style={{ display: 'block' }}>
        Browse the full component library at{' '}
        <a
          href={URL_IX_DOCS}
          target="_blank"
          rel="noreferrer"
          style={{ color: 'inherit', textDecoration: 'underline' }}
        >
          ix.siemens.io
        </a>
      </IxTypography>
    </>
  );
}

export default GetStarted;

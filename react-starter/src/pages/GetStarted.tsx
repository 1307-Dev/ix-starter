import { useNavigate } from 'react-router-dom';
import { IxTypography, IxLinkButton, IxContentHeader } from '@siemens/ix-react';
import { URL_IX_DOCS } from '../shared';

function GetStarted() {
  const navigate = useNavigate();

  return (
    <>
      <IxContentHeader headerTitle="Get started with Siemens Industrial Experience" />
      <IxTypography
        format="body"
        style={{ display: 'block', marginTop: '1.5rem', marginBottom: '1.5rem' }}
      >
        Explore the Siemens Industrial Experience design system with our interactive starter app.
        <br />
        Build faster with ready-to-use components and documentation.
      </IxTypography>

      <IxTypography format="body" style={{ display: 'block', marginBottom: '1.5rem' }}>
        The starter app includes an application shell and three example pages featuring our most
        popular components:
      </IxTypography>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          marginBottom: '2rem',
        }}
      >
        <IxLinkButton onClick={() => navigate('/forms')}>Forms</IxLinkButton>
        <IxLinkButton onClick={() => navigate('/charts')}>Charts</IxLinkButton>
        <IxLinkButton onClick={() => navigate('/grids')}>Grids</IxLinkButton>
      </div>

      <IxTypography
        format="body"
        style={{ display: 'block', marginTop: '1.5rem', marginBottom: '1.5rem' }}
      >
        Browse the full component library in our documentation:{' '}
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

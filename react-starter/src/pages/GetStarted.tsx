import { useNavigate } from 'react-router-dom';
import { IxTypography } from '@siemens/ix-react';
import { URL_IX_DOCS } from '../shared';

function GetStarted() {
  const navigate = useNavigate();

  return (
    <>
      <IxTypography format="h1">Get Started with Siemens Industrial Experience</IxTypography>
      <IxTypography
        format="body"
        style={{ display: 'block', marginTop: '1rem', marginBottom: '1.5rem' }}
      >
        The starter app includes an application shell and three example pages with commonly used
        components.
      </IxTypography>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: '0 0 2rem 0',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <li>
          <a
            href="/forms"
            onClick={(e) => {
              e.preventDefault();
              navigate('/forms');
            }}
            style={{
              cursor: 'pointer',
              color: 'var(--theme-color-primary)',
              textDecoration: 'underline',
            }}
          >
            &gt; Forms
          </a>
        </li>
        <li>
          <a
            href="/charts"
            onClick={(e) => {
              e.preventDefault();
              navigate('/charts');
            }}
            style={{
              cursor: 'pointer',
              color: 'var(--theme-color-primary)',
              textDecoration: 'underline',
            }}
          >
            &gt; Charts
          </a>
        </li>
        <li>
          <a
            href="/grids"
            onClick={(e) => {
              e.preventDefault();
              navigate('/grids');
            }}
            style={{
              cursor: 'pointer',
              color: 'var(--theme-color-primary)',
              textDecoration: 'underline',
            }}
          >
            &gt; Grids
          </a>
        </li>
      </ul>

      <IxTypography format="body" style={{ display: 'block' }}>
        Browse the full component library at{' '}
        <a href={URL_IX_DOCS} target="_blank" rel="noreferrer">
          ix.siemens.io
        </a>
      </IxTypography>
    </>
  );
}

export default GetStarted;

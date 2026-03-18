import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  IxApplication,
  IxApplicationHeader,
  IxMenu,
  IxMenuItem,
  IxContent
} from '@siemens/ix-react';

import GetStarted from './pages/GetStarted';
import Forms from './pages/Forms';
import Charts from './pages/Charts';
import Grids from './pages/Grids';
import logo from './assets/logo.png';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <IxApplication>
      <IxApplicationHeader name="Siemens Industrial Experience Starter App">
        <div slot="logo">
          <img src={logo} alt="Siemens" style={{ height: '40px' }} />
        </div>
      </IxApplicationHeader>

      <IxMenu enableToggleTheme>
        <IxMenuItem 
          icon="home" 
          active={isActive('/')}
          onClick={() => navigate('/')}
        >
          Get Started
        </IxMenuItem>
        <IxMenuItem 
          icon="document" 
          active={isActive('/forms')}
          onClick={() => navigate('/forms')}
        >
          Forms
        </IxMenuItem>
        <IxMenuItem 
          icon="barchart" 
          active={isActive('/charts')}
          onClick={() => navigate('/charts')}
        >
          Charts
        </IxMenuItem>
        <IxMenuItem 
          icon="table" 
          active={isActive('/grids')}
          onClick={() => navigate('/grids')}
        >
          Grids
        </IxMenuItem>
      </IxMenu>

      <IxContent>
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/charts" element={<Charts />} />
          <Route path="/grids" element={<Grids />} />
          <Route path="*" element={<GetStarted />} />
        </Routes>
      </IxContent>
    </IxApplication>
  );
}

export default App;

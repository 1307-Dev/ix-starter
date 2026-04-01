import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-react';
import { APP_TITLE, NAV_ITEMS, LOGO_STYLE } from './shared';

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
      <IxApplicationHeader name={APP_TITLE}>
        <div slot="logo">
          <img src={logo} alt="Siemens" style={LOGO_STYLE} />
        </div>
        <IxAvatar initials="JD" />
      </IxApplicationHeader>

      <IxMenu enableToggleTheme>
        {NAV_ITEMS.map((item) => (
          <IxMenuItem
            key={item.path}
            icon={item.icon}
            active={isActive(item.path)}
            onClick={() => navigate(item.path)}
          >
            {item.label}
          </IxMenuItem>
        ))}
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

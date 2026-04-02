import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import {
  IxApplication,
  IxApplicationHeader,
  IxAvatar,
  IxMenu,
  IxMenuItem,
  IxContent,
} from '@siemens/ix-react';
import { APP_TITLE, NAV_ITEMS } from './shared';

import GetStarted from './pages/GetStarted';
import Forms from './pages/Forms';
import Charts from './pages/Charts';
import Grids from './pages/Grids';
import './App.css';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <IxApplication>
      <IxApplicationHeader name={APP_TITLE}>
        <div slot="logo">
          <svg viewBox="14 14 108 20" height="22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M16.3105 31.3439V28.3173C18.0332 28.8595 19.5575 29.1306 20.8835 29.1306C22.7143 29.1306 23.6298 28.6466 23.6298 27.6795C23.6298 27.3189 23.4966 27.0159 23.2295 26.7706C22.9564 26.5104 22.2569 26.1496 21.1329 25.6874C19.1161 24.8582 17.801 24.1509 17.1892 23.566C16.3964 22.7939 16 21.8202 16 20.6435C16 19.1283 16.5776 17.9733 17.732 17.1797C18.8737 16.393 20.3603 16 22.1941 16C23.2045 16 24.667 16.186 26.5798 16.5584V19.4699C25.1565 18.9013 23.8354 18.6177 22.6147 18.6177C20.8959 18.6177 20.0365 19.0896 20.0365 20.0356C20.0365 20.3892 20.2096 20.6776 20.5563 20.9012C20.8446 21.0822 21.6389 21.4644 22.9377 22.049C24.8076 22.8795 26.0525 23.6014 26.6728 24.2154C27.4088 24.9438 27.7775 25.8863 27.7775 27.0415C27.7775 28.702 27.0553 29.9686 25.6119 30.8414C24.4425 31.5491 22.9261 31.9015 21.0636 31.9015C19.4908 31.9015 17.9061 31.7162 16.3105 31.3439ZM30.1953 16.2664H34.4761V31.5919H30.1953V16.2664ZM38.4016 16.2664V31.5919H49.5573V28.6641H42.5273V25.0273H48.4928V22.4989H42.5273V19.0383H49.3807V16.2664H38.4016ZM52.3516 31.5919V16.2664H57.9018L61.7578 26.0587L65.7105 16.2664H70.9823V31.5919H66.9235V20.7411L62.429 31.7475H59.7756L55.3676 20.7411V31.5919H52.3516ZM74.9094 16.2664V31.5919H86.066V28.6641H79.0356V25.0273H85.0008V22.4989H79.0356V19.0383H85.8883V16.2664H74.9094ZM88.8828 31.5919V16.2664H93.8442L99.1079 26.5256V16.2664H102.123V31.5919H97.3026L91.8993 21.1946V31.5919H88.8828ZM105.162 28.3174V31.344C106.757 31.7163 108.342 31.9016 109.916 31.9015C111.779 31.9015 113.299 31.5491 114.475 30.8414C115.911 29.9686 116.629 28.702 116.629 27.0415C116.629 25.8863 116.261 24.9438 115.524 24.2154C114.899 23.6014 113.656 22.8795 111.8 22.049C110.48 21.4576 109.682 21.0752 109.408 20.9012C109.062 20.6776 108.89 20.3892 108.89 20.0356C108.89 19.0896 109.744 18.6177 111.456 18.6177C112.683 18.6177 114.008 18.9013 115.432 19.4699V16.5584L115.053 16.4927C113.415 16.1637 112.078 16 111.047 16C109.213 16 107.725 16.393 106.585 17.1797C105.429 17.9733 104.853 19.1244 104.853 20.6332C104.853 21.8235 105.249 22.8008 106.041 23.5661C106.659 24.1582 107.975 24.8651 109.986 25.6875C111.117 26.1497 111.819 26.5105 112.093 26.7707C112.352 27.016 112.481 27.319 112.481 27.6796C112.481 28.6467 111.567 29.1307 109.736 29.1307C108.394 29.1307 106.87 28.8596 105.162 28.3174Z" fill="currentColor" />
          </svg>
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

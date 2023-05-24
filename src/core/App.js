import { Routes, Route } from 'react-router-dom';
import { toCountryNews } from './routes';
import CountryNews from '../features/News/CountryNews';
import WelcomeSite from '../features/News/WelcomeSite';

function App() {
  return (
    <Routes>
      <Route
        path={toCountryNews()}
        element={<CountryNews />}
      />
      <Route
        path="/"
        element={<WelcomeSite />}
      />
      <Route
        path="*"
        element={<WelcomeSite />}
      />
    </Routes>
  );
}

export default App;

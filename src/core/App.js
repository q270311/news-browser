import { Routes, Route } from 'react-router-dom';
import { toCountryNews } from "./routes";
import CountryNews from '../features/CountryNews';
import WelcomeSite from '../features/WelcomeSite';

function App() {
  return (
     <Routes>
       <Route path={toCountryNews()} element={ <CountryNews /> } />
       <Route path="/" element={ <WelcomeSite /> }  />
     </Routes>
  );
}

export default App;

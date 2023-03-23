//import { Routes, Route, Navigate } from 'react-router-dom';
//import { toCountryNews } from "./routes";
import CountryNews from '../features/CountryNews'

function App() {
  return (
    <CountryNews />
    // <Routes>
    //   <Route path={toCountryNews()} element={ <CountryNews /> } />
    //   <Route path="/" element={<Navigate to={toCountryNews()} />} />
    // </Routes>
  );
}

export default App;

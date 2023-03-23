import { useParams } from "react-router-dom";
import { MainWrapper } from '../../common/MainWrapper';
import Header from "../Header";
import Footer from "../Footer";
import Menu from "../Menu";

const CountryNews = () => {
    const  {countryCode}  = useParams();
    
    return (
        <MainWrapper
            header={<Header/>}
            menu={<Menu />}
            content={
                <p>Breaking news from {countryCode}</p>
            }
            footer={<Footer />}
        />
    );
};

export default CountryNews;
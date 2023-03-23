import { MainWrapper } from '../../common/MainWrapper'
import Header from "../Header";
import Footer from "../Footer";
import Menu from "../Menu";

const CountryNews = () => {
    return (
        <MainWrapper
            header={<Header/>}
            menu={<Menu />}
            content={
                <p>newsy....</p>
            }
            footer={<Footer />}
        />
    );
};

export default CountryNews;
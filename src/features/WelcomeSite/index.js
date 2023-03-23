import { MainWrapper } from '../../common/MainWrapper';
import Header from "../Header";
import Footer from "../Footer";
import Menu from "../Menu";
import {Welcome} from './styled';

const WelcomeSite = () => (
    <MainWrapper
        header={<Header />}
        menu={<Menu />}
        content={
            <Welcome>
                <h1>Search worldwide news</h1>
                <h2>Locate articles and breaking news headlines from news.</h2>
                <p>To start, select a city on the left bar</p>
            </Welcome>
        }
        footer={<Footer />}
    />
);

export default WelcomeSite;
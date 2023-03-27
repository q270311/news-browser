import { MainWrapper } from '../../../common/MainWrapper';
import Header from "../../Header";
import Footer from "../../Footer";
import Menu from "../../Menu";
import {Welcome} from './styled';

const WelcomeSite = () => (
    <MainWrapper
        header={<Header />}
        menu={<Menu />}
        content={
            <Welcome>
                <h1>Wyszukuj wiadomości z całego świta</h1>
                <h2>Czytaj artykuły i najświeższe nagłówki</h2>
                <p>Aby rozpocząć, wybierz kraj z lewego menu</p>
            </Welcome>
        }
        footer={<Footer />}
    />
);

export default WelcomeSite;
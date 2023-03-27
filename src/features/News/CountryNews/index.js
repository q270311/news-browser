import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountry, selectCountry, selectArticles } from "../newsListSlice";
import { MainWrapper } from '../../../common/MainWrapper';
import Header from "../../Header";
import Footer from "../../Footer";
import Menu from "../../Menu";
import ListView from "./ListView";


const CountryNews = () => {
    const dispatch = useDispatch();
    const { countryCode } = useParams();
    const articles = useSelector(selectArticles);

    useEffect(() => {
        dispatch(setCountry({ countryCode: countryCode }));
    }, [countryCode, dispatch]); 

    return (
        <MainWrapper        
            header={<Header />}
            menu={<Menu />}
            content={<>
                <h1>News from {useSelector(selectCountry)}</h1>
                <ListView articles={articles} />
            </>}
            footer={<Footer />}
        />
    );
};

export default CountryNews;
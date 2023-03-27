import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountry, selectCountry, selectArticles } from "../newsListSlice";
import { MainWrapper } from '../../../common/MainWrapper';
import Header from "../../Header";
import Footer from "../../Footer";
import Menu from "../../Menu";
import { nanoid } from 'nanoid';

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
                <ul>
                    {articles.map(article => (
                        <li key={nanoid()}>
                            Tytuł: {article.title},
                            Źródło: {article.author},
                            Data publikacji: {article.publishedAt}
                        </li>
                    ))}
                </ul>
            </>}
            footer={<Footer />}
        />
    );
};

export default CountryNews;
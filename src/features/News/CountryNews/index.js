import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  setCountry,
  selectArticles,
  selectView,
  selectStatus,
} from "../newsSlice";
import { MainWrapper } from "../../../common/MainWrapper";
import Header from "../../Header";
import Footer from "../../Footer";
import Menu from "../../Menu";
import GridView from "./GridView";
import ListView from "./ListView";
import Loader from "./Loader";
import Error from "./Error";

const CountryNews = () => {
  const dispatch = useDispatch();
  const { countryCode } = useParams();
  const articles = useSelector(selectArticles);
  const viewMode = useSelector(selectView);
  const status = useSelector(selectStatus);

  useEffect(() => {
    dispatch(setCountry({ countryCode: countryCode }));
  }, [countryCode, dispatch]);

  return (
    <MainWrapper
      header={<Header />}
      menu={<Menu />}
      content={
        status === "loading" ? <Loader /> :
        status === "error" ? <Error /> :
        <>
          {viewMode === "list" && <ListView articles={articles} />}
          {viewMode === "grid" && <GridView articles={articles} />}
        </>
      }
      footer={<Footer />}
    />
  );
};

export default CountryNews;

import { MainWrapper } from "../../../common/MainWrapper";
import Header from "../../Header";
import Footer from "../../Footer";
import Menu from "../../Menu";
import { Welcome } from "./styled";
import { useTranslation } from "../../../core/useTranslation";

const WelcomeSite = () => {
  const translation = useTranslation();

  return (
    <MainWrapper
      header={<Header />}
      menu={<Menu />}
      content={
        <Welcome>
          <h1>{translation.welcomeMessage.line1}</h1>
          <h2>{translation.welcomeMessage.line2}</h2>
          <p>{translation.welcomeMessage.line3}</p>
        </Welcome>
      }
      footer={<Footer />}
    />
  );
};

export default WelcomeSite;

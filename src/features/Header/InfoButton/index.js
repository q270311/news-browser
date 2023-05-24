import { Button } from './styled';
import NewsPopup from '../../../common/NewsPopup';
import { AnimationType, OutAnimationType, usePopup } from 'react-custom-popup';
import { useTranslation } from '../../../core/useTranslation';

const InfoButton = () => {
  const { showModal } = usePopup();
  const translation = useTranslation();

  return (
    <Button
      onClick={() =>
        showModal(
          <NewsPopup
            author="Michał Bałdyga"
            content="Najwięcej czasu zajęło mi obmyślanie wyglądu designu całej aplikacji. Duże lepiej korzystać z gotowego projektu od designera i nie zastanawiać się nad kolorami i układem komponentów :) 
          Najciekawsze w tej pracy było zrobienie zmiany wersji językowej aplikacji."
            extraContent="Gdybym jeszcze raz miał napisać tę aplikację, to zamiast sagi użył bym TanStack Query v4. Było by to i prostsze i nowocześniejsze rozwiązanie 😊
          Dodatkowo aplikację rozbudował bym o:
          - przewijanie stron (paginację).
          - wyszukiwarkę newsów (jest taki endpoint w API, więc można go wykorzystać :)
          - W local storage można było by przechowywać (oprócz języka aplikacji) wybrany ostatnio układ (kafelki/lista)."
          />,
          {
            animationType: AnimationType.SLIDE_IN_UP,
            outAnimationType: OutAnimationType.SLIDE_OUT_UP,
          }
        )
      }
    >
      {translation.header.infoButton}
    </Button>
  );
};

export default InfoButton;

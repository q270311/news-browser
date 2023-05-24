import { nanoid } from 'nanoid';
import { Wrapper, Tile, Paragraph, BoldParagraph } from './styled';
import { AnimationType, OutAnimationType, usePopup } from 'react-custom-popup';
import NewsPopup from '../../../../common/NewsPopup';

const GridView = ({ articles }) => {
  const { showModal } = usePopup();

  return (
    <Wrapper>
      {articles.map((article) => (
        <Tile
          key={nanoid()}
          onClick={() =>
            showModal(
              <NewsPopup
                content={article.content}
                author={article.author}
                directUrl={article.url}
              />,
              {
                animationType: AnimationType.SLIDE_IN_UP,
                outAnimationType: OutAnimationType.SLIDE_OUT_UP,
              }
            )
          }
        >
          {article.urlToImage && (
            <img
              src={article.urlToImage}
              alt="miniatura"
              width="200px"
            />
          )}
          <Paragraph>
            <BoldParagraph>Data publikacji: </BoldParagraph>
            {article.publishedAt.substring(0, 10)}
          </Paragraph>
          <Paragraph>
            <BoldParagraph>Źródło:</BoldParagraph> {article.author}
          </Paragraph>
          <Paragraph>
            <BoldParagraph>Tytuł:</BoldParagraph> {article.title}
          </Paragraph>
        </Tile>
      ))}
    </Wrapper>
  );
};

export default GridView;

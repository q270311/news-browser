import { nanoid } from 'nanoid';
import { Ul, Li, Paragraph, BoldParagraph } from './styled';
import { AnimationType, OutAnimationType, usePopup } from 'react-custom-popup';
import NewsPopup from '../../../../common/NewsPopup';

const ListView = ({ articles }) => {
  const { showModal } = usePopup();

  return (
    <Ul>
      {articles.map((article) => (
        <Li
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
          <Paragraph>
            <BoldParagraph> Data publikacji: </BoldParagraph> {article.publishedAt.substring(0, 10)}
            ,<BoldParagraph> Źródło: </BoldParagraph> {article.author}
          </Paragraph>
          <Paragraph>
            <BoldParagraph>Tytuł:</BoldParagraph> {article.title}
          </Paragraph>
        </Li>
      ))}
    </Ul>
  );
};

export default ListView;

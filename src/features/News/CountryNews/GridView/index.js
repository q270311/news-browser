import { nanoid } from 'nanoid';
import { Wrapper, Tile, Paragraph, BoldParagraph } from "./styled";

const GridView = ({ articles }) => (
  <Wrapper>
    {articles && articles.map(article => (
      <Tile key={nanoid()}>
        <Paragraph>
          <BoldParagraph>Data publikacji: </BoldParagraph> 
          {article.publishedAt.substring(0,10)}
        </Paragraph>
        <Paragraph> <BoldParagraph>Źródło:</BoldParagraph> {article.author}</Paragraph>
        <Paragraph><BoldParagraph>Tytuł:</BoldParagraph> {article.title}</Paragraph>
      </Tile>
    ))}
  </Wrapper>
);

export default GridView;
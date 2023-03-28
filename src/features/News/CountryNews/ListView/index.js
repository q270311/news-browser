import { nanoid } from "nanoid";
import { Ul, Li, Paragraph, BoldParagraph } from "./styled";

const ListView = ({ articles }) => (
  <Ul>
    {articles && articles.map((article) => (
      <Li key={nanoid()}>
        <Paragraph>
          <BoldParagraph> Data publikacji: </BoldParagraph> {article.publishedAt.substring(0,10)},
          <BoldParagraph> Źródło: </BoldParagraph> {article.author}
        </Paragraph>
        <Paragraph>
          <BoldParagraph>Tytuł:</BoldParagraph> {article.title}
        </Paragraph>
      </Li>
    ))}
  </Ul>
);

export default ListView;

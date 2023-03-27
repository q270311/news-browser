import { nanoid } from 'nanoid';
import { Ul, Li, Paragraph } from "./styled";

const ListView = ({ articles }) => (
  <Ul>
    {articles.map(article => (
      <Li key={nanoid()}>
        <Paragraph>Data publikacji: {article.publishedAt}, Źródło: {article.author}</Paragraph>
        <Paragraph>Tytuł: {article.title}</Paragraph>
      </Li>
    ))}
  </Ul>
);

export default ListView;
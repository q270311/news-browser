import { Body, Paragraph, BoldParagraph } from "./styled";

const NewsPopup = ({content, author, directUrl}) => {
  return (
    <Body>
      <Paragraph>
        <BoldParagraph>Autor: {author}</BoldParagraph>
      </Paragraph>
      <Paragraph>
        <BoldParagraph>Oryginalny atrykuł:</BoldParagraph>
        <a href={directUrl} target="_blank" rel="noreferrer" >{directUrl}</a>
      </Paragraph>
      <Paragraph>
        <BoldParagraph>Treść:</BoldParagraph>
        {content}
      </Paragraph>
    </Body>
  );
};

export default NewsPopup;

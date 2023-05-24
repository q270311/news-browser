import { Body, Paragraph, BoldParagraph } from './styled';

const NewsPopup = ({ content, extraContent, author, directUrl }) => {
  return (
    <Body>
      {author && (
        <Paragraph>
          <BoldParagraph>Autor: {author}</BoldParagraph>
        </Paragraph>
      )}
      {directUrl && (
        <Paragraph>
          <BoldParagraph>Oryginalny atrykuł:</BoldParagraph>
          <a
            href={directUrl}
            target="_blank"
            rel="noreferrer"
          >
            {directUrl}
          </a>
        </Paragraph>
      )}
      {content && (
        <Paragraph>
          <BoldParagraph>Treść:</BoldParagraph>
          {content}
        </Paragraph>
      )}
      {extraContent && <Paragraph>{extraContent}</Paragraph>}
    </Body>
  );
};

export default NewsPopup;

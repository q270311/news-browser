import { useSelector } from 'react-redux';
import { StyledFooter } from './styled';
import { selectTotalResults } from '../News/newsSlice';
import { useTranslation } from '../../core/useTranslation';
import Clock from './Clock';

const Footer = () => {
  const totalResults = useSelector(selectTotalResults);
  const translation = useTranslation();

  return (
    <StyledFooter>
      <Clock />
      <p>
        {translation.footer.numberArticles}: {totalResults}
      </p>
    </StyledFooter>
  );
};

export default Footer;

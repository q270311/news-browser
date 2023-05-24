import { PageWrapper } from './styled';

export const MainWrapper = ({ header, menu, content, footer }) => (
  <PageWrapper>
    {header}
    {menu}
    <div> {content} </div>
    {footer}
  </PageWrapper>
);

import { useCurrentDate } from './useCurrentDate';
import { useTranslation } from '../../../core/useTranslation';
import { Time } from './styled';

const formatDate = (date) =>
  date.toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit',
  });

const Clock = () => {
  const date = useCurrentDate();
  const translation = useTranslation();

  return (
    <Time>
      {translation.footer.currentTime}: {formatDate(date)}
    </Time>
  );
};

export default Clock;

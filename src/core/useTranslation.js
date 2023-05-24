import { useSelector } from 'react-redux';
import { transcriptions } from './transcriptions';
import { selectLanguageApp } from '../features/Header/languageAppSlice';

export const useTranslation = () => {
  const language = useSelector(selectLanguageApp);
  return transcriptions.find((transcription) => transcription.language === language);
};

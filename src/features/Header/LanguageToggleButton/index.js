import { useSelector, useDispatch } from 'react-redux';
import { Select } from './styled';
import { selectLanguageApp, toggleLanguageApp } from '../languageAppSlice';

const LanguageToggleButton = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguageApp);

  const onChangeHandler = ({ target }) => {
    dispatch(toggleLanguageApp(target.value));
  };
  return (
    <Select
      value={language}
      onChange={onChangeHandler}
    >
      <option value="PL">PL</option>
      <option value="EN">EN</option>
    </Select>
  );
};

export default LanguageToggleButton;

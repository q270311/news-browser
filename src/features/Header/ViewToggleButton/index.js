import { useSelector, useDispatch } from 'react-redux';
import { setView, selectView } from '../../News/newsSlice';
import listIcon from './list_view.svg';
import gridIcon from './grid_view.svg';
import ImageRadioButton from '../../../common/ImageRadioButton';
import { Wrapper } from './styled';

const ListTileToggleButton = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ImageRadioButton
        id="list"
        name="viewMode"
        value="list"
        onChange={() => {
          dispatch(setView('list'));
        }}
        src={listIcon}
        alt="List icon"
        defaultChecked={'list' === useSelector(selectView)}
      />
      <ImageRadioButton
        id="grid"
        name="viewMode"
        value="grid"
        onChange={() => {
          dispatch(setView('grid'));
        }}
        src={gridIcon}
        alt="Grid icon"
        defaultChecked={'grid' === useSelector(selectView)}
      />
    </Wrapper>
  );
};

export default ListTileToggleButton;

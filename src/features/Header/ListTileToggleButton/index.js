import { useDispatch } from "react-redux";
import { setView } from "../../News/newsSlice";
import viewListIcon from "./view_list.svg";
import viewGridIcon from "./grid_view.svg";
import ImageRadioButton from "../../../common/ImageRadioButton";
import { Wrapper } from "./styled";

const ListTileToggleButton = () => {
  const dispatch = useDispatch(); 

  return (
    <Wrapper>
      <ImageRadioButton
        id="list"
        name="viewMode"
        value="list"
        onChange={() => {
          dispatch(setView("list"));
        }}
        src={viewListIcon}
        alt="List icon"
        defaultChecked={true}
      />
      <ImageRadioButton
        id="grid"
        name="viewMode"
        value="option2"
        onChange={() => {
          dispatch(setView("grid"));
        }}
        src={viewGridIcon}
        alt="Grid icon"
      />
    </Wrapper>
  );
};

export default ListTileToggleButton;

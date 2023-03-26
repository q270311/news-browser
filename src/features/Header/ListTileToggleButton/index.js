import viewListIcon from "./view_list.svg";
import viewGridIcon from "./grid_view.svg";
import ImageRadioButton from "../../../common/ImageRadioButton";
import { Wrapper } from "./styled";

const ListTileToggleButton = () => {
  

  return (
    <Wrapper>
      <ImageRadioButton
        id="list"
        name="viewMode"
        value="list"
        onChange={() => { console.log("Lista") }}
        src={viewListIcon}
        alt="List icon"
      />
      <ImageRadioButton
        id="grid"
        name="viewMode"
        value="option2"
        onChange={() => { console.log("Siatka") }}
        src={viewGridIcon}
        alt="Grid icon"
      />
    </Wrapper>
  );
};

export default ListTileToggleButton;
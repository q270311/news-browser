import viewListIcon from "./view_list.svg";
import viewGridIcon from "./grid_view.svg";

const SwitchListTile = () => {
  return (
    <div>
      <img src={viewListIcon} alt="List icon" />
      <img src={viewGridIcon} alt="Grid icon" />
    </div>      
  );
};

export default SwitchListTile;
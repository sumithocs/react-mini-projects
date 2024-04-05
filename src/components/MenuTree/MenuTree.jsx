import MenuTreeData from "../../data/menu_tree.json";
import { MenuList } from "./MenuList";
import "../../styles/menu-tree.css";

export const MenuTree = () => {
  const menus = MenuTreeData;

  console.log(menus);

  return (
    <div className="menu-tree-container">
      <MenuList list={menus} />
    </div>
  );
};

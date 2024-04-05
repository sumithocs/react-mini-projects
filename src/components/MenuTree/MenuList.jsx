import { MenuItem } from "./MenuItem";

export const MenuList = ({ list = [] }) => {
  return (
    <ul className="menu-list">
      {list && list.length
        ? list.map((item) => <MenuItem item={item} />)
        : null}
    </ul>
  );
};

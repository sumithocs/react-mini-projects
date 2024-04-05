import { useState } from "react";
import { MenuList } from "./MenuList";
import { FaMinus, FaPlus } from "react-icons/fa";

export const MenuItem = ({ item }) => {
  const [displayingChildren, setDisplayingChildren] = useState({});

  const handleToggleChildren = (getCurrentLabel) => {
    setDisplayingChildren({
      ...displayingChildren,
      [getCurrentLabel]: !displayingChildren[getCurrentLabel],
    });
  };

  console.log(displayingChildren);

  return (
    <li>
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length > 0 ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayingChildren[item.label] ? (
              <FaMinus color="white" size={25} />
            ) : (
              <FaPlus color="white" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {item &&
      item.children &&
      item.children.length > 0 &&
      displayingChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};

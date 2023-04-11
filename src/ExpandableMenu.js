import React, { useState } from 'react';

function ExpandableMenu({ menuConfig }) {
  const [expandedMenu, setExpandedMenu] = useState(null);

  const toggleSubmenu = (title) => {
    if (expandedMenu === title) {
      setExpandedMenu(null);
    } else {
      setExpandedMenu(title);
    }
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map((menuItem) => (
        <div key={menuItem.title} data-test-id={`first-level-${menuItem.title.toLowerCase()}`}>
          {menuItem.title}
          {menuItem.subItems && menuItem.subItems.length > 0 && (
            <button
              data-test-id={`button-${menuItem.title.toLowerCase()}`}
              onClick={() => toggleSubmenu(menuItem.title)}
            >
              {expandedMenu === menuItem.title ? 'Hide' : 'Expand'}
            </button>
          )}
          {expandedMenu === menuItem.title && menuItem.subItems && (
            <ul data-test-id={`ul-${menuItem.title.toLowerCase()}`}>
              {menuItem.subItems.map((subItem) => (
                <li
                  key={subItem}
                  data-test-id={`li-${menuItem.title.toLowerCase()}-${subItem.toLowerCase()}`}
                >
                  {subItem}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExpandableMenu;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const currentPath = window.location.pathname;
  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Rotated',
      path: '/rotated',
    },
    {
      title: 'Glowing',
      path: '/glowing',
    },
    {
      title: 'Marketing',
      path: '/marketing',
    },
    {
      title: 'Colors',
      path: '/colors',
    },
    {
      title: 'Parallax Effect',
      path: '/parallaxeffect',
    },
    {
      title: 'Coffe Shop',
      path: '/coffeshop',
    },
    {
      title: 'Cars Platform',
      path: '/cars',
    },
  ];
  return (
    <div>
      <div className="menu-switch">
        {showMenu ? (
          <AiOutlineClose onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <HiOutlineMenuAlt1 onClick={() => setShowMenu(!showMenu)} />
        )}
      </div>
      {showMenu && (
        <ul className="menu-items">
          {menuItems.map((item) => {
            return (
              <li>
                <Link
                  to={`${item.path}`}
                  className={`${currentPath === item.path && 'active'}`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Header;

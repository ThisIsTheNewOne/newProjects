import React, { useState, useEffect } from 'react';
import { MenuLeft, MenuRight, Nav } from '../styles/GlobalStyles';

const Menu: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Hide menu on scroll
  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false); // Hide menu
    } else {
      setIsVisible(true); // Show menu
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <Nav isVisible={isVisible}>
      <MenuLeft>Menu</MenuLeft>
      <MenuRight>
        <span>Search</span>
        <span>Cart</span>
        <span>Donate</span>
      </MenuRight>
    </Nav>
  );
};

export default Menu;
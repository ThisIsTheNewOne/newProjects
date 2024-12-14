import styled from 'styled-components';

export const Nav = styled.nav<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: white;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  transform: ${({ isVisible }) => (isVisible ? 'translateY(0)' : 'translateY(-100%)')};
`;

export const MenuLeft = styled.div`
  margin: 30px;
`;

export const MenuRight = styled.div`
  display: flex;
  margin: 30px;
  gap: 30px;
  font-size: 1rem;

  span {
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #007bff;
    }
  }
`;

export const ToasterContainer = styled.div<{ bgColor: string }>`
  position: fixed;
  height: 150px;
  width: 300px;
  bottom: 0; /* Stick to the bottom of the screen */
  right: 0; /* Align to the right edge */
  background-color: ${({ bgColor }) => bgColor || "#fff"};
  color: #fff;
  padding: 10px 20px;
  transition: transform 0.4s ease, opacity 0.4s ease; /* Smooth slide and fade */
  opacity: ${({ bgColor }) => (bgColor ? 1 : 0)};
  transform: ${({ bgColor }) => (bgColor ? "translateY(0)" : "translateY(150%)")}; /* Start from below the screen */
  display: flex;
  align-items: center;
  gap: 10px;
`;

import styled from 'styled-components';

export const FlexContainer = styled.div<{ justify?: string; align?: string; gap?: string }>`
  display: flex;
  justify-content: ${({ justify }) => justify || 'flex-start'};
  align-items: ${({ align }) => align || 'center'};
  gap: ${({ gap }) => gap || '0'};
`;

export const FixedContainer = styled.div<{ top?: string; left?: string; height?: string; width?: string }>`
  position: fixed;
  top: ${({ top }) => top || '0'};
  left: ${({ left }) => left || '0'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || '60px'};
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 0 20px;
  transition: transform 0.3s ease-in-out;
`;
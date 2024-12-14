import React from 'react';
import { ToasterContainer } from '../styles/GlobalStyles';

interface ToasterProps {
  artist: { name: string; color: string; most_important_piece: string } | null;
}

const Toaster: React.FC<ToasterProps> = ({ artist }) => {
  return (
    <ToasterContainer bgColor={artist?.color || ""}>
      {artist && (
        <>
          <strong>{artist.name}</strong>
          <p>{artist.most_important_piece}</p>
        </>
      )}
    </ToasterContainer>
  );
};

export default Toaster;
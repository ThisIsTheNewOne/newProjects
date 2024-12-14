import React, { useState } from 'react';
import styled from 'styled-components';
import artists from "../data/artists.json"
import Toaster from './ToasterContainer';

const ArtistItem = styled.div<{ color: string }>`
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  border-left: 5px solid ${({ color }) => color};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ color }) => color};
    color: #fff;
  }
`;

const ArtistList: React.FC = () => {
  const [hoveredArtist, setHoveredArtist] = useState<{ name: string; color: string; most_important_piece: string; } | null>(null);

  return (
    <div>
      {artists.map((artist) => (
        <ArtistItem
          key={artist.name}
          color={artist.color}
          onMouseEnter={() => setHoveredArtist(artist)}
          onMouseLeave={() => setHoveredArtist(null)}
        >
          {artist.name}
        </ArtistItem>
      ))}
      <Toaster artist={hoveredArtist} />
    </div>
  );
};

export default ArtistList;
import React, { useState } from 'react';
import styled from 'styled-components';
import artists from "../data/artists.json"
import artistsList from "../data/images_of_artists.json"
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
  const [hoveredArtist, setHoveredArtist] = useState<{ name: string; color: string; most_important_piece: string; image: string; } | null>(null);

  const combinedArtists = artists.map((artist) => {
    const matchedArtist = artistsList.find((item) => item.name === artist.name);
    return {
      ...artist,
      image: matchedArtist?.image || '', 
      description: matchedArtist?.description || '' 
    };
  });

  return (
    <div>
      {combinedArtists.map((artist) => (
        <ArtistItem
          key={artist.name}
          color={artist.color}
          onMouseEnter={() => setHoveredArtist(artist)}
          onMouseLeave={() => setHoveredArtist(null)}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img
              src={artist.image}
              alt={artist.name}
              style={{ width: '50px', height: '50px', borderRadius: '50%' }}
            />
           {/* {artist.name} */}
          </div>
        </ArtistItem>
      ))}
     <Toaster key={hoveredArtist?.name || 'toaster'} artist={hoveredArtist} />
    </div>
  );
};

export default ArtistList;
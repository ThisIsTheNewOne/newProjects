import React, { useState } from 'react';
import styled from 'styled-components';
import artists from "../data/artists.json"
import artistsList from "../data/images_of_artists.json"
import Toaster from './ToasterContainer';

const ArtistItem = styled.div<{ color: string }>`
  width: 100px;
  margin: 10px 0;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    color: #fff;
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    transition: transform 0.3s ease; 
  }

  &:hover img {
    transform: translateY(-10px); 
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
          <img
              src={artist.image}
              alt={artist.name}
              style={{ width: '100px', height: '100px', borderRadius: '0%' }}
            />
        </ArtistItem>
      ))}
     <Toaster key={hoveredArtist?.name || 'toaster'} artist={hoveredArtist} />
    </div>
  );
};

export default ArtistList;
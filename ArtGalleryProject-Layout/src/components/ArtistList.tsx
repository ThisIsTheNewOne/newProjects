import React, { useState } from 'react';
import styled from 'styled-components';
import artists from "../data/artists.json"
import artistsList from "../data/images_of_artists.json"
import Toaster from './ToasterContainer';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(20, 1fr); 
  grid-auto-rows: 10px; 
  gap: 10px; 
  max-width: 1650px; 
  margin: 0 auto; 
`;

const ArtistItem = styled.div<{ color: string; width: string; height: string }>`
  grid-column: span ${({ width }) => Math.ceil(parseFloat(width) / 70)}; 
  grid-row: span ${({ height }) => Math.ceil(parseFloat(height) / 15)}; 
  overflow: hidden; 
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 0%;
    transition: transform 0.3s ease; 
  }

  &:hover img {
    transform: translateY(-5px); 
    cursor: pointer;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  &:hover img {
    transform: translateY(-5px); 
  }
`;

const ArtistList: React.FC = () => {
  const [hoveredArtist, setHoveredArtist] = useState<{ name: string; color: string; most_important_piece: string; image: string; } | null>(null);

  const combinedArtists = artists.map((artist) => {
    const matchedArtist = artistsList.find((item) => item.name === artist.name);
    return {
      ...artist,
      image: matchedArtist?.image || '', 
      description: matchedArtist?.description || '',
      width: artist.width || "150px",
      height: artist.height || "150px"
    };
  });

  return (
    <div>
      <GridContainer>
      {combinedArtists.map((artist) => (
        <ArtistItem
          key={artist.name}
          color={artist.color}
          width={artist.width}
          height={artist.height}
          onMouseEnter={() => setHoveredArtist(artist)}
          onMouseLeave={() => setHoveredArtist(null)}
        >
          <img
              src={artist.image}
              alt={artist.name}
            />
        </ArtistItem>
      ))}
      </GridContainer>
     <Toaster key={hoveredArtist?.name || 'toaster'} artist={hoveredArtist} />
    </div>
  );
};

export default ArtistList;
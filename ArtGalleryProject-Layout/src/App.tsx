import './App.css'
import ArtistList from './components/ArtistList'
import Menu from './components/Menu'
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: 'Helvetica', sans-serif; 
  font-size: calc(6vw + 25px); 
  font-weight: bold; 
  text-align: center; 
  letter-spacing: -8px;
  width: 100%;
  /* height: 24vh; */
  /* line-height: 1.3; */
  display: flex; 
  justify-content: center;
  align-items: center;
  margin: 0;
  color: #333; 
`;

const ContentWrapper = styled.div`
  /* padding-top: 50px;  */
  position: fixed;
  top: 0;
  left: 0; 
  padding-left: 25px;
  padding-top: 50px; 
`;

const App = () => {
  return (
    <>
      <div>
        <Menu />
        <ContentWrapper>
          <Heading>ART GALLERY OF A MUSEUM</Heading>
          <ArtistList />
        </ContentWrapper>
      </div>
    </>
  )
}

export default App

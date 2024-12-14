import './App.css'
import ArtistList from './components/ArtistList'
import Menu from './components/Menu'

const App = () => {

  return (
    <>
       <div>
        <Menu />
        <div style={{ padding: '100px 20px' }}>
          <h1>Art Gallary of A Museum</h1>
          <ArtistList />
          </div>
      </div>
    </>
  )
}

export default App

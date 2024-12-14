import './App.css'
import Menu from './components/Menu'

const App = () => {

  return (
    <>
       <div>
        <Menu />
        <div style={{ padding: '100px 20px' }}>
          <h1>Scroll down to see the menu hide</h1>
          <p>Keep scrolling to see it reappear when you scroll up!</p>
          <div style={{ height: '2000px' }}>
            <p>Content goes here...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Hello from './components/Hello'
import Menu from './components/Menu'

function App() {
  // const [count, setCount] = useState(0)

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

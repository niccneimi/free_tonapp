import { useState } from 'react'
import RollButton from './components/RollButton'
import FootMenu from './components/FootMenu'
import Header from './components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <RollButton />
      </main>
      <FootMenu />
    </div>
  )
}

export default App;

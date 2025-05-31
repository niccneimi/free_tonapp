import { useState } from 'react'
import RollButton from './components/RollButton'
import FootMenu from './components/FootMenu'
import Header from './components/Header'
import Rullet from './components/Rullet'
import RollTable from './components/RollTable'
import Add from './components/Add'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Rullet />
        <RollTable />
        <RollButton />
        <Add />
      </main>
      <FootMenu />
    </div>
  )
}

export default App;

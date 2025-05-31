import { useState } from 'react'
import RollButton from './components/RollButton'
import FootMenu from './components/FootMenu'
import Header from './components/Header'
import Rullet from './components/Rullet'
import RollTable from './components/RollTable'
import Add from './components/Add'
import './App.css'

function App() {
  const [currentContent, setCurrentContent] = useState('cran')

  const renderContent = () => {
    switch (currentContent) {
      case 'cran':
        return (
          <>
            <Rullet />
            <RollTable />
            <RollButton />
            <Add />
          </> 
        );
      case 'challenges':
        return (
          <>
          </>
        );
      case 'staking':
        return (
          <>
          </>
        );
      case 'friends':
        return (
          <>
          </>
        );
      case 'profile':
        return (
          <>
          </>
        );
    }
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {renderContent()}
      </main>
      <FootMenu setCurrentContent={setCurrentContent} currentContent={currentContent}/>
    </div>
  )
}

export default App;

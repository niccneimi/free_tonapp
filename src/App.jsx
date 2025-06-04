import { useState } from 'react'
import RollButton from './components/RollButton'
import FootMenu from './components/FootMenu'
import Header from './components/Header'
import Rullet from './components/Rullet'
import RollTable from './components/RollTable'
import Add from './components/Add'
import ProfileMenu from './components/ProfileMenu'
import TransactionTable from './components/TransactionTable'
import AdvertisingCabinet from './components/AdvertisingCabinet'
import Friends from './components/Friends'
import Staking from './components/Staking'
import CashInForm from './components/CashInForm'
import CashInRequestForm from './components/CashInRequestForm'
import CashOutForm from './components/CashOutForm'

import './App.css'

function App() {
  const [currentContent, setCurrentContent] = useState('cran')
  const [profileSubMenu, setProfileSubMenu] = useState('profile')

  const renderContent = () => {
    switch (currentContent) {
      case 'cran':
        return (
          <>
            <Rullet currentContent={currentContent} gridRow="1"/>
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
            <Staking />
            <Add />
          </>
        );
      case 'friends':
        return (
          <>
           <Friends />
           <Add />
          </>
        );
      case 'profile':
        switch (profileSubMenu) {
          case 'profile':
            return (
              <>
                <ProfileMenu profileSubMenu={profileSubMenu} setProfileSubMenu={setProfileSubMenu}/>
                <Rullet currentContent={currentContent} gridRow="2" setCurrentContent={setCurrentContent}/>
                <div className="last-transactions">Последние транзакции</div>
                <div className="transaction-column-names">
                  <div className="transaction-column-name">Дата</div>
                  <div className="transaction-column-name">Тип</div>
                  <div className="transaction-column-name">Сумма</div>
                  <div className="transaction-column-name">Статус</div>
                </div>
                <TransactionTable />
                <Add />
              </>
            );
          case 'advertising':
            return (
              <>
                <AdvertisingCabinet />
                <ProfileMenu profileSubMenu={profileSubMenu} setProfileSubMenu={setProfileSubMenu}/>
                <Add />
              </>
            );
        }
      case 'cashIn':
        return (
          <>
            <CashInForm setCurrentContent={setCurrentContent}/>
            <Add />
          </>
        );
      case 'cashInRequest':
        return (
          <>
            <CashInRequestForm />
            <Add />
          </>
        );
      case 'cashOut':
        return (
          <>
            <CashOutForm />
            <Add />
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

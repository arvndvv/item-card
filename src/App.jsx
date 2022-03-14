import React from 'react'
import './App.css'
import Card from './components/card/card.component';
import {CardList} from './data/data'
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2 className='App-header__title--thin'>Which UI</h2>
        <h1 className='App-header__title--thick'>Is <span className='text-orange'>More Accurate?</span></h1>
        </header>
        <div className="App-body">
    <Card cardList={CardList}></Card>
    </div>
    </div>
  )
}

export default App

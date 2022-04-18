import React from 'react';
import { Calculator } from './ui/Calculator';
import style from './App.module.scss'

function App() {
  return (
    <div className={style.app}>
      <Calculator/>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
      <h1>Test serv</h1>
      <p>НTEST test,server test tegs</p>

      {/* Вставляем компонент счётчика */}
      <Counter step={5555112237} />  {/* Здесь вызывается компонент Counter */}
    </div>
  );
}

export default App;

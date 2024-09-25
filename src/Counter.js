import React, { useState } from 'react';

function Counter({ step }) {
  // Инициализируем состояние: начальное значение счётчика — 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      {/* Кнопка для увеличения счётчика */}
      <button onClick={() => setCount(count + step)}>Увеличить на {step}</button>
    </div>
  );
}

export default Counter;

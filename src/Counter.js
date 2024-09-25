import React, { useState } from 'react';

function Counter() {
  // Инициализируем состояние: начальное значение счётчика — 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Счётчик: {count}</h2>
      {/* Кнопка для увеличения счётчика */}
      <button onClick={() => setCount(count + 1)}>Увеличить</button>
    </div>
  );
}

export default Counter;

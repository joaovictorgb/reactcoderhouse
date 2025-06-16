import { useState } from 'react';
import Button from './Button';

const ItemCount: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-2xl font-bold">
        Contador: {count}
      </div>
      <div className="flex gap-2">
        <Button
          backgroundColor="#FF4444"
          onClick={decrement}
        >
          -
        </Button>
        <Button
          backgroundColor="#44FF44"
          onClick={increment}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default ItemCount; 
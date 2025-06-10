'use client';

import { useState } from 'react';

// Este componente demonstra o uso do useState para gerenciar estado no React
export default function ContadorExplicativo() {
  // useState retorna um array com 2 elementos:
  // 1. O valor atual do estado (contador)
  // 2. Uma função para atualizar esse estado (setContador)
  const [contador, setContador] = useState(0);

  return (
    <div className="border border-zinc-800 p-8">
      <h2 className="text-4xl font-light mb-8 text-center tracking-widest">
        {contador}
      </h2>
      
      <div className="flex gap-4 justify-center">
        <button
          onClick={() => setContador(contador - 1)}
          className="bg-black text-white font-light py-3 px-8 
            border border-zinc-800 transition-all duration-300 
            hover:bg-white hover:text-black tracking-wider"
        >
          Diminuir
        </button>
        
        <button
          onClick={() => setContador(contador + 1)}
          className="bg-white text-black font-light py-3 px-8 
            border border-white transition-all duration-300 
            hover:bg-black hover:text-white tracking-wider"
        >
          Aumentar
        </button>
      </div>

      <p className="mt-8 text-sm text-zinc-500 text-center tracking-wide">
        Este componente usa o hook useState para manter o estado do contador
      </p>
    </div>
  );
} 
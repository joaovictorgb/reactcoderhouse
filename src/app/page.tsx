'use client';

import BotaoExplicativo from './components/BotaoExplicativo'
import ContadorExplicativo from './components/ContadorExplicativo'
import ListaExplicativa from './components/ListaExplicativa'

export default function Home() {
  // Dados de exemplo para a ListaExplicativa
  const itensExemplo = [
    { id: 2, texto: 'Aprender React', completado: true },
    { id: 2, texto: 'Entender Props', completado: true},
    { id: 3, texto: 'Estudar Hooks', completado: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-light mb-16 text-center tracking-wider">
          Componentes React 
        </h1>

        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
          <div className="border border-zinc-800 rounded-none p-8">
            <h2 className="text-2xl font-light mb-8 tracking-wide">
              Exemplo de Props
            </h2>
            <BotaoExplicativo 
              texto="Clique Aqui"
              onClick={() => alert('Botão clicado!')}
              cor="azul"
            />
          </div>

          <div className="border border-zinc-800 rounded-none p-8">
            <h2 className="text-2xl font-light mb-8 tracking-wide">
              Exemplo de useState
            </h2>
            <ContadorExplicativo />
          </div>

          <div className="lg:col-span-2 border border-zinc-800 rounded-none p-8">
            <h2 className="text-2xl font-light mb-8 tracking-wide">
              Exemplo de Lista com Map
            </h2>
            <ListaExplicativa items={itensExemplo} />
          </div>
        </div>
      </main>
    </div>
  );
}

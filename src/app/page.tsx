'use client';

import BotaoExplicativo from './components/BotaoExplicativo';
import ContadorExplicativo from './components/ContadorExplicativo';
import ListaExplicativa from './components/ListaExplicativa';
import Button from './components/Button';
import ItemCount from './components/ItemCount';
import { Checkbox } from '@/components/ui/checkbox';
import { ChartBarInteractive } from '@/components/ui/grafico';
export default function Home() {
  // Dados de exemplo para a ListaExplicativa
  const itensExemplo = [
    { id: 1, texto: 'Aprender React', completado: true },
    { id: 2, texto: 'Entender Props', completado: true},
    { id: 3, texto: 'Estudar Hooks', completado: true },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-light mb-16 text-center tracking-wider">
          Componentes React 
        </h1>

        {/* Componentes do Trabalho 1 */}
        <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2 mb-16">
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

        {/* Componentes do Trabalho 2 */}
        <div className="border-t border-zinc-800 pt-16">
          <h1 className="text-4xl font-light mb-16 text-center tracking-wider">
            Componentes Adicionais - Unidade 2
          </h1>

          <div className="grid gap-12 md:grid-cols-1 lg:grid-cols-2">
            <div className="border border-zinc-800 rounded-none p-8">
              <h2 className="text-2xl font-light mb-8 tracking-wide">
                Botões Reutilizáveis
              </h2>
              <div className="flex flex-col gap-4">
                <Button
                  backgroundColor="#3498db"
                  onClick={() => alert('Botão azul clicado!')}
                >
                  Botão Azul
                </Button>
                <Button
                  backgroundColor="#e74c3c"
                  onClick={() => alert('Botão vermelho clicado!')}
                  size="large"
                >
                  Botão Vermelho
                </Button>
                <Button
                  backgroundColor="#2ecc71"
                  onClick={() => alert('Botão verde clicado!')}
                  size="small"
                >
                  Botão Verde
                </Button>
              </div>
            </div>

            <div className="border border-zinc-800 rounded-none p-8">
              <h2 className="text-2xl font-light mb-8 tracking-wide">
                Contador com Estado
              </h2>
              <ItemCount />
            </div>
            <Checkbox />
            ChartBarInteractive
          </div>
        </div>
      </main>
    </div>
  );
}

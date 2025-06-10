// Este é um componente de botão que demonstra o uso de props no React
// Props são propriedades que podemos passar para nossos componentes

interface BotaoExplicativoProps {
  texto: string;
  onClick: () => void;
  cor?: 'azul' | 'verde' | 'vermelho';
}

export default function BotaoExplicativo({ texto, onClick }: BotaoExplicativoProps) {
  return (
    <div className="mb-8">
      <button
        onClick={onClick}
        className="bg-white text-black font-light py-3 px-8 
          transition-all duration-300 ease-in-out hover:bg-black 
          hover:text-white border border-white tracking-wider"
      >
        {texto}
      </button>
      <p className="mt-6 text-sm text-zinc-500 tracking-wide">
        Este botão recebe props para: texto e função de clique
      </p>
    </div>
  );
} 
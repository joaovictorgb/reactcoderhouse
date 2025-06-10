// Este componente demonstra como trabalhar com listas no React
// usando o método map e a importância das keys

interface Item {
  id: number;
  texto: string;
  completado: boolean;
}

interface ListaExplicativaProps {
  items: Item[];
}

export default function ListaExplicativa({ items }: ListaExplicativaProps) {
  return (
    <div className="border border-zinc-800 p-8">
      <ul className="space-y-4">
        {/* 
          Usamos o método map para transformar cada item do array
          em um elemento JSX. A key é importante para o React
          identificar cada elemento único na lista
        */}
        {items.map((item) => (
          <li 
            key={item.id}
            className={`p-4 border ${
              item.completado 
                ? 'border-white bg-white text-black' 
                : 'border-zinc-800 bg-black text-white'
            } transition-all duration-300`}
          >
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 border ${
                item.completado 
                  ? 'bg-black border-black' 
                  : 'bg-transparent border-white'
              }`} />
              <span className={`text-lg font-light tracking-wide ${
                item.completado ? 'line-through' : ''
              }`}>
                {item.texto}
              </span>
            </div>
          </li>
        ))}
      </ul>

      <p className="mt-8 text-sm text-zinc-500 text-center tracking-wide">
        Este componente demonstra o uso do map para renderizar listas
        e a importância das keys para performance
      </p>
    </div>
  );
} 


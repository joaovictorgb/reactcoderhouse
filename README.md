# React Coderhouse - Unidade 2

## Objetivos da Aula Implementados

### 1. Entendimento do JSX e Sugar Syntax

Implementamos exemplos práticos de sugar syntax e JSX em vários componentes:

```typescript
// Exemplo de Sugar Syntax em Button.tsx
interface ButtonProps {
  backgroundColor: string;  // Uso de TypeScript com React
  onClick: () => void;     // Definição de callback function
  disabled?: boolean;      // Prop opcional com ?
  size?: 'small' | 'medium' | 'large';  // Union types
  children: React.ReactNode;  // Uso do children prop
}

// Desestruturação de props
const Button: React.FC<ButtonProps> = ({
  backgroundColor,
  onClick,
  disabled = false,  // Valor padrão com destructuring
  size = 'medium',
  children
}) => {
  // ... resto do código
};
```

### 2. Correção de Sugar Syntax

Exemplo de código corrigido com sugar syntax apropriada:

```typescript
// Código Original com Erro
const data = { name: 'John', age: 30 };
const newData = { ...data, location: 'New York' };

function display({ name age }) {  // Erro: falta vírgula
  return `Name: ${name}, Age: ${age}`;
}

// Código Corrigido
const data = { name: 'John', age: 30 };
const newData = { ...data, location: 'New York' };  // Spread operator

function display({ name, age }) {  // Desestruturação correta
  return `Name: ${name}, Age: ${age}`;
}

console.log(display(newData));
```

### 3. Polyfill Implementation

Implementação do polyfill para Array.prototype.includes:

```typescript
if (!Array.prototype.includes) {
  Array.prototype.includes = function(searchElement, fromIndex) {
    if (this == null) {
      throw new TypeError('"this" é null ou undefined');
    }

    const o = Object(this);
    const len = o.length >>> 0;

    if (len === 0) {
      return false;
    }

    const n = fromIndex | 0;
    let k = Math.max(n >= 0 ? n : len + n, 0);

    while (k < len) {
      if (o[k] === searchElement) {
        return true;
      }
      k++;
    }
    return false;
  };
}
```

### 4. Componentes Implementados

#### Button Component (`src/app/components/Button.tsx`)
- **Propósito**: Componente reutilizável de botão com props customizáveis
- **Features**:
  - Cor de fundo customizável via `backgroundColor`
  - Diferentes tamanhos (`small`, `medium`, `large`)
  - Suporte a estado `disabled`
  - Uso de `children` para conteúdo flexível
  - Callback function para `onClick`

#### ItemCount Component (`src/app/components/ItemCount.tsx`)
- **Propósito**: Implementação de contador com estado
- **Features**:
  - Uso do hook `useState` para gerenciamento de estado
  - Botões de incremento e decremento
  - Prevenção de valores negativos
  - Reutilização do componente `Button`

### 5. Demonstração de Conceitos React

1. **Props e Componentes**:
   - Passagem de props tipadas com TypeScript
   - Componentes funcionais com FC
   - Reutilização de componentes

2. **Estado e Eventos**:
   - Gerenciamento de estado com useState
   - Manipulação de eventos com callbacks
   - Atualização de estado de forma segura

3. **Estilização**:
   - Uso de Tailwind CSS para estilos
   - Estilos condicionais baseados em props
   - Classes dinâmicas

### 6. Estrutura do Projeto

```
src/
  app/
    components/
      Button.tsx       # Componente de botão reutilizável
      ItemCount.tsx    # Componente de contador
    page.tsx          # Página principal com demonstração
```

## Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute o projeto:
```bash
npm run dev
```

## Tecnologias Utilizadas

- React
- TypeScript
- Next.js
- Tailwind CSS

## Conclusão

Este projeto demonstra a implementação prática dos conceitos fundamentais do React:
- JSX e Sugar Syntax
- Componentização
- Props e Estado
- Eventos e Callbacks
- TypeScript com React
- Estilização Moderna
# Configuração do React Router

## ✅ Instalação e Configuração Completa

### Pacotes Instalados
- `react-router-dom` - Biblioteca de roteamento para React

### Estrutura de Rotas

Todas as rotas foram configuradas corretamente no arquivo `App.tsx`:

#### Rotas Principais
- `/` - Home (página inicial)
- `/event` - Página do evento
- `/menu` - Cardápio
- `/reservation` - Reservas
- `/chefs` - Chefs
- `/team` - Equipe
- `/manifesto` - Manifesto
- `/contact` - Contato
- `/compact` - Versão compacta
- `/all` - Menu completo
- `/store` - Loja
- `/blog` - Blog
- `/checkout` - Carrinho de compras

#### Rotas Dinâmicas
- `/product/:id` - Detalhes do produto (ID dinâmico)
- `/blog/:id` - Post do blog (ID dinâmico)

#### Redirecionamentos
- `/home` → `/` (redireciona para a home)
- Rotas não encontradas → `/` (redireciona para a home)

### Arquivos Modificados

1. **App.tsx**
   - Removido gerenciamento de estado manual (`useState`, `useEffect`)
   - Implementado `BrowserRouter` e `Routes`
   - Criados componentes wrapper para páginas que precisam de navegação
   - Configuradas todas as rotas com `Route`

2. **components/Layout/index.tsx**
   - Adicionado `useLocation` para detectar rota atual
   - Adicionado `useNavigate` para navegação programática
   - Função `getViewFromPath` converte path para view
   - Removidas props `activeView` e `onNavigate`, agora gerenciadas internamente

3. **components/Layout/NavButton.tsx**
   - Adicionado suporte para componente `Link` do React Router
   - Mantida compatibilidade com navegação por botão
   - Propriedade `to` opcional para usar Link ou button

4. **components/Layout/Sidebar.tsx**
   - Atualizado logo HOME para usar `Link` ao invés de `div` com onClick
   - Todos os `NavButton` agora recebem prop `to` para navegação via Link

### Vantagens da Nova Implementação

1. **URLs Limpas**: Uso de rotas reais (`/menu`) ao invés de hashes (`#menu`)
2. **Navegação Nativa**: Suporte a botões voltar/avançar do navegador
3. **Performance**: Navegação sem recarregar a página
4. **SEO**: URLs semânticas e navegação adequada para indexação
5. **Deep Linking**: Possibilidade de acessar qualquer página diretamente pela URL
6. **Histórico**: Gerenciamento automático do histórico de navegação

### Como Usar

#### Navegação Programática
```tsx
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();
  
  // Navegar para uma rota
  navigate('/menu');
  
  // Navegar para uma rota dinâmica
  navigate(`/product/${productId}`);
  
  // Voltar
  navigate(-1);
};
```

#### Links Declarativos
```tsx
import { Link } from 'react-router-dom';

<Link to="/menu">Cardápio</Link>
<Link to={`/product/${id}`}>Ver Produto</Link>
```

#### Obter Parâmetros da URL
```tsx
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  // use id...
};
```

#### Detectar Rota Atual
```tsx
import { useLocation } from 'react-router-dom';

const MyComponent = () => {
  const location = useLocation();
  console.log(location.pathname); // ex: "/menu"
};
```

### Próximos Passos Recomendados

1. **Lazy Loading**: Implementar carregamento lazy de rotas para melhor performance
2. **Proteção de Rotas**: Adicionar guards para rotas protegidas (se necessário)
3. **Scroll Restoration**: Configurar restauração de scroll ao navegar
4. **Error Boundary**: Adicionar página de erro 404 customizada
5. **Loading States**: Adicionar indicadores de carregamento durante transições

### Testes Recomendados

- ✅ Navegar entre todas as páginas principais
- ✅ Testar navegação com botões voltar/avançar do navegador
- ✅ Acessar URLs diretamente (deep linking)
- ✅ Testar rotas dinâmicas com diferentes IDs
- ✅ Verificar redirecionamentos
- ✅ Testar em diferentes dispositivos (mobile/desktop)

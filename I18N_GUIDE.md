# Internacionalização (i18n) - Bergamota Lubisca

## ✅ Configuração Completa

### Pacotes Instalados
- `i18next` - Core da biblioteca de internacionalização
- `react-i18next` - Integração do i18next com React
- `i18next-browser-languagedetector` - Detecção automática do idioma do navegador

### Idiomas Disponíveis
- **Português (pt-BR)** - Idioma padrão
- **Inglês (en-US)** - Idioma secundário

## 📁 Estrutura de Arquivos

```
i18n/
├── config.ts                 # Configuração do i18next
└── locales/
    ├── pt-BR.json           # Traduções em português
    └── en-US.json           # Traduções em inglês
```

## 🚀 Como Usar

### Em Componentes React

```tsx
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div>
      <h1>{t('nav.home')}</h1>
      <p>{t('event.title')}</p>
    </div>
  );
};
```

### Trocar Idioma

O componente `LanguageSelector` já está integrado no footer e permite alternar entre PT e EN.

Programaticamente:
```tsx
import { useTranslation } from 'react-i18next';

const { i18n } = useTranslation();

// Mudar para inglês
i18n.changeLanguage('en-US');

// Mudar para português
i18n.changeLanguage('pt-BR');

// Obter idioma atual
const currentLang = i18n.language; // 'pt-BR' ou 'en-US'
```

### Arrays e Objetos nas Traduções

Para arrays (como listas de parágrafos):
```tsx
const { t } = useTranslation();

// No JSON: "intro": ["Texto 1", "Texto 2", "Texto 3"]
const paragraphs = t('event.intro', { returnObjects: true });

paragraphs.map((text, idx) => <p key={idx}>{text}</p>)
```

### Interpolação de Variáveis

```tsx
// No JSON: "welcome": "Olá, {{name}}!"
t('welcome', { name: 'João' }) // "Olá, João!"
```

### Pluralização

```tsx
// No JSON:
// "items_one": "{{count}} item"
// "items_other": "{{count}} itens"

t('items', { count: 1 })  // "1 item"
t('items', { count: 5 })  // "5 itens"
```

## 🗂️ Estrutura das Traduções

### Namespaces Organizados

```json
{
  "common": {
    "brandName": "BERGAMOTA",
    "loading": "Carregando..."
  },
  "nav": {
    "home": "HOME",
    "event": "O EVENTO",
    "menu": "CARDÁPIO"
  },
  "event": {
    "title": "Sabores que Conectam",
    "intro": ["Parágrafo 1", "Parágrafo 2"]
  }
}
```

### Acessando as Traduções

```tsx
t('common.brandName')      // "BERGAMOTA"
t('nav.home')              // "HOME"
t('event.title')           // "Sabores que Conectam"
```

## 📝 Componentes Atualizados

### Layout e Navegação
- ✅ `Layout/index.tsx` - Tagline, mensagens e footer
- ✅ `Layout/Sidebar.tsx` - Menu de navegação lateral
- ✅ `Layout/MobileMenu.tsx` - Menu mobile
- ✅ `Layout/ReservationFAB.tsx` - Botão flutuante de reserva
- ✅ `Layout/RightSidebar.tsx` - Sidebar direita e carrinho
- ✅ `LanguageSelector.tsx` - Seletor de idioma (novo)

### Páginas
- ✅ `EventCard.tsx` - Página do evento
- ✅ `MenuCard/index.tsx` - Cardápio

### Pendentes (podem ser adicionados conforme necessário)
- `ReservationCard` - Formulário de reserva
- `ChefsCard` - Página das chefs
- `ManifestoCard` - Manifesto
- `ContactCard` - Contato
- `StoreCard` - Loja
- `BlogCard` - Blog
- `CheckoutCard` - Checkout

## 🎨 Boas Práticas

### 1. Chaves Descritivas
✅ Bom: `event.title`, `nav.home`
❌ Ruim: `e1`, `title1`

### 2. Organização por Contexto
Agrupe traduções relacionadas:
```json
{
  "reservation": {
    "title": "...",
    "form": {
      "name": "...",
      "email": "..."
    }
  }
}
```

### 3. Evite Hardcoded Strings
❌ Ruim:
```tsx
<h1>Bergamota Lubisca</h1>
```

✅ Bom:
```tsx
<h1>{t('common.brandName')}</h1>
```

### 4. Valores Padrão
```tsx
t('key.that.might.not.exist', 'Valor Padrão')
```

## 🔧 Configuração Avançada

### Detecção Automática de Idioma

O sistema já está configurado para:
1. Verificar localStorage (preferência salva)
2. Detectar idioma do navegador
3. Usar português como fallback

### Persistência

O idioma selecionado é salvo automaticamente no localStorage e restaurado na próxima visita.

### Debug Mode

Para ativar modo de debug (útil em desenvolvimento):

```ts
// Em i18n/config.ts
i18n.init({
  // ...
  debug: true, // Alterar para true
  // ...
});
```

## 📊 Cobertura Atual

### Textos Traduzidos
- ✅ Navegação completa (sidebar, mobile, FAB)
- ✅ Layout (tagline, footer, mensagens)
- ✅ Página do Evento
- ✅ Cardápio (títulos e seções)
- ✅ Sidebar direita (categorias e atalhos)

### Próximos Passos
1. Adicionar traduções para componentes de formulário
2. Traduzir conteúdo do blog e manifesto
3. Adicionar mais idiomas (Espanhol?)
4. Criar hook customizado para formatação de moeda por região

## 🌍 Adicionando Novo Idioma

1. Crie arquivo em `i18n/locales/`:
```
i18n/locales/es-ES.json
```

2. Adicione ao config:
```ts
import esES from './locales/es-ES.json';

i18n.init({
  resources: {
    'pt-BR': { translation: ptBR },
    'en-US': { translation: enUS },
    'es-ES': { translation: esES }, // Novo
  },
  // ...
});
```

3. Atualize o `LanguageSelector` para incluir o novo idioma.

## 🐛 Troubleshooting

### Tradução não aparece
- Verifique se a chave existe no JSON
- Confirme que o idioma está correto
- Use `debug: true` para ver logs

### Idioma não muda
- Verifique o localStorage
- Limpe o cache do navegador
- Reinicie o servidor de desenvolvimento

### Erro de tipo TypeScript
```ts
// Use type assertion quando necessário
const items = t('key', { returnObjects: true }) as string[];
```

## 📚 Recursos

- [i18next Documentation](https://www.i18next.com/)
- [react-i18next Documentation](https://react.i18next.com/)
- [i18next Browser Language Detector](https://github.com/i18next/i18next-browser-languageDetector)

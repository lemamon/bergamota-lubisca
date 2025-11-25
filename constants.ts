

import { MenuData, Product } from './types';

export const EVENT_TITLE = "Sabores que Conectam";
export const EVENT_SUBTITLE = "UMA NOITE DE GASTRONOMIA AFETIVA";

export const EVENT_INTRO = [
  "Bergamota e Lubisca são amigas de longa data. Carregam memórias, viagens, risadas e descobertas, muitas delas feitas em volta de uma cozinha.",
  "Agora, elas transformam essa amizade em um evento único: uma noite de gastronomia nostálgica, afetiva e fermentada de histórias.",
  "A proposta é simples: trazer à mesa sabores que marcaram suas vidas, misturados com técnica, espontaneidade e um toque de ousadia. É comida para lembrar, sentir e descobrir.",
  "Você está convidado(a) para viver essa experiência."
];

export const EVENT_CLOSING = [
  "Este evento é mais do que um jantar: é um encontro entre a memória e o presente.",
  "Entre técnicas contemporâneas e receitas que abraçam.",
  "Entre duas chefes que cozinham com história, alma e amizade."
];

export const EVENT_CTA = "Prepare-se para viver uma noite pensada nos mínimos detalhes, da primeira mordida ao último gole.";

export const TEAM_MEMBERS_PAGE = [
  {
    name: "Lubisca",
    role: "Chef & Co-Fundadora",
    description: "A alma da fermentação. Traz a profundidade do tempo e o carinho da tradição para cada prato.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800",
    tapeColor: "bg-brand-pink/60",
    rotation: "rotate-2"
  },
  {
    name: "Bergamota",
    role: "Chef & Co-Fundadora",
    description: "A mente criativa. Mistura memórias de infância com técnicas modernas de forma surpreendente.",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=800",
    tapeColor: "bg-brand-orange/60",
    rotation: "-rotate-1"
  },
  {
    name: "Eduardo",
    role: "Head Bartender",
    description: "O alquimista dos drinks. Cria harmonizações líquidas que elevam a experiência gastronômica.",
    image: "https://images.unsplash.com/photo-1574966740793-27589d31135c?auto=format&fit=crop&q=80&w=800",
    tapeColor: "bg-brand-purple/60",
    rotation: "rotate-3"
  },
  {
    name: "Equipe de Apoio",
    role: "Serviço & Hospitalidade",
    description: "Sorrisos que acolhem. Nossa equipe de salão garante que você se sinta em casa.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800",
    tapeColor: "bg-brand-dark/40",
    rotation: "-rotate-2"
  },
  {
    name: "Produção Criativa",
    role: "Arte & Curadoria",
    description: "Os olhos por trás da estética. Cuidam da música, decoração e atmosfera visual.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    tapeColor: "bg-brand-purple/40",
    rotation: "rotate-1"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 5,
    name: 'Jantar - Experiência Completa',
    price: 320.00,
    displayPrice: 'R$ 320,00',
    description: 'Ingresso individual para a noite do evento. Menu degustação em 6 tempos + Welcome Drink exclusivo.',
    type: 'ticket',
    soldOut: false
  },
  {
    id: 1,
    name: 'Kimchi da Lubisca',
    price: 35.00,
    displayPrice: 'R$ 35,00',
    description: 'Fermentado de acelga com pimenta gochugaru artesanal. 30 dias de cura.',
    type: 'lubisca',
    soldOut: false
  },
  {
    id: 2,
    name: 'Geleia de Bergamota',
    price: 28.00,
    displayPrice: 'R$ 28,00',
    description: 'Com especiarias e raspas da casca. Perfeita para queijos curados.',
    type: 'bergamota',
    soldOut: false
  },
  {
    id: 3,
    name: 'Picles de Maxixe',
    price: 30.00,
    displayPrice: 'R$ 30,00',
    description: 'Crocante, ácido e com sementes de mostarda. O clássico da casa.',
    type: 'lubisca',
    soldOut: false
  },
  {
    id: 4,
    name: 'Avental Oficial',
    price: 120.00,
    displayPrice: 'R$ 120,00',
    description: 'Bordado à mão com o logo do evento. Linho misto cor crua.',
    type: 'merch',
    soldOut: true
  }
];

export const MENU_CONTENT: MenuData = [
  {
    title: 'SNACKS',
    items: [
      { 
        name: 'Snack da Lubisca',
        brand: 'lubisca',
        ingredients: [
          'Tortilha de baroa fermentada',
          '“Chilli” de coração',
          'Feijão fradinho (salada ou pasta)',
          'Coalhada',
          'Pico de galo fermentado'
        ]
      },
      { 
        name: 'Snack da Bergamota',
        brand: 'bergamota',
        ingredients: [
          'Pão de queijo frito',
          'Queijo foda',
          'Pernil',
          'Chutney de pimenta-de-cheiro',
          'Picles de maxixe',
          'Aioli de coentro'
        ]
      },
    ]
  },
  {
    title: 'ENTRADAS',
    items: [
      { 
        name: 'Entrada da Lubisca',
        brand: 'lubisca',
        ingredients: [
          'Guioza de frango com abóbora fermentada',
          'Molho lubisca',
          'Melaço',
          'Pimenta fermentada'
        ]
      },
      { 
        name: 'Entrada da Bergamota',
        brand: 'bergamota',
        ingredients: [
          'Creme de milho',
          'Cogumelos braseados com sumac',
          'Ovo perfeito',
          'Uva verde (fermentada ou em picles)'
        ]
      },
    ]
  },
  {
    title: 'PRINCIPAIS',
    items: [
      { 
        name: 'Principal da Bergamota',
        brand: 'bergamota',
        ingredients: [
          'Massa recheada e molho a definir'
        ]
      },
      { 
        name: 'Principal da Lubisca',
        brand: 'lubisca',
        ingredients: [
          'Arroz de marisco',
          'Copa lombo',
          'Glace de ostra com rapadura',
          'Picles de chuchu',
          'Cebola brûlée'
        ]
      }
    ]
  },
  {
    title: 'SOBREMESAS',
    items: [
      { 
        name: 'Sobremesa da Bergamota',
        brand: 'bergamota',
        ingredients: [
          'Brioche de milho',
          'Caramelo de doce de leite',
          'Chantilly de café'
        ]
      },
      { 
        name: 'Sobremesa da Lubisca',
        brand: 'lubisca',
        ingredients: [
          'Bolo de mandioca',
          'Sagu de bergamota fermentada',
          'Crumble de cravo e canela',
          'Sorvete de creme com cumaru'
        ]
      }
    ]
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Nosso Manifesto",
    subtitle: "Cozinha com Alma, Memória e Amizade",
    date: "12 MAI",
    category: "MANIFESTO",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=2400", // Mesa cheia/alegria
    excerpt: `Acreditamos que comida é mais do que sabor — é memória.
É aquele cheiro que te faz voltar no tempo.
É a risada que nasce natural quando a mesa está cheia.
É o encontro que vira história.

Bergamota & Lubisca nasce disso:
✨ Da vontade de cozinhar com alma
✨ De celebrar a amizade na sua forma mais pura
✨ De criar experiências que abraçam

Nossa cozinha é nostálgica, afetiva e experimental.
Sem pressa. Sem regras rígidas.
Só entrega, verdade e muito sabor.

Este é só o começo.`,
    color: "brand-purple"
  },
  {
    id: 2,
    title: "Prazer, nós somos Bergamota & Lubisca",
    subtitle: "Duas amigas, duas cozinheiras, uma paixão",
    date: "14 MAI",
    category: "QUEM SOMOS",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2400", // Mãos cozinhando/amizade
    excerpt: `Duas amigas, duas cozinheiras, duas histórias diferentes…
Mas uma paixão em comum: transformar momentos em sabor.

👩‍🍳 Lubisca
A força da tradição, das raízes, do tempero firme e cheio de personalidade.

👩‍🍳 Bergamota
A leveza da criatividade, do toque experimental e da alquimia culinária.

Juntas, somos o equilíbrio perfeito entre afeto e ousadia.
Entre passado e presente.
Entre aquilo que emociona e aquilo que surpreende.

E é essa mistura que estamos trazendo para vocês.
Com amor. Com verdade. Com memória.`,
    color: "brand-pink"
  },
  {
    id: 3,
    title: "Nosso Primeiro Evento",
    subtitle: "Salão de Festas do Condomínio Solaris",
    date: "15 MAI",
    category: "NOVIDADE",
    image: "https://images.unsplash.com/photo-1519671482538-518b5c2bf01c?auto=format&fit=crop&q=80&w=2400", // Ambiente de festa intimista
    excerpt: `É oficial!
O primeiro evento Bergamota & Lubisca está chegando — e ele será especial por muitos motivos.

📍 Local: Salão de Festas do Condomínio Solaris
📍 Endereço: Rua Laranjinhas, 750
📅 Data: em breve anunciaremos a data oficial!

Será o primeiro de muitos encontros gastronômicos que estamos criando.
Um evento experimental, intimista, feito para sentir:
✨ Música
✨ Comida afetiva
✨ Drinks autorais
✨ Uma vibe acolhedora, leve e inesquecível

As vagas serão limitadas — e você vai querer garantir a sua.

Mais detalhes muito em breve. 💫`,
    color: "brand-orange"
  },
  {
    id: 4,
    title: "Quem Faz Acontecer",
    subtitle: "Por trás de um evento cheio de alma",
    date: "16 MAI",
    category: "BASTIDORES",
    image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=2400", // Cozinha profissional/Equipe
    excerpt: `Por trás de um evento cheio de alma, existe uma equipe que coloca o coração em cada detalhe.
    
Somos uma equipe pequena, mas cheia de vontade e propósito.
E estamos preparando tudo com muito cuidado para que você sinta isso em cada segundo da noite.

Conheça quem está com a mão na massa (e nos copos):`,
    color: "brand-purple",
    teamMembers: [
      {
        name: "Lubisca",
        role: "Chef",
        description: "Criatividade que conforta. Técnica com afeto.",
        image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800" // Chef mulher sorrindo/cozinhando
      },
      {
        name: "Bergamota",
        role: "Chef",
        description: "Ousadia suave. Memória traduzida em sabor.",
        image: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?auto=format&fit=crop&q=80&w=800" // Chef mulher concentrada/criativa
      },
      {
        name: "Eduardo",
        role: "Bartender Convidado",
        description: "Especialista em criar experiências líquidas que contam histórias.",
        image: "https://images.unsplash.com/photo-1574966740793-27589d31135c?auto=format&fit=crop&q=80&w=800" // Bartender
      },
      {
        name: "Curadoria & Arte",
        role: "Produção",
        description: "Músicas que harmonizam e detalhes que tornam o evento inesquecível.",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800" // DJ/Mesa de som/Vinil
      }
    ]
  },
  {
    id: 5,
    title: "Nosso Bartender Convidado",
    subtitle: "Drinks autorais com Eduardo",
    date: "17 MAI",
    category: "PARCERIA",
    image: "https://images.unsplash.com/photo-1536935338788-84327507d421?auto=format&fit=crop&q=80&w=2400", // Bartender/Drinks
    excerpt: `Apresentamos Eduardo, nosso bartender convidado para o primeiro evento Bergamota & Lubisca.

Ele chega trazendo:
🔥 Drinks autorais
🔥 Técnicas modernas
🔥 Sabores que conversam com o nosso menu
🔥 Uma energia única atrás do balcão

Eduardo faz parte da alma dessa experiência.
Prepare-se para harmonizações que vão surpreender — no paladar e na memória.`,
    color: "brand-orange"
  },
  {
    id: 6,
    title: "Cozinha Experimental",
    subtitle: "Nosso Jeito de Criar",
    date: "18 MAI",
    category: "CONCEITO",
    image: "https://images.unsplash.com/photo-1620917669809-192083369a8e?auto=format&fit=crop&q=80&w=2400", // Textura de comida/Experimental
    excerpt: `Nosso projeto nasceu da vontade de ir além do óbvio.
De experimentar sabores, histórias e encontros.

Somos uma cozinha experimental, e isso significa:
✨ Menus exclusivos a cada evento
✨ Harmonia entre música + bebida + comida
✨ Espaços diferentes, cada um com sua energia
✨ Curadoria afetiva de ingredientes e emoções

Vamos cozinhar em novos lugares, criar novos formatos, trazer novos convidados.
E queremos que você faça parte dessa jornada.`,
    color: "brand-pink"
  },
  {
    id: 7,
    title: "Quanto Vai Custar?",
    subtitle: "Vagas limitadas e experiência completa",
    date: "19 MAI",
    category: "INFO",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=2400", // Menu/Papel/Ingresso
    excerpt: `Recebemos muitas perguntas sobre valores — e sim, já podemos adiantar algumas coisas:

💵 O evento terá ingressos com preço único
🎟️ Será um menu harmonizado completo
🍸 Drink + 🍽️ Comida + 🎶 Música = experiência

E o mais importante:
⚠️ As vagas serão extremamente limitadas.
Queremos manter o clima íntimo e acolhedor.

Os detalhes finais de valor + compra do ingresso serão anunciados em breve.
Fique atento — porque vai esgotar rápido.`,
    color: "brand-purple"
  }
];

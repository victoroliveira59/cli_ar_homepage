export interface FaqItem {
  question: string;
  answer: string;
}

export interface RegionArea {
  name: string;
  highlight: string;
  neighborhoods: string[];
  serviceLinks: { label: string; url: string }[];
}

export const FAQS_DATA: FaqItem[] = [
  {
    question: 'Qual é o prazo de garantia dos serviços executados pela Alves Refrigeração?',
    answer: 'Todos os nossos serviços de instalação, conserto e manutenção de ar-condicionado, geladeiras, freezers, chopeiras e bebedouros contam com garantia formal de 90 dias (3 meses) na mão de obra e nas peças substituídas, com emissão de recibo e ordem de serviço.'
  },
  {
    question: 'Vocês realizam atendimento no mesmo dia em caso de emergência?',
    answer: 'Sim! Em casos urgentes — como geladeira que parou de gelar gerando risco de perda de alimentos ou falha em câmaras e chopeiras comerciais — priorizamos o envio do técnico no mesmo dia para toda a região de Nova Lima.'
  },
  {
    question: 'Quais marcas de ar-condicionado e geladeiras são atendidas?',
    answer: 'Trabalhamos com os principais fabricantes mundiais: Daikin, LG, Samsung, Midea, Springer Carrier, Fujitsu, Gree, Electrolux, Brastemp, Consul, Panasonic, Metalfrio e Gelopar. Nossos técnicos são capacitados tanto em modelos convencionais quanto na tecnologia Inverter.'
  },
  {
    question: 'Como funciona o processo de visita técnica e orçamento?',
    answer: 'O atendimento inicia via WhatsApp ou ligação direta, onde compreendemos os sintomas da falha. Agendamos a visita no seu endereço, onde o técnico realiza testes operacionais e elétricos, explicando o reparo necessário e informando o preço exato antes de executar qualquer intervenção.'
  },
  {
    question: 'Quais regiões e condomínios de Nova Lima vocês atendem?',
    answer: 'Atendemos 100% do município de Nova Lima: condomínios como Alphaville Lagoa dos Ingleses, Vila Castela, Retiro do Chalé, Pasárgada e Quinta do Sol, além de bairros como Vila da Serra, Vale do Sereno, Jardim da Torre, Centro, Cabeceiras e Honório Bicalho.'
  },
  {
    question: 'Vocês realizam manutenção de equipamentos comerciais para restaurantes e escritórios?',
    answer: 'Sim! Prestamos serviços corporativos e comerciais para bares, cervejarias, clínicas, escritórios e escolas, englobando conserto de chopeiras elétricas, higienização periódica de ar-condicionado e manutenção de bebedouros industriais.'
  }
];

export const REGIONS_DATA: RegionArea[] = [
  {
    name: 'Nova Lima / MG (Sede e Atendimento Imediato)',
    highlight: 'Base operacional com técnicos locais e atendimento rápido em até poucas horas.',
    neighborhoods: [
      'Vila da Serra',
      'Vale do Sereno',
      'Alphaville Lagoa dos Ingleses',
      'Vila Castela',
      'Centro',
      'Jardim da Torre',
      'Retiro do Chalé',
      'Honório Bicalho',
      'Cabeceiras',
      'Cascalho'
    ],
    serviceLinks: [
      { label: 'Instalação de Ar em Nova Lima', url: '/servicos/instalacao-ar-condicionado' },
      { label: 'Manutenção de Ar em Nova Lima', url: '/servicos/manutencao-ar-condicionado' },
      { label: 'Conserto de Geladeiras em Nova Lima', url: '/servicos/conserto-geladeira-freezer' }
    ]
  },
  {
    name: 'Belo Horizonte (Zona Sul e Bairros Contíguos)',
    highlight: 'Atendimento contínuo em bairros da divisa e Zona Sul da capital mineira.',
    neighborhoods: [
      'Belvedere',
      'Mangabeiras',
      'Sion',
      'Savassi',
      'Funcionários',
      'Anchieta',
      'Cruzeiro',
      'São Bento'
    ],
    serviceLinks: [
      { label: 'Assistência Técnica de Ar-Condicionado BH', url: '/servicos/manutencao-ar-condicionado' },
      { label: 'Conserto de Freezers e Geladeiras BH', url: '/servicos/conserto-geladeira-freezer' }
    ]
  },
  {
    name: 'Raposos e Rio Acima (Microrregião Limítrofe)',
    highlight: 'Deslocamento direto para residências, sítios e comércios da microrregião.',
    neighborhoods: [
      'Centro de Raposos',
      'Vila Bela',
      'Centro de Rio Acima',
      'Jardim Sorriso',
      'Áreas rurais e condomínios próximos'
    ],
    serviceLinks: [
      { label: 'Instalação de Ar-Condicionado na Região', url: '/servicos/instalacao-ar-condicionado' },
      { label: 'Conserto de Geladeiras e Freezers', url: '/servicos/conserto-geladeira-freezer' }
    ]
  },
  {
    name: 'Betim e Contagem (Atendimento Comercial e Agendado)',
    highlight: 'Atendimento corporativo agendado para climatização e refrigeração comercial.',
    neighborhoods: [
      'Distrito Industrial de Contagem',
      'Eldorado',
      'Cidade Industrial',
      'Centro de Betim'
    ],
    serviceLinks: [
      { label: 'Manutenção de Chopeiras e Bebedouros', url: '/servicos/chopeiras-bebedouros' },
      { label: 'Climatização Comercial', url: '/servicos/manutencao-ar-condicionado' }
    ]
  }
];

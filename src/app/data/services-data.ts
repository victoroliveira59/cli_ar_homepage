import { BUSINESS_INFO } from '../core/business-info';

export interface ServiceProcessStep {
  number: number;
  title: string;
  description: string;
}

export interface ServiceDetail {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  subtitle: string;
  technicalDescription: string[];
  differentials: string[];
  processSteps: ServiceProcessStep[];
  brands: string[];
  whatsappMessage: string;
  schemaType: string;
}

export const SERVICES_DATA: Record<string, ServiceDetail> = {
  'instalacao-ar-condicionado': {
    slug: 'instalacao-ar-condicionado',
    name: 'Instalação de Ar-Condicionado em Nova Lima',
    shortName: 'Instalação de Ar-Condicionado',
    title: 'Instalação de Ar-Condicionado em Nova Lima | Orçamento',
    description: 'Instalação de ar-condicionado split, multi-split e inverter em Nova Lima. Serviço técnico com tubulação, vácuo na linha e garantia de 90 dias.',
    h1: 'Instalação de Ar-Condicionado em Nova Lima',
    subtitle: 'Instalação profissional conforme especificações de fábrica para garantir máxima eficiência energética e vida útil do seu equipamento.',
    technicalDescription: [
      'Realizamos a instalação completa de equipamentos de ar-condicionado split hi-wall, multi-split, cassete e piso-teto para residências, condomínios e comércios em Nova Lima e região.',
      'Nossos procedimentos seguem rigorosamente as normas técnicas dos fabricantes: utilizamos tubulação de cobre de espessura adequada, isolamento térmico individualizado, suporte antivibratório e processo obrigatório de vácuo no sistema com vacuômetro digital antes da liberação do fluido refrigerante.',
      'Garantimos a integridade da garantia original do seu aparelho, realizando testes de pressão com nitrogênio para checagem de estanqueidade e medição de corrente elétrica e superaquecimento.'
    ],
    differentials: [
      'Garantia formal de 90 dias em toda a mão de obra',
      'Processo de vácuo rigoroso para proteção do compressor',
      'Tubulação 100% de cobre de alta durabilidade',
      'Atendimento pontual em residências e condomínios de Nova Lima',
      'Orçamento transparente e sem compromisso'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Avaliação e Dimensionamento',
        description: 'Análise técnica da capacidade térmica (BTUs) necessária para o ambiente e definição da rota da tubulação.'
      },
      {
        number: 2,
        title: 'Fixação das Unidades',
        description: 'Instalação segura da evaporadora interna e da condensadora externa em suportes apropriados.'
      },
      {
        number: 3,
        title: 'Interligação e Desidratação',
        description: 'Conexão das linhas frigorígenas, teste de estanqueidade e processo de vácuo profundo.'
      },
      {
        number: 4,
        title: 'Liberação e Testes Finais',
        description: 'Liberação do gás refrigerante, medição de pressão, verificação do dreno e teste de temperatura.'
      }
    ],
    brands: ['Daikin', 'LG', 'Samsung', 'Midea', 'Springer', 'Carrier', 'Fujitsu', 'Gree', 'Elgin', 'Hitachi'],
    whatsappMessage: 'Olá! Gostaria de um orçamento para instalação de ar-condicionado em Nova Lima.',
    schemaType: 'HVACService'
  },

  'manutencao-ar-condicionado': {
    slug: 'manutencao-ar-condicionado',
    name: 'Manutenção e Higienização de Ar-Condicionado em Nova Lima',
    shortName: 'Manutenção de Ar-Condicionado',
    title: 'Manutenção de Ar-Condicionado em Nova Lima | Limpeza e Gás',
    description: 'Manutenção preventiva, conserto, recarga de gás e higienização bactericida de ar-condicionado em Nova Lima. Atendimento ágil e garantia de 90 dias.',
    h1: 'Manutenção e Higienização de Ar-Condicionado em Nova Lima',
    subtitle: 'Prevenção de falhas, eliminação de odores e fungos, recarga de gás refrigerante e reparo de placas e compressores.',
    technicalDescription: [
      'Oferecemos assistência completa para equipamentos de climatização que apresentam baixo rendimento, ruídos anormais, pinga-pinga interno ou erro de comunicação nas placas eletrônicas.',
      'A higienização bactericida profunda elimina ácaros, bactérias e biofilme acumulado nas serpentinas e bandejas de condensado, restabelecendo a qualidade do ar respirado e reduzindo o consumo de energia elétrica.',
      'Executamos diagnóstico de vazamentos com fluidos detectores e recarga precisa com gases refrigerantes R-410A, R-32 e R-22 utilizando balança de precisão.'
    ],
    differentials: [
      'Higienização bactericida com produtos biodegradáveis homologados',
      'Recarga de gás com balança de precisão conforme especificação da placa',
      'Diagnóstico eletrônico em aparelhos com tecnologia Inverter',
      'Garantia de 90 dias em serviços e peças substituídas',
      'Planos de manutenção preventiva para escritórios e comércios'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Inspeção Operacional',
        description: 'Aferição de temperaturas de insuflamento e retorno, corrente do compressor e níveis de pressão.'
      },
      {
        number: 2,
        title: 'Desmontagem e Limpeza Técnica',
        description: 'Lavagem com pressurizador de serpentinas, turbina, filtros e bandeja de drenagem.'
      },
      {
        number: 3,
        title: 'Higienização Química',
        description: 'Aplicação de sanitizante bactericida e fungicida para proteção prolongada.'
      },
      {
        number: 4,
        title: 'Ajuste de Carga e Liberação',
        description: 'Verificação da carga de refrigerante, reaperto de conexões elétricas e entrega técnica.'
      }
    ],
    brands: ['LG', 'Samsung', 'Daikin', 'Midea', 'Springer Carrier', 'Fujitsu', 'Consul', 'Electrolux', 'Philco'],
    whatsappMessage: 'Olá! Preciso de manutenção ou higienização de ar-condicionado em Nova Lima.',
    schemaType: 'HVACService'
  },

  'conserto-geladeira-freezer': {
    slug: 'conserto-geladeira-freezer',
    name: 'Conserto de Geladeiras e Freezers em Nova Lima',
    shortName: 'Conserto de Geladeiras e Freezers',
    title: 'Conserto de Geladeira em Nova Lima | Reparo Rápido',
    description: 'Conserto de geladeiras frost-free e freezers em Nova Lima. Diagnóstico preciso, troca de compressor, recarga de gás e garantia de 90 dias.',
    h1: 'Conserto e Manutenção de Geladeiras e Freezers em Nova Lima',
    subtitle: 'Atendimento ágil para refrigeradores domésticos e industriais. Solucionamos problemas de degelo, vazamento de gás e motor.',
    technicalDescription: [
      'Atendemos emergências residenciais e comerciais para refrigeradores frost-free, side-by-side, duplex, freezers verticais e horizontais em Nova Lima e região.',
      'Identificamos e corrigimos falhas como geladeira que parou de gelar na parte de baixo, formação excessiva de gelo, motor que não liga ou que desarma rapidamente, além de alarmes sonoros e vazamentos de água.',
      'Trabalhamos com reposição de compressores de alta eficiência (incluindo tecnologia Inverter Linear), sensores de temperatura, resistências de degelo, placas eletrônicas e termostatos originais.'
    ],
    differentials: [
      'Atendimento no mesmo dia para evitar perda de alimentos',
      'Técnicos especializados em tecnologia Inverter e Frost-Free',
      'Peças de reposição originais e de primeira linha',
      'Garantia de 90 dias em peças e mão de obra',
      'Diagnóstico honesto e preço justo informado antes da execução'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Diagnóstico no Local',
        description: 'Inspeção do compressor, ciclo de refrigeração, sensores e placas controladoras.'
      },
      {
        number: 2,
        title: 'Apresentação do Orçamento',
        description: 'Explicação detalhada do defeito encontrado e do reparo recomendado sem surpresas.'
      },
      {
        number: 3,
        title: 'Reparo e Substituição',
        description: 'Execução do serviço com solda oxiacetilênica, vácuo e substituição de componentes danificados.'
      },
      {
        number: 4,
        title: 'Monitoramento Térmico',
        description: 'Verificação do ciclo de degelo, vedação das gaxetas e queda uniforme de temperatura.'
      }
    ],
    brands: ['Brastemp', 'Consul', 'Electrolux', 'Samsung', 'LG', 'Panasonic', 'Metalfrio', 'Gelopar', 'Esmaltec'],
    whatsappMessage: 'Olá! Minha geladeira/freezer está com defeito e preciso de conserto em Nova Lima.',
    schemaType: 'HomeAndConstructionBusiness'
  },

  'chopeiras-bebedouros': {
    slug: 'chopeiras-bebedouros',
    name: 'Assistência em Chopeiras e Bebedouros em Nova Lima',
    shortName: 'Chopeiras e Bebedouros',
    title: 'Manutenção de Chopeiras e Bebedouros em Nova Lima | Reparo',
    description: 'Manutenção de chopeiras comerciais e bebedouros em Nova Lima e região. Troca de filtros, reparo de compressor e regulagem térmica com garantia.',
    h1: 'Assistência em Chopeiras e Bebedouros em Nova Lima',
    subtitle: 'Manutenção preventiva e corretiva para chopeiras residenciais e comerciais, bebedouros de pressão e refrigeradores de água industriais.',
    technicalDescription: [
      'Prestamos suporte técnico especializado para bares, restaurantes, cervejarias artesanais, escritórios e residências gourmet em Nova Lima e região.',
      'Realizamos o conserto de chopeiras a gelo e elétricas (expansão direta e banco de gelo), reparo no circuito frigorífico, ajuste de pressão de extração e desobstrução de serpentinas.',
      'Para bebedouros industriais e comerciais, executamos troca de elementos filtrantes de carvão ativado, higienização dos reservatórios de água, substituição de torneiras e termostatos.'
    ],
    differentials: [
      'Atendimento prioritário para bares, restaurantes e eventos',
      'Calibração precisa da temperatura ideal de serviço',
      'Sanitização química com produtos próprios para a indústria alimentícia',
      'Peças compatíveis com as principais marcas do mercado',
      'Garantia de 90 dias em todos os serviços realizados'
    ],
    processSteps: [
      {
        number: 1,
        title: 'Inspeção do Sistema',
        description: 'Verificação da pressão do gás de refrigeração, vazamentos na linha de chopp/água e ruídos mecânicos.'
      },
      {
        number: 2,
        title: 'Manutenção Mecânica e Elétrica',
        description: 'Substituição de termostatos, motobombas agitadoras, compressores ou relés térmicos.'
      },
      {
        number: 3,
        title: 'Higienização Sanitária',
        description: 'Sanitização profunda das serpentinas, reservatório térmico e linhas condutoras.'
      },
      {
        number: 4,
        title: 'Calibração e Teste Prático',
        description: 'Aferição com termômetro calibrado e teste de vazão e extração de bebida.'
      }
    ],
    brands: ['Memo', 'Carmona', 'IBBL', 'Begel', 'Libell', 'Masterfrio', 'Canovari', 'Cozil'],
    whatsappMessage: 'Olá! Preciso de assistência técnica para chopeira ou bebedouro em Nova Lima.',
    schemaType: 'HomeAndConstructionBusiness'
  }
};

export const SERVICES_LIST: ServiceDetail[] = Object.values(SERVICES_DATA);

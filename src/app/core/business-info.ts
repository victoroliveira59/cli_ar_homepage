export interface BusinessAddress {
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface BusinessOpeningHours {
  days: string[];
  opens: string;
  closes: string;
}

export interface BusinessInfo {
  legalName: string;
  tradeName: string;
  cnpj: string;
  telephone: string;
  formattedPhone: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  domain: string;
  address: BusinessAddress;
  geo: GeoCoordinates;
  openingHours: BusinessOpeningHours[];
  servedAreas: string[];
}

export const BUSINESS_INFO: BusinessInfo = {
  legalName: 'Alves Refrigeração - Assistência Técnica Especializada',
  tradeName: 'Alves Refrigeração',
  cnpj: '62.273.642/0001-11',
  telephone: '+55-31-99285-5049',
  formattedPhone: '(31) 99285-5049',
  whatsapp: '+5531992855049',
  whatsappUrl: 'https://wa.me/5531992855049',
  email: 'alvesrefrigeracaomg@gmail.com',
  domain: 'https://alvesrefrigeracao.com.br',
  address: {
    streetAddress: 'Rua Professora Anésia de Matos Guimarães, 80 B',
    addressLocality: 'Nova Lima',
    addressRegion: 'MG',
    postalCode: '34002-184',
    addressCountry: 'BR'
  },
  geo: {
    latitude: -19.996019,
    longitude: -43.854111
  },
  openingHours: [
    {
      days: ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta'],
      opens: '08:00',
      closes: '18:00'
    }
  ],
  servedAreas: [
    'Nova Lima',
    'Raposos',
    'Rio Acima',
    'Belo Horizonte',
    'Betim',
    'Contagem'
  ]
};

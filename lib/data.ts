// ============================================================
// TUSA México - Static Data
// All content centralized here for easy maintenance
// ============================================================

// --- Navigation ---
export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Distribuidores', href: '#distribuidores' },
  { label: 'Comunidad Pro', href: '#pro' },
  { label: 'Contacto', href: '#contacto' },
];

// --- Hero ---
export const heroData = {
  videoSrc: '/videos/hero-hd.mp4',
  headline: 'FIND YOUR OCEAN',
  subheadline: 'Vive la inmersión total con la tecnología que los instructores de la Riviera Maya eligen.',
  ctaText: 'EXPLORAR CATÁLOGO',
  ctaHref: '#productos',
};

// --- Product Categories ---
export type ProductCategory =
  | 'all'
  | 'mascaras'
  | 'aletas'
  | 'compensadores'
  | 'reguladores'
  | 'accesorios';

export const productCategories: { key: ProductCategory; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'mascaras', label: 'Máscaras y Snorkels' },
  { key: 'aletas', label: 'Aletas' },
  { key: 'compensadores', label: 'Compensadores (BCJs)' },
  { key: 'reguladores', label: 'Reguladores e Instrumentos' },
  { key: 'accesorios', label: 'Accesorios y Cuidado' },
];

export type UsageFilter = 'all' | 'recreativo' | 'snorkel' | 'profesional';

export const usageFilters: { key: UsageFilter; label: string }[] = [
  { key: 'all', label: 'Todos' },
  { key: 'recreativo', label: 'Buceo Recreativo' },
  { key: 'snorkel', label: 'Snorkel en Playa' },
  { key: 'profesional', label: 'Buceo Profesional' },
];

export interface Product {
  id: number;
  name: string;
  model: string;
  category: ProductCategory;
  usage: UsageFilter[];
  technology: string;
  description: string;
  forWhom: string;
  imagePlaceholder: string; // color for placeholder
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Máscara Panorámica',
    model: 'M-1001',
    category: 'mascaras',
    usage: ['recreativo', 'profesional'],
    technology: 'Freedom Technology',
    description: 'Máscara de amplio campo visual con silicona cómoda y ajuste preciso.',
    forWhom: 'Para buzos que buscan comodidad y visibilidad en cada inmersión.',
    imagePlaceholder: '#00d4ff',
  },
  {
    id: 2,
    name: 'Visor Pro',
    model: 'M-1011',
    category: 'mascaras',
    usage: ['recreativo', 'profesional'],
    technology: 'Freedom Technology',
    description: 'Visor de bajo volumen con cristal claro y sellado seguro.',
    forWhom: 'Ideal para instructores y buzos experimentados.',
    imagePlaceholder: '#00bcd4',
  },
  {
    id: 3,
    name: 'Snorkel Seco',
    model: 'USP-250',
    category: 'mascaras',
    usage: ['snorkel'],
    technology: 'Dry Top',
    description: 'Snorkel con válvula seca para respirar sin agua en la parte superior.',
    forWhom: 'Perfecto para principiantes y snorkel en playa.',
    imagePlaceholder: '#4dd0e1',
  },
  {
    id: 4,
    name: 'Aletas Jet',
    model: 'SF-0111',
    category: 'aletas',
    usage: ['recreativo', 'profesional'],
    technology: 'Bungee Strap',
    description: 'Aletas de empuje potente con correa bungee para ajuste rápido.',
    forWhom: 'Para buzos que necesitan potencia y velocidad bajo el agua.',
    imagePlaceholder: '#0088cc',
  },
  {
    id: 5,
    name: 'Aletas Travel',
    model: 'SF-0110',
    category: 'aletas',
    usage: ['recreativo'],
    technology: 'Three-Material Blade',
    description: 'Aletas versátiles y ligeras para viajes y buceo recreativo.',
    forWhom: 'Excelente para quien está comenzando en el buceo recreativo.',
    imagePlaceholder: '#0077aa',
  },
  {
    id: 6,
    name: 'Aletas Snorkel',
    model: 'SF-0500',
    category: 'aletas',
    usage: ['snorkel'],
    technology: 'Comfort Fit',
    description: 'Aletas de pie cerrado, cómodas y fáciles de usar en playa.',
    forWhom: 'Diseñadas para snorkel y natación casual.',
    imagePlaceholder: '#26c6da',
  },
  {
    id: 7,
    name: 'Chaleco BCD Pro',
    model: 'BC-0203',
    category: 'compensadores',
    usage: ['recreativo', 'profesional'],
    technology: 'A.P.L.S.',
    description: 'Chaleco compensador con ajuste seguro y bolsillos integrados.',
    forWhom: 'El favorito de instructores por su durabilidad y versatilidad.',
    imagePlaceholder: '#1c3a52',
  },
  {
    id: 8,
    name: 'Chaleco BCD Avanzado',
    model: 'BC-0401',
    category: 'compensadores',
    usage: ['profesional'],
    technology: 'Z-Core Harness',
    description: 'Chaleco tipo jacket con arnés cómodo y distribución de peso.',
    forWhom: 'Para buzos profesionales que exigen máximo control.',
    imagePlaceholder: '#2b4d66',
  },
  {
    id: 9,
    name: 'Regulador Balanceado',
    model: 'RS-1001',
    category: 'reguladores',
    usage: ['recreativo', 'profesional'],
    technology: 'Balanced Diaphragm',
    description: 'Regulador confiable con respiración suave y estable.',
    forWhom: 'Rendimiento confiable tanto en aguas cálidas como frías.',
    imagePlaceholder: '#455a64',
  },
  {
    id: 10,
    name: 'Computadora de Buceo',
    model: 'IQ-1204',
    category: 'reguladores',
    usage: ['recreativo', 'profesional'],
    technology: 'Solar Powered',
    description: 'Computadora de buceo con modo nitrox y registro de inmersiones.',
    forWhom: 'Para buzos que quieren tecnología de punta sin preocuparse por baterías.',
    imagePlaceholder: '#546e7a',
  },
  {
    id: 11,
    name: 'Bolsa de Equipo',
    model: 'BA-0105',
    category: 'accesorios',
    usage: ['recreativo', 'snorkel', 'profesional'],
    technology: '',
    description: 'Bolsa resistente para transportar y secar tu equipo.',
    forWhom: 'Accesorio esencial para cualquier buzo.',
    imagePlaceholder: '#607d8b',
  },
  {
    id: 12,
    name: 'Antiempañante',
    model: 'TA-0460',
    category: 'accesorios',
    usage: ['recreativo', 'snorkel', 'profesional'],
    technology: '',
    description: 'Solución antiempañante para mantener la visibilidad.',
    forWhom: 'Indispensable para mantener visibilidad perfecta.',
    imagePlaceholder: '#78909c',
  },
];

// --- Featured (New Products) ---
export const featuredProducts = [
  {
    id: 1,
    name: 'Visor Pro',
    model: 'M-1011',
    badge: 'NUEVO 2025',
    description: 'Freedom Technology con cristal de alta definición.',
    imagePlaceholder: '#00bcd4',
  },
  {
    id: 2,
    name: 'Chaleco BCD Pro',
    model: 'BC-0203',
    badge: 'NUEVO 2025',
    description: 'Compensador back-inflate con A.P.L.S.',
    imagePlaceholder: '#1c3a52',
  },
  {
    id: 3,
    name: 'Aletas Jet',
    model: 'SF-0111',
    badge: 'NUEVO 2025',
    description: 'Aletas con Bungee Strap de alto rendimiento.',
    imagePlaceholder: '#0088cc',
  },
];

// --- Dealers ---
export interface Dealer {
  id: number;
  name: string;
  city: string;
  state: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

export const dealers: Dealer[] = [
  {
    id: 1,
    name: 'Aqua World Cancún',
    city: 'Cancún',
    state: 'Quintana Roo',
    address: 'Blvd. Kukulcán Km 15.2, Zona Hotelera',
    phone: '+52 998 848 8300',
    lat: 21.0892,
    lng: -86.7672,
  },
  {
    id: 2,
    name: 'Dive House Playa',
    city: 'Playa del Carmen',
    state: 'Quintana Roo',
    address: 'Av. 10 entre Calle 12 y 14',
    phone: '+52 984 803 3535',
    lat: 20.6296,
    lng: -87.0739,
  },
  {
    id: 3,
    name: 'Cozumel Diving Center',
    city: 'Cozumel',
    state: 'Quintana Roo',
    address: 'Av. Rafael E. Melgar #45',
    phone: '+52 987 872 4567',
    lat: 20.5104,
    lng: -86.9466,
  },
  {
    id: 4,
    name: 'Buceo Total CDMX',
    city: 'Ciudad de México',
    state: 'CDMX',
    address: 'Av. Insurgentes Sur 1235, Col. Del Valle',
    phone: '+52 55 5524 1234',
    lat: 19.3815,
    lng: -99.1707,
  },
  {
    id: 5,
    name: 'La Paz Diving',
    city: 'La Paz',
    state: 'Baja California Sur',
    address: 'Malecón Álvaro Obregón #120',
    phone: '+52 612 122 7890',
    lat: 24.1426,
    lng: -110.3128,
  },
  {
    id: 6,
    name: 'Dive Center Cabo',
    city: 'Cabo San Lucas',
    state: 'Baja California Sur',
    address: 'Marina Cabo San Lucas, Local 12',
    phone: '+52 624 143 5678',
    lat: 22.8905,
    lng: -109.9167,
  },
];

export const dealerStates = [...new Set(dealers.map((d) => d.state))];

// --- Pro Community ---
export const proBenefits = [
  {
    icon: 'discount',
    title: 'Precios Preferenciales',
    description: 'Accede a precios especiales exclusivos para instructores certificados y centros de buceo.',
  },
  {
    icon: 'support',
    title: 'Soporte Técnico Prioritario',
    description: 'Línea directa con nuestro equipo técnico para resolver cualquier duda sobre equipamiento.',
  },
  {
    icon: 'demo',
    title: 'Equipos de Demo',
    description: 'Solicita equipo de demostración para que tus alumnos prueben la calidad TUSA.',
  },
  {
    icon: 'training',
    title: 'Capacitación Exclusiva',
    description: 'Webinars y talleres sobre tecnología TUSA, Freedom Technology y mantenimiento de equipo.',
  },
];

// --- Contact / Support ---
export const offices = [
  {
    region: 'Centro-Norte',
    address: 'Guillermo Prieto No. 90-2, Zona Central',
    city: 'La Paz, Baja California Sur, C.P: 23000',
    phones: ['+52.55.1474.5927', '+52.56.6050.6777'],
    email: 'ccastillo@tusalatina.com',
  },
  {
    region: 'Sur-Sureste',
    address: 'Carretera Federal Libre Cancún-Tulum No. 433, Col. Ejidal',
    city: 'Playa del Carmen, Q. Roo, 77710',
    phones: ['+52.984.873.1326', '+52.984.147.6151'],
    email: 'info.playa@tusalatina.com',
  },
];

export const socialLinks = [
  { platform: 'facebook', url: 'https://facebook.com/tusalatina', label: 'Facebook' },
  { platform: 'instagram', url: 'https://instagram.com/tusalatina', label: 'Instagram' },
  { platform: 'pinterest', url: 'https://pinterest.com/tusalatina', label: 'Pinterest' },
  { platform: 'youtube', url: 'https://youtube.com/tusalatina', label: 'YouTube' },
];

export const whatsappNumber = '5219841476151';
export const whatsappMessage = 'Hola, me interesa conocer más sobre el equipo TUSA.';

// --- Footer ---
export const footerMenuLinks = [
  { label: 'Tecnología', href: '#tecnologia' },
  { label: 'Productos', href: '#productos' },
  { label: 'Distribuidores', href: '#distribuidores' },
  { label: 'Comunidad Pro', href: '#pro' },
  { label: 'Soporte', href: '#soporte' },
  { label: 'Contacto', href: '#contacto' },
];

export const partnerBrands = [
  'TUSA Sport',
  'Waterproof',
  'Sea & Sea',
  'View',
  'Light & Motion',
];

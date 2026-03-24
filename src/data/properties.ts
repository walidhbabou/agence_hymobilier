export interface Property {
  id: number;
  title: string;
  quartier: string;
  type: string;
  surface: number;
  chambres: number;
  prix: string;
  prixValue: number;
  transaction: 'location' | 'vente' | 'courte-duree';
  transactionLabel: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Appartement standing avec terrasse",
    quartier: "Agdal",
    type: "Appartement",
    surface: 120,
    chambres: 3,
    prix: "8 500 DH/mois",
    prixValue: 8500,
    transaction: "location",
    transactionLabel: "À louer",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    description: "Magnifique appartement de standing dans une résidence sécurisée au cœur d'Agdal."
  },
  {
    id: 2,
    title: "Studio meublé moderne",
    quartier: "Agdal",
    type: "Studio",
    surface: 45,
    chambres: 1,
    prix: "800 DH/nuit",
    prixValue: 800,
    transaction: "courte-duree",
    transactionLabel: "Courte durée",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80",
    description: "Studio entièrement meublé et équipé, idéal pour les séjours professionnels ou touristiques."
  },
  {
    id: 3,
    title: "Appartement familial lumineux",
    quartier: "Aviation",
    type: "Appartement",
    surface: 150,
    chambres: 4,
    prix: "1 450 000 DH",
    prixValue: 1450000,
    transaction: "vente",
    transactionLabel: "À vendre",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Grand appartement familial avec vue dégagée dans le quartier prisé d'Aviation."
  },
  {
    id: 4,
    title: "Villa contemporaine avec jardin",
    quartier: "Souissi",
    type: "Villa",
    surface: 300,
    chambres: 5,
    prix: "3 800 000 DH",
    prixValue: 3800000,
    transaction: "vente",
    transactionLabel: "À vendre",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
    description: "Superbe villa contemporaine avec piscine et jardin paysager à Souissi."
  },
  {
    id: 5,
    title: "Bureau équipé centre-ville",
    quartier: "Agdal",
    type: "Bureau",
    surface: 80,
    chambres: 0,
    prix: "6 000 DH/mois",
    prixValue: 6000,
    transaction: "location",
    transactionLabel: "À louer",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    description: "Espace bureau moderne et lumineux, parfaitement situé sur l'avenue principale d'Agdal."
  },
  {
    id: 6,
    title: "Appartement rénové avec parking",
    quartier: "Hay Riad",
    type: "Appartement",
    surface: 100,
    chambres: 2,
    prix: "7 200 DH/mois",
    prixValue: 7200,
    transaction: "location",
    transactionLabel: "À louer",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    description: "Appartement entièrement rénové avec place de parking privée à Hay Riad."
  },
  {
    id: 7,
    title: "Duplex luxueux avec vue",
    quartier: "Agdal",
    type: "Appartement",
    surface: 200,
    chambres: 4,
    prix: "2 200 000 DH",
    prixValue: 2200000,
    transaction: "vente",
    transactionLabel: "À vendre",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
    description: "Duplex d'exception au dernier étage avec terrasse panoramique et finitions premium."
  },
  {
    id: 8,
    title: "Appartement meublé courte durée",
    quartier: "Centre-ville",
    type: "Appartement",
    surface: 70,
    chambres: 2,
    prix: "1 200 DH/nuit",
    prixValue: 1200,
    transaction: "courte-duree",
    transactionLabel: "Courte durée",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    description: "Appartement haut standing, meublé avec goût, parfait pour un séjour confortable à Rabat."
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Amina Benali",
    role: "Locataire à Agdal",
    content: "Grâce à KARYNTON, j'ai trouvé mon appartement idéal à Agdal en moins d'une semaine. L'équipe est réactive, professionnelle et à l'écoute. Je recommande vivement !",
    rating: 5,
    avatar: "AB"
  },
  {
    id: 2,
    name: "Youssef El Mansouri",
    role: "Voyageur d'affaires",
    content: "J'utilise régulièrement les studios courte durée de KARYNTON lors de mes déplacements à Rabat. Propreté impeccable, emplacement parfait et un service client irréprochable.",
    rating: 5,
    avatar: "YM"
  },
  {
    id: 3,
    name: "Fatima & Rachid Alaoui",
    role: "Acquéreurs à Aviation",
    content: "Nous avons acheté notre appartement familial à Aviation grâce à KARYNTON. Ils nous ont accompagnés de A à Z avec transparence et professionnalisme. Merci infiniment !",
    rating: 5,
    avatar: "FA"
  }
];

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
    label: "Salon moderne",
    span: "col-span-2 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
    label: "Chambre élégante",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    label: "Cuisine équipée",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600566753376-12c8ab7c5a38?w=800&q=80",
    label: "Terrasse avec vue",
    span: "col-span-1 row-span-2"
  },
  {
    src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800&q=80",
    label: "Façade résidentielle",
    span: "col-span-1 row-span-1"
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
    label: "Espace de vie premium",
    span: "col-span-1 row-span-1"
  },
];

export const quartiers = [
  "Tous les quartiers",
  "Agdal",
  "Aviation",
  "Hay Riad",
  "Souissi",
  "Centre-ville",
  "Hassan",
  "Océan",
];

export const typeBiens = [
  "Tous les types",
  "Appartement",
  "Studio",
  "Villa",
  "Bureau",
  "Maison",
];

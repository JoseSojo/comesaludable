import { faker } from '@faker-js/faker';
import { Menu, Comment, TopMenu, Restaurants } from '../interface/DataType';

export const menus: Menu[] = [
  {
    name: 'Mediterranean Bowl',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    createdAt: '2023-01-15',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Avocado Toast',
    price: 9.99,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    createdAt: '2023-02-03',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Protein Powerhouse',
    price: 13.99,
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg',
    createdAt: '2023-02-15',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Green Detox Smoothie',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
    createdAt: '2023-03-01',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Salmon Poke Bowl',
    price: 14.99,
    image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg',
    createdAt: '2023-03-10',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Vegan Caesar Salad',
    price: 11.99,
    image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg',
    createdAt: '2023-03-18',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Berry Breakfast Bowl',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    createdAt: '2023-04-05',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
  {
    name: 'Thai Chicken Wrap',
    price: 10.99,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    createdAt: '2023-04-12',
    about: ``,
    allergens: [],
    categoryReference: {id:``,name:``},
    forPeople:2,
    id: ``,
    ingredients: [],
    restauranteReference:{id:``,name:``},
    tags:[],
  },
];

export const comments: Comment[] = [
  {
    id: 3,
    menuId: 2,
    userName: 'Emma L.',
    text: 'Best avocado toast in town! The microgreens add such a nice touch.',
    rating: 5,
    isPositive: true,
    createdAt: '2023-04-15',
  },
  {
    id: 4,
    menuId: 3,
    userName: 'Jason K.',
    text: 'The chicken was dry and overcooked. Disappointing.',
    rating: 2,
    isPositive: false,
    createdAt: '2023-04-22',
  },
  {
    id: 5,
    menuId: 4,
    userName: 'Linda M.',
    text: 'Perfect post-workout drink! Love the protein boost.',
    rating: 5,
    isPositive: true,
    createdAt: '2023-04-10',
  },
  {
    id: 6,
    menuId: 5,
    userName: 'David W.',
    text: 'Fresh fish and great sauce. Could use a bit more avocado though.',
    rating: 4,
    isPositive: true,
    createdAt: '2023-04-21',
  },
  {
    id: 7,
    menuId: 6,
    userName: 'Rachel P.',
    text: 'As a vegan, I appreciate the effort but the dressing lacked flavor.',
    rating: 3,
    isPositive: false,
    createdAt: '2023-04-16',
  },
  {
    id: 8,
    menuId: 4,
    userName: 'Thomas B.',
    text: 'Way too sweet for my taste. Needs more greens and less banana.',
    rating: 2,
    isPositive: false,
    createdAt: '2023-04-18',
  },
];

export const topMenus: TopMenu[] = [
  {
    id: 1,
    name: 'Mediterranean Bowl',
    category: 'Bowls',
    views: 1245,
    sales: 352,
    rating: 4.8,
  },
  {
    id: 4,
    name: 'Green Detox Smoothie',
    category: 'Drinks',
    views: 1102,
    sales: 321,
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Avocado Toast',
    category: 'Breakfast',
    views: 986,
    sales: 278,
    rating: 4.6,
  },
  {
    id: 5,
    name: 'Salmon Poke Bowl',
    category: 'Bowls',
    views: 845,
    sales: 234,
    rating: 4.9,
  },
  {
    id: 7,
    name: 'Berry Breakfast Bowl',
    category: 'Breakfast',
    views: 721,
    sales: 187,
    rating: 4.5,
  },
];

export const getDailyViewsData = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return {
    labels: days,
    datasets: [
      {
        label: 'Daily Views',
        data: [423, 385, 489, 542, 631, 752, 698],
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
      },
    ],
  };
};

export const getMenuViewsComparisonData = () => {
  return {
    labels: menus.slice(0, 5).map(menu => menu.name),
    datasets: [
      {
        label: 'Views',
        data: menus.slice(0, 5).map(menu => menu.price),
        backgroundColor: [
          'rgba(34, 197, 94, 0.7)',
          'rgba(249, 115, 22, 0.7)',
          'rgba(59, 130, 246, 0.7)',
          'rgba(168, 85, 247, 0.7)',
          'rgba(236, 72, 153, 0.7)',
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const getCommentsAnalysisData = () => {
  const positiveComments = comments.filter(comment => comment.isPositive).length;
  const negativeComments = comments.filter(comment => !comment.isPositive).length;

  return {
    labels: ['Positive', 'Negative'],
    datasets: [
      {
        data: [positiveComments, negativeComments],
        backgroundColor: ['rgba(34, 197, 94, 0.7)', 'rgba(239, 68, 68, 0.7)'],
        borderWidth: 1,
      },
    ],
  };
};

export const getMenuConsumptionData = () => {
  return {
    labels: menus.map(menu => menu.name),
    datasets: [
      {
        label: 'Sales',
        data: menus.map(menu => menu.price),
        backgroundColor: 'rgba(249, 115, 22, 0.7)',
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 1,
      },
    ],
  };
};

export const getCurrentViewsData = () => {
  const hours = ['9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM'];

  return {
    labels: hours,
    datasets: [
      {
        label: 'Today\'s Views',
        data: [45, 68, 102, 132, 156, 124, 98, 86, 72],
        borderColor: 'rgba(34, 197, 94, 1)',
        backgroundColor: 'rgba(34, 197, 94, 0.1)',
        fill: true,
        tension: 0.4,
      },
    ],
  };
};

export const getCurrentAddress = (): Restaurants => {

  const locations = [
    [10.4806, -66.9036],   // Caracas
    [10.2333, -67.6000],   // Maracay
    [10.1801, -68.0039],   // Valencia
    [8.6226, -70.2075],    // Barinas
    [9.5553, -69.1956],    // Guanare (Guárico)
    [10.6586, -71.6370],   // Maracaibo
    [8.3404, -72.4397],    // San Cristóbal
    [10.2286, -67.4744],   // Los Teques
    [10.2138, -64.6338],   // Puerto La Cruz
    [8.1292, -63.5409]     // Ciudad Bolívar
  ];

  // Seleccionar una ubicación aleatoria del array
  const [latitud, longitud] = faker.helpers.arrayElement(locations);

  return {
    about: ``,
    access: ``,
    address: ``,
    createAt: new Date(),
    updateAt: new Date(),
    deleteAt: new Date(),
    environmentId: ``,
    environmentReference: {},
    horario: ``,
    id: ``,
    name: `Restaurant`,
    phone: ``,
    tag: [],
    typeId: ``,
    typeReference:{},
    locations: [
      { location: [latitud, longitud]
      }
    ],
    website: ``
  }
}

export const restaurants = [
  {
    id: '1',
    name: 'Verde & Sano',
    description: 'Cocina orgánica y sostenible con ingredientes locales de temporada',
    rating: 4.8,
    location: 'Zona Gourmet',
    cuisine: 'Orgánica',
    position: [10.2355, -67.5987] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
    ]
  },
  {
    id: '2',
    name: 'Equilibrio',
    description: 'Fusión de sabores mediterráneos con un toque moderno',
    rating: 4.6,
    location: 'Centro Ciudad',
    cuisine: 'Mediterránea',
    position: [10.2469, -67.5958] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
    ]
  },
  {
    id: '3',
    name: 'Nutrición Vital',
    description: 'Platos balanceados con proteínas magras y vegetales frescos',
    rating: 4.7,
    location: 'Distrito Financiero',
    cuisine: 'Fitness',
    position: [10.5068, -66.9146] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
    ]
  },
  {
    id: '4',
    name: 'Sabor Natural',
    description: 'Especialistas en bowls y ensaladas personalizadas',
    rating: 4.5,
    location: 'Plaza Central',
    cuisine: 'Bowl & Ensaladas',
    position: [10.4806, -66.9036] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
     
    ]
  },
  {
    id: '4',
    name: 'Sabor Natural',
    description: 'Especialistas en bowls y ensaladas personalizadas',
    rating: 4.5,
    location: 'Plaza Central',
    cuisine: 'Bowl & Ensaladas',
    position: [10.4236, -66.8516] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
     
    ]
  },
  {
    id: '4',
    name: 'Sabor Natural',
    description: 'Especialistas en bowls y ensaladas personalizadas',
    rating: 4.5,
    location: 'Plaza Central',
    cuisine: 'Bowl & Ensaladas',
    position: [10.2469, -67.5958] as [number, number],
    address: "Calle Principal 123, Madrid",
    phone: "+34 912 345 678",
    website: "www.lacasadelsabor.es",
    hours: "Lun-Dom: 12:00-23:00",
    coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    metrics: {
      monthlyVisits: 12500,
      avgRating: 4.8,
      totalReviews: 450,
      responseRate: "95%"
    },
    gallery: [
      
    ]
  }
];

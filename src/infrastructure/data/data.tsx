import { Menu, Comment, TopMenu } from '../interface/DataType';

export const menus: Menu[] = [
  {
    id: 1,
    name: 'Mediterranean Bowl',
    description: 'Fresh quinoa bowl with grilled vegetables, hummus, and olive oil dressing',
    price: 12.99,
    calories: 450,
    protein: 15,
    carbs: 65,
    fats: 12,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'Bowls',
    isPopular: true,
    views: 1245,
    sales: 352,
    rating: 4.8,
    createdAt: '2023-01-15',
  },
  {
    id: 2,
    name: 'Avocado Toast',
    description: 'Whole grain bread with mashed avocado, cherry tomatoes, and microgreens',
    price: 9.99,
    calories: 320,
    protein: 8,
    carbs: 42,
    fats: 16,
    image: 'https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg',
    category: 'Breakfast',
    isPopular: true,
    views: 986,
    sales: 278,
    rating: 4.6,
    createdAt: '2023-02-03',
  },
  {
    id: 3,
    name: 'Protein Powerhouse',
    description: 'Grilled chicken breast with sweet potatoes and steamed broccoli',
    price: 13.99,
    calories: 520,
    protein: 42,
    carbs: 48,
    fats: 8,
    image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg',
    category: 'Mains',
    isPopular: false,
    views: 756,
    sales: 198,
    rating: 4.5,
    createdAt: '2023-02-15',
  },
  {
    id: 4,
    name: 'Green Detox Smoothie',
    description: 'Spinach, banana, almond milk, chia seeds, and protein powder blend',
    price: 7.99,
    calories: 280,
    protein: 18,
    carbs: 34,
    fats: 6,
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
    category: 'Drinks',
    isPopular: true,
    views: 1102,
    sales: 321,
    rating: 4.7,
    createdAt: '2023-03-01',
  },
  {
    id: 5,
    name: 'Salmon Poke Bowl',
    description: 'Raw salmon cubes with rice, avocado, cucumber, and ponzu sauce',
    price: 14.99,
    calories: 480,
    protein: 28,
    carbs: 52,
    fats: 14,
    image: 'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg',
    category: 'Bowls',
    isPopular: true,
    views: 845,
    sales: 234,
    rating: 4.9,
    createdAt: '2023-03-10',
  },
  {
    id: 6,
    name: 'Vegan Caesar Salad',
    description: 'Romaine lettuce with plant-based chicken, dairy-free parmesan, and croutons',
    price: 11.99,
    calories: 380,
    protein: 12,
    carbs: 28,
    fats: 22,
    image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg',
    category: 'Salads',
    isPopular: false,
    views: 689,
    sales: 176,
    rating: 4.4,
    createdAt: '2023-03-18',
  },
  {
    id: 7,
    name: 'Berry Breakfast Bowl',
    description: 'Greek yogurt with mixed berries, granola, and honey',
    price: 8.99,
    calories: 340,
    protein: 16,
    carbs: 46,
    fats: 10,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg',
    category: 'Breakfast',
    isPopular: false,
    views: 721,
    sales: 187,
    rating: 4.5,
    createdAt: '2023-04-05',
  },
  {
    id: 8,
    name: 'Thai Chicken Wrap',
    description: 'Grilled chicken with peanut sauce, vegetables, and herbs in a whole wheat wrap',
    price: 10.99,
    calories: 420,
    protein: 24,
    carbs: 38,
    fats: 18,
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
    category: 'Wraps',
    isPopular: false,
    views: 634,
    sales: 156,
    rating: 4.3,
    createdAt: '2023-04-12',
  },
];

export const comments: Comment[] = [
  {
    id: 1,
    menuId: 1,
    userName: 'Sarah J.',
    text: 'The Mediterranean Bowl is amazing! So fresh and flavorful. Will definitely order again.',
    rating: 5,
    isPositive: true,
    createdAt: '2023-04-18',
  },
  {
    id: 2,
    menuId: 1,
    userName: 'Michael T.',
    text: 'Good balance of flavors but could use a bit more protein.',
    rating: 4,
    isPositive: true,
    createdAt: '2023-04-20',
  },
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
        data: menus.slice(0, 5).map(menu => menu.views),
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
        data: menus.map(menu => menu.sales),
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
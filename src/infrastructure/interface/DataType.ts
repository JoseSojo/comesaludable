export interface Menu {
  id: string;
  name: string;
  about: string;
  price: number;
  image: string;
  createdAt: string;
  categoryReference: { id: string, name: string },
  restauranteReference: { id: string, name: string },
  ingredients: string[];
  tags: string[];
  allergens: string[];
  forPeople: number;
}

export interface Comment {
  id: number;
  menuId: number;
  userName: string;
  text: string;
  rating: number;
  isPositive: boolean;
  createdAt: string;
}

export interface Stat {
  label: string;
  value: number | string;
  change?: number;
  icon?: React.ReactNode;
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface TopMenu {
  id: number;
  name: string;
  category: string;
  views: number;
  sales: number;
  rating: number;
}

export interface ReportParams {
  startDate: string;
  endDate: string;
  menuIds?: number[];
  categories?: string[];
  includeViews: boolean;
  includeSales: boolean;
  includeComments: boolean;
}

export interface Restaurants {
  id: string;
  access: string;

  name: string; 
  address: string; 
  phone: string; 
  website: string; 
  horario: string; 

  about: string;

  typeId: string;
  typeReference: any;

  environmentId: string;
  environmentReference: any


  tag: string[];

  // # LOCATIONS
  locations: { location: [number, number] }[];

  createAt: Date;
  updateAt: Date;
  deleteAt: Date;
}

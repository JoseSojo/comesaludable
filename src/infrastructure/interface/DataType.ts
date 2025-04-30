export interface Menu {
    id: number;
    name: string;
    description: string;
    price: number;
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    image: string;
    category: string;
    isPopular: boolean;
    views: number;
    sales: number;
    rating: number;
    createdAt: string;
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
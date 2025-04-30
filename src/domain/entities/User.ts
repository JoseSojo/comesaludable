export interface User {
  id: string;
  username: string;
  email: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  RESTAURANT = 'restaurant',
  CUSTOMER = 'customer'
}
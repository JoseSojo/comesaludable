export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://127.0.0.1:3500/api/v1',
    endpoints: {
      auth: {
        login: '/logging/singin',
        register: '/user/create',
        adminLogin: '/logging/administration',
        restaurantLogin: '/logging/restaurant',
        logout: '/logging/logout'
      },
      user: {
        create: `/user/create`,
        update: (id:string) => `/user/update/${id}`,
        updatePassword: (id:string) => `/user/update/password/${id}`,
        find: (id:string) => `/user/find/${id}`,
        paginate: `/user/paginate`,
        delete: (id:string) => `/user/delete/${id}`,
      },
      restaurants: {
        featured: '/restaurants/featured',
        menus: '/restaurants/menus',
        byId: (id: string) => `/restaurants/${id}`,
        menusByRestaurant: (id: string) => `/restaurants/${id}/menus`
      },
      nutritionists: {
        featured: '/nutritionists/featured',
        byId: (id: string) => `/nutritionists/${id}`,
        reviews: (id: string) => `/nutritionists/${id}/reviews`
      }
    }
  },
  validation: {
    password: {
      minLength: 8,
      maxLength: 50
    },
    restaurantCode: {
      length: 7
    }
  }
} as const;
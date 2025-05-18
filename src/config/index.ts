export const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'https://comesaludable-api.onrender.com/api/v1',
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
        update: (id: string) => `/user/update/${id}`,
        updatePassword: (id: string) => `/user/update/password/${id}`,
        find: (id: string) => `/user/find/${id}`,
        paginate: `/user/paginate`,
        delete: (id: string) => `/user/delete/${id}`,
      },
      menu: {
        create: `/menu/create`,
        update: (id: string) => `/menu/update/${id}`,
        updatePassword: (id: string) => `/menu/update/password/${id}`,
        find: (id: string) => `/menu/find/${id}`,
        paginate: `/menu/paginate`,
        delete: (id: string) => `/menu/delete/${id}`,
      },
      restaurant: {
        create: `/restaurant/create`,
        update: (id: string) => `/restaurant/update/${id}`,
        updatePassword: (id: string) => `/restaurant/update/password/${id}`,
        find: (id: string) => `/restaurant/find/${id}`,
        paginate: `/restaurant/paginate`,
        delete: (id: string) => `/restaurant/delete/${id}`,
      },
      core: {
        category: {
          create: `/category/create`,
          update: (id: string) => `/category/update/${id}`,
          updatePassword: (id: string) => `/category/update/password/${id}`,
          find: (id: string) => `/category/find/${id}`,
          paginate: `/category/paginate`,
          delete: (id: string) => `/category/delete/${id}`,
        },
        environment: {
          create: `/environment/create`,
          update: (id: string) => `/environment/update/${id}`,
          updatePassword: (id: string) => `/environment/update/password/${id}`,
          find: (id: string) => `/environment/find/${id}`,
          paginate: `/environment/paginate`,
          delete: (id: string) => `/environment/delete/${id}`,
        },
        type: {
          create: `/type/create`,
          update: (id:string) => `/type/update/${id}`,
          updatePassword: (id:string) => `/type/update/password/${id}`,
          find: (id:string) => `/type/find/${id}`,
          paginate: `/type/paginate`,
          delete: (id:string) => `/type/delete/${id}`,
        }
      },
      search: {
        type: `/search/type`,
        environment: `/search/environment`,
        category: `/search/category`,
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
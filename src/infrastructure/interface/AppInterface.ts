
enum TYPE_ANALYTIC {
    DAY,
    MONTH,
    YEAR
}

enum TYPE_COMMENT_VISIT {
    RESTAURANT,
    MENU
}

export interface CoreFiles {
    id: string;

    useIn: string;
    pathString: string;
    size: string;

    photo: Photos

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface User {
    id: string;

    age: string;
    name: string;
    lastname: string;
    email: string;
    password: string;

    admin: boolean;

    acceptEmail: string;

    // # REFERENCE FIELD
    visit: Visits
    comment: Comment
    //#

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
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
    typeReference: Type;

    environmentId: string;
    environmentReference: Environment;


    tag: any[]

    // # RELATIONS FIELDS
    menus: Menus;
    analytic: Analytic;
    visit: Visits;
    comment: Comment;
    // #

    // # LOCATIONS
    locations: Localtion;
    position: [number, number];

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Localtion {
    id: string;

    restaurantId: string;
    restaurantReference: Restaurants;

    location: any;

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Photos {
    id: string;

    photoIdL: string
    file: CoreFiles;

    about: string

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Analytic {
    id: string;

    restaurantId: string;
    restauranteReference: Restaurants;

    menuId: string;
    menueReference: Menus;

    type: TYPE_ANALYTIC
    entity: TYPE_COMMENT_VISIT

    comment: number;
    commentPositive: number;
    commentNegative: number;

    visit: number;

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Visits {
    id: string;

    restaurantId: string;
    restaurantReference: Restaurants;

    menuId: string;
    menueReference: Menus;

    userLogId: string;
    userLog: User;

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Comment {
    id: string;

    restaurantId: string;
    restaurantReference: Restaurants;

    menuId: string;
    menueReference: Menus;

    stars: number;
    comment: string;

    userLogId: string;
    userLogReference: User;

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Menus {
    id: string;

    name: string;
    price: number;
    about: string;
    allergens: string[];
    ingredients: string[];
    forPeople: number;
    preparation: string;
    tags: string[];

    restaurantId: string;
    restauranteReference: Restaurants;

    // # RELATIONS FIEDS
    analytic: Analytic;
    visit: Visits;
    comment: Comment;
    // #

    categoryId: string;
    categoryReference: Category;

    typeId: string;
    typeReference: Type;
    // #

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Category {
    id: string;

    named: string

    // # RELATIONS FIEDS
    menus: Menus
    // #

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Type {
    id: string;

    named: string;

    // # RELATIONS FIEDS
    menus: Menus;
    restaurant: Restaurants;
    // #

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

export interface Environment {
    id: string;

    named: string

    restaurant: Restaurants

    createAt: Date;
    updateAt: Date;
    deleteAt?: Date;
}

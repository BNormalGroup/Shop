export interface ICategoryItem {
    id?: number;
    name: string;
    slug: string;
    description: string;
    parent_id?: number;
}

export interface IBrandItem {
    id?: number;
    name: string;
    description: string;
}
export interface IItem {
    id?: number;
    name: string;
    description: string;
    price: number;
    brand_id?: number;
    category_id?: number;
    color: string;
    sex: string;
}

export interface IItemPost extends IItem {
    images: File[];
}

export interface IItemGet {
    product: IItem;
    images: IImage[];
}

export interface IImage {
    id: number;
    url: string;
    item_id: number;
}

export interface IItemShow {
    status: string;
    items_data: IItemGet;
}



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

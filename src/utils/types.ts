export interface ICategoryItem {
    id: number;
    name: string;
    slug: string;
    description: string;
    parentId: number|null;
}

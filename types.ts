export interface FurnitureItem {
    id: number,
    image: string,
    name: string,
    category: string,
    material: string,
    dimensions: any,
    color: string,
    price: number,
    inStock: boolean,
    features: string[],
    brand: string
}
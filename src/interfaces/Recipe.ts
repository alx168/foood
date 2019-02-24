export interface Ingredient {
    quantity?: number;
    units?: string;
    name: string;
    special?: string;
}

export interface Direction {
    step?: number;
    info: string;
}

enum Level {
    Easy,
    Medium,
    Hard,
}

export interface Recipe {
    ingredients: Array<Ingredient>;
    prepTime?: number;
    cookTime?: number;
    name: string;
    image?: string;
    directions: Array<Direction>;
    notes?: string;
    links?: Array<string>;
    categories?: string;
    yield?: number;
    level?: Level;
}

export class Recipe implements Recipe {}
export class Ingredient implements Ingredient {}
export class Direction implements Direction {}

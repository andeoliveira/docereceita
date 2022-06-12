import { SimpleListItem } from "./SimpleListItem";

export interface Recipe {
    id: string;
    title: string;
    ingredients: Array<Ingredient>;
    preparation: string;
    difficulty: string;
    preparationTime: number;
    servings: Array<Serving>;
    thumbnailUrl: string;
    imageUrl: string;
    observation?: string;
    presentation: Array<Presentation>;
    durability: string;
}

interface Ingredient {
    name: string;
    quantity?: number;
    measure?: string;
    observation?: string;
}

interface Presentation {
    description: string;
    imageUrl?: string;
}

interface Serving {
    quantity: number;
    measure: string;
    size?: string;
    observation?: string;
}
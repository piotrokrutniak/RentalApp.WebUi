export type FileOrUndefined = File | undefined;

// DTOs

export type Recipe = {
    _id?: String,
    title: String,
    summary: string,
    preparationTime: number,
    rating: Number,
    coverImage?: String,
    active: boolean,
    publishedDate: string
}

export type Ingredient = {
    _id?: String,
    name: String,
    vegan: Boolean,
    vegetarian: Boolean
}

export type RecipeIngredient = {
    _id?: String,
    recipeId: String,
    ingredientId: String,
    desc: String
}

export type RecipeSection = {
    _id?: string,
    recipeId: string,
    title: string,
    richText: string,
    order: number
}
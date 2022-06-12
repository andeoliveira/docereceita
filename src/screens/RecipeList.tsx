import data from '../../receitas.json'
import {Recipe} from '../interfaces/Recipe';
import SimpleList from '../components/SimpleList';
import { SimpleListItem } from '../interfaces/SimpleListItem';

const RecipeList = () => {
    const recipeList:Array<Recipe> = JSON.parse(JSON.stringify(data))
    const simpleListItens: Array<SimpleListItem> = []
    recipeList.map(recipe => {
        let simpleListItem:SimpleListItem = {
            nextScreenName: 'Details',
            itemDetailTitle: recipe.title,
            itemDescription: recipe.preparation,
            itemLeft: recipe.durability,
            itemRight: "Tempo: "+recipe.preparationTime + "min.",
            itemThumbnailUrl: recipe.thumbnailUrl,
            itemBottom: "dificuldade: "+recipe.difficulty,
            itemKey: recipe.id,
            itemDetailObject: recipe
        }
        simpleListItens.push(simpleListItem)
    })
    return <SimpleList listItem={simpleListItens}/>
}

export default RecipeList
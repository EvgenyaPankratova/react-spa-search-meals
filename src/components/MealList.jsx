import {Meal} from './Meal'

function MealList({meals}){

    return <div className="list">
        {meals.map(meal => (
            <Meal key={meal.idMeal} {...meal}/>  //idMeal так называется ключ с номером по запросу
        ))}
    </div>
}

export {MealList};
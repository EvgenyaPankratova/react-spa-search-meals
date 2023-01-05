import {Link} from 'react-router-dom';
import {getMealById} from '../api'

function Meal(props){
    const {strMeal, strMealThumb, idMeal} = props; //ключи из массива meals (см.в postman)
    return <div className="card">
    <div className="card-image">
      <img src={strMealThumb} alt={strMeal}/>
      
    </div>
    <div className="card-content">
    <span className="card-title">{strMeal}</span>
    </div>
    <div className="card-action"><Link to={`/meal/${idMeal}`} className='btn purple darken-3'>Watch recipe</Link></div>
  </div>
}

export {Meal}
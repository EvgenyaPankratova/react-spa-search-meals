import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import { getMealById } from '../api';
import {Preloader} from '../components/Preloader';

function Recipe(props){
    const {} = props;
    const [recipe, setRecipe] = useState({});
    const {id} = useParams(); //в Meal мы используем idMeal

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0])) //приходит ответ от функции getMealById - массив meals с одним объектом с кучей ключей. Вызываем setRecipe с полученными данными 
    }, [id]) // useEffect отработает каждый раз, когда меняется id

    return <>
    
    {!recipe.idMeal ? <Preloader/> : (
        <div className="recipe">
            <img className='imgRecipe' src={recipe.strMealThumb} alt={recipe.strMeal} />
            <h3 style={{margin: '2rem 0 1.5rem'}}>{recipe.strMeal}</h3>
            <h6>Category: {recipe.strCategory}</h6>
            {recipe.strArea ? <h6>Area: {recipe.strArea}</h6> : null}
            <p>{recipe.strInstructions}</p>

            <table className='centered'>
                <thead>
                    <tr>
                        <th>Ingredient</th>
                        <th>Measure</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(recipe).map(key => { // Object.keys возвращает массив ключей
                            if(key.includes('Ingredient') && recipe[key]){ //нам нужны только ключи со словом Ingredient и при этом не пустые
                                return (
                                    <tr key={key}>
                                        <td>{recipe[key]}</td>
                                        <td>
                                            {
                                               recipe[`strMeasure${key.slice(13)}`]  //с 13 позиции и до конца строки получаем число (1 или 2 числа)
                                            }
                                        </td>
                                    </tr>
                                )
                            }
                            return null; //если не нашли ключи со словом Ingredient, ничего не отрисовываем
                        }) 
                    }
                </tbody>
            </table>

            {recipe.strYoutube ? (
                <div className="row">
                    <h5>Video recipe</h5>
                    <iframe title={id} src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen /> {/*динамически меняются последние 11 символов в ссылке */}
                </div> 
            ) : null}
            <button className='btn purple darken-3' onClick={goBack}>Go back</button>
        </div>
    )}
    </>
}

export {Recipe}
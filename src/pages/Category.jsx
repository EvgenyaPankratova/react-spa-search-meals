import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import {getFilteredCategory} from '../api';
import {Preloader} from '../components/Preloader';
import { MealList } from '../components/MealList';


function Category(){
    const {name} = useParams(); // используем параметр name, который мы указали в app в url
    const [meals, setMeals] = useState([]) //meals - главный массив по запросу фильтрации (см. в postman)

    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    useEffect(() => {
        getFilteredCategory(name).then(data => setMeals(data.meals));  //фильтруем категорию, вызывая функцию из api с параметром name
    }, [name])
    
    return <>
    <button className='btn purple darken-3' onClick={goBack}>Go back</button>
    {!meals.length ? <Preloader/> : <MealList meals={meals}/>}
    </>
}

export {Category};
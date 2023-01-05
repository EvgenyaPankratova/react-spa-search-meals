import {API_URL} from './config';

const getMealById = async (mealId) => { //блюдо
    const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
    return await response.json();
}

const getAllCategories = async () => { //список всех категорий
    const response = await fetch(API_URL + 'categories.php');
    return await response.json();
}

const getFilteredCategory = async (categoryName) => { //фильтр по категориям
    const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
    return await response.json();
}

export {getMealById, getAllCategories, getFilteredCategory};
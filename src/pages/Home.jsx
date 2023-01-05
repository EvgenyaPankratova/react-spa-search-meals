import {useState, useEffect} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {getAllCategories} from '../api';
import {Preloader} from '../components/Preloader';
import {CategoryList} from '../components/CategoryList';
import {Search} from '../components/Search';

function Home(){
    const [catalog, setCatalog] = useState([]);
    const [filteredCatalog, setFilteredCatalog] = useState([]);

    const {search} = useLocation(); //выцепляем ключи из объекта location и присваиваем их в переменные. Что внутри объекта location можно загуглить
    const navigate = useNavigate();

    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        navigate(`?search=${str}`);
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories); //обрабатываем данные, возвращаемые из getAllCategories. categories - главный массив, который приходит к нам по запросу api
            setFilteredCatalog(search ?  //есть ли в search что-то? если да, фильтруем
                data.categories.filter((item) => 
                item.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
                ) : data.categories //в search ничего нет? используем всё и передаём дальше
            );
        }) 
    }, [search])

    return <>
    <Search callback={handleSearch}/>
    {!catalog.length ? <Preloader/> : (  //если catalog - пустой массив, отрисовываем загрузку. если нет, компонент CategoryList в который передаём массив catalog
        <CategoryList catalog={filteredCatalog}/>
    )}
    </>;
}

export {Home};
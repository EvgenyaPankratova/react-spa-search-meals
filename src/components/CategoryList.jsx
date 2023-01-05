import {CategoryItem} from './CategoryItem';

function CategoryList({catalog} = []){ //в пропсах принимаем catalog , ставим зн-е по умолчанию []
    
    

    return (  
    <div className="list">
        {catalog.map(elem => (
            <CategoryItem key={elem.idCategory} {...elem}/> //отрисовываем каждый элемент массива catalog
        ))}
    </div>
    );
}

export {CategoryList};
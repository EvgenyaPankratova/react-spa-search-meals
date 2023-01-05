import {Link} from 'react-router-dom';

function CategoryItem(props){ 
    const {// idCategory,
      strCategory, strCategoryThumb, strCategoryDescription} = props; //это всё приходит с каждым элементом массива
    

    return <div className="card">
    <div className="card-image">
      <img src={strCategoryThumb} alt={strCategory}/>
      
    </div>
    <div className="card-content">
    <span className="card-title">{strCategory}</span>
     <p>{strCategoryDescription.slice(0, 100)}...</p>  {/* сокращаем строку до 100 символов  */}
    </div>
    <div className="card-action"><Link to={`/category/${strCategory}`} className='btn purple darken-3'>Watch category</Link></div>
  </div>
}

export {CategoryItem};
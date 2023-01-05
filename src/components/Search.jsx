import {isValidElement, useState} from 'react'

function Search({callback = Function.prototype}){
    const [value, setValue] = useState('');

    const handleKey = (event) => { //функция для обработки ввода при помощи клавиши enter
        if(event.key === 'Enter'){
            handleSubmit();
        }
    }

    const handleSubmit = () => {
        callback(value);
    }

    return <div className="row">
        <div className="input-field col s12">
            <input type='search'
                id='search-field'
                placeholder='search meal or category'
                onKeyDown={handleKey}
                onChange={(event) => setValue(event.target.value)}
                value={value}
            />
            <button
                className='btn purple darken-3'
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                }}
                onClick={handleSubmit}
            >Search</button>
        </div>
    </div>
}

export {Search}
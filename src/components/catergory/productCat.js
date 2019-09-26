import React, { useState, useEffect } from 'react'
import { mainCategoryList } from './../../API/catergoryList'

const Catergory = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=> {
        mainCategoryList().then(data => setCategory(data))
    })

    console.log('demo', mainCategoryList)
    return (
        <div>
            {category && category.map(mainCate => {
                return (
                    <div key={mainCate.id}>
                        <h2>{mainCate.title}</h2>
                        <p>{mainCate.shortdescription}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Catergory;
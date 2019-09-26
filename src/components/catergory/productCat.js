import React, { useState, useEffect } from 'react'
import { mainCategoryList } from './../../API/catergoryList'

const Catergory = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=> {
        mainCategoryList().then(data => setCategory(data))
    })
    return (
        <React.Fragment>
            <h2>Featured Categories</h2>
            <span>Explore some of the best tips from around the city from our partners and friends.</span>
            {category && category.map(mainCate => {
                return (
                    <div key={mainCate.id} >
                        <h2>{mainCate.title}</h2>
                        <p>{mainCate.shortdescription}</p>
                    </div>
                )
            })}
        </React.Fragment>
    )
}

export default Catergory;
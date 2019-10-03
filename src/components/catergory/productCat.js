import React, { useState, useEffect } from 'react'
import { mainCategoryList } from './../../API/catergoryList'
import { CatStyle } from './Cat.Style'
import withStyle from 'react-jss'


const Catergory = ({classes}) => {
    const [category, setCategory] = useState([]);
    useEffect(()=> {
        mainCategoryList().then(data => setCategory(data))
    })
    
    return (
        <React.Fragment>
            <h2>Featured Categories</h2>
            <span>Explore some of the best tips from around the city from our partners and friends.</span>
            {category && category.map(mainCate => (
                <Image
                    key={mainCate.id}
                    item={mainCate}
                    catImage={mainCate.img}
                />
            ))}
        </React.Fragment>
    )
}

const Image = withStyle(CatStyle)(({ item, classes }) => (
    <div className={classes.catContainer} catImage={item.img}>
        <h2>{item.title}</h2>
        <p>{item.shortdescription}</p>
    </div>
));

export default withStyle(CatStyle)(Catergory);
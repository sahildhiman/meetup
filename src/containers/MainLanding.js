import React from 'react'
import { MainBanner } from './../components/banner'
import { GetInTouchBlock } from './../components/getintouch'
import { MainCategory } from './../components/catergory'

const MainLanding = () => {
    return(
        <React.Fragment>            
            <MainBanner bannertitle='We will help you to find all' />
            <GetInTouchBlock />
            <MainCategory />
        </React.Fragment>
    )
}

export default MainLanding;
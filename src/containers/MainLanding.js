import React from 'react'
import { MainBanner } from './../components/banner'
import { GetInTouchBlock } from './../components/getintouch'

const MainLanding = () => {
    return(
        <React.Fragment>            
            <MainBanner bannertitle='We will help you to find all' />
            <GetInTouchBlock />
        </React.Fragment>
    )
}

export default MainLanding;
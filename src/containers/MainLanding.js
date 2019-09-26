import React from 'react'
import { MainBanner } from './../components/banner'
import { GetInTouchBlock } from './../components/getintouch'
import { MainCategory } from './../components/catergory'
import { Community } from './../components/joinCommunity'
import { HowWork } from './../components/howitwork'
import { FeedBackList } from './../components/feedback'

const MainLanding = () => {
    return(
        <React.Fragment>            
            <MainBanner bannertitle='We will help you to find all' />
            <MainCategory />
            <GetInTouchBlock />
            <Community />
            <HowWork />
            <FeedBackList />
        </React.Fragment>
    )
}

export default MainLanding;
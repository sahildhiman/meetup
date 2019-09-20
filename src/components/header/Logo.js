import React from 'react'
import withStyle from 'react-jss'

const logoStyle = {
    logoContainer: {
        color:'#FFF'
    }
}

const Logo = ({ classes }) => {
    return(
        <h3 className={classes.logoContainer}>ReactMeetup</h3>
    )
}
export default withStyle(logoStyle)(Logo);
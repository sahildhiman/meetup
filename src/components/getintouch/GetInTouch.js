import React from 'react'
import withStyle from 'react-jss'

const getInTouch = {
    container:{ 
        width:'100%',
        minHeight:'300px',
        display:'flex',
        backgroundColor: '#3EAAFD',
        margin:'50px 0 0 0'        
    },
    innerContainer:{
        width:'100%',
        maxWidth:'1200px',
        margin:'0 auto',
    }
}

const GetInTouch = ({classes}) => {
    return (
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <div>
                    <h2>Do You Have Questions ?</h2>
                    <p>Lorem ipsum dolor sit amet, harum dolor nec in, usu molestiae at no.</p>
                </div>
                <div>
                    get in touch form button
                </div>
            </div>
        </div>
    )
}
export default withStyle(getInTouch)(GetInTouch);
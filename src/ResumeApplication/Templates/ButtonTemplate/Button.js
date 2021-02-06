import classes from './Button.module.css';
import { Link } from 'react-router-dom';
import React, {Fragment} from 'react';

const Button = (props) => {


    let isDisabled = false
    if(props.deny === false) {
        isDisabled = true
    }

    let cursorValid = isDisabled ? 'not-allowed' : 'pointer'
    let backgroundColor = isDisabled ? 'black' : 'rgb(97, 141, 177)'

    return (
        <Fragment>
            <div className={classes.ButtonHolder} onClick={props.onClick}>
                <Link to={props.to}>
                    <button type='button' className={classes.Button} disabled={isDisabled} style={{
                        backgroundColor: backgroundColor,
                        cursor: cursorValid
                    }} >
                            {props.ButtonName}
                    </button>
                </Link>
                <span className={classes.ButtonAura}></span>
                
            </div>
            

        </Fragment>
        
    )
}

export default Button
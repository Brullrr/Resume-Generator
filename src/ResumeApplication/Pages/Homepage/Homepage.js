import classes from './Homepage.module.css';
import React from 'react';
import Button from '../../Templates/ButtonTemplate/Button';

const Homepage = () => {
    return (
        <div className={classes.Homepage}>
            <div className={classes.ButtonHolder}>
            <Button to='/CreateNewResume' ButtonName='Create Resume' />
            <Button to='/ResumeHolder' ButtonName='View Resumes' />  
            </div>     
        </div>
    )
}

export default Homepage
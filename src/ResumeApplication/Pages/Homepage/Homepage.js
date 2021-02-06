import classes from './Homepage.module.css';
import React from 'react';
import Button from '../../Templates/ButtonTemplate/Button';

const Homepage = () => {
    return (
        <div className={classes.Homepage}>
            <div className={classes.ButtonHolder}>
            {/* <Button to='/CreateNewResume' ButtonName='Create New Resume' />
            <Button to='/ResumeHolder' ButtonName='View Your Resumes' />   */}
            </div>     
        </div>
    )
}

export default Homepage
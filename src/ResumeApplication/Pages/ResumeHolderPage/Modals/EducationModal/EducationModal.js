import classes from './EducationModal.module.css';
import React, { Fragment, useState} from 'react';
import Backdrop from '../Backdrop/Backdrop';

const EducationModal = (props) => {

    const [education, setEducation] = useState({
        study: null,
        school: null,
        startMonth: null,
        startYear: null,
        endMonth: null,
        endYear: null,
        country: null
    })

    const arrayOfEducation = [
        'study','school','startMonth','startYear','endMonth','endYear','country'
    ]

    console.log('educationModal,   education:    ' + JSON.stringify(education))
    
    const change = (e, educationObject) => {
        let educationCopy = {
            ...education,
            [educationObject]: e.target.value
        }
        setEducation(educationCopy)
    }



    let inputButtons = arrayOfEducation.map((element) => {

        let whichDiv = null
        
        switch(element) {
            case 'study' : 
                whichDiv = <p>Enter your degree or field of study.</p>
            break;
            case 'school' :
                whichDiv = <p>The name of your institution.</p>
            break;
            case 'startMonth' : 
                whichDiv = <p>The month you began studying.</p>
            break;
            case 'startYear' : 
                whichDiv = <p>The year you began studying.</p>
            break;
            case 'endMonth' : 
                whichDiv = <p>The month you graduated.</p>
            break;
            case 'endYear' : 
                whichDiv = <p>The year you graduated.</p>
            break;
            case 'country' : 
                whichDiv = <p>What country you studied.</p>
            break;
            default : 
                whichDiv = null
            break;
        }

        let whichInput =null

        switch(element) {
            case 'study' : 
                whichInput = <input type='text' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            case 'school' :
                whichInput = <input type='text' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            case 'startMonth' : 
                whichInput = <input type='number'  max='12' min='1' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            case 'startYear' : 
                whichInput = <input type='number' max='2021' min='1921' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            case 'endMonth' : 
                whichInput = <input type='number'  max='12' min='1' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            case 'endYear' : 
                whichInput = <input type='number' max='2021' min='1921' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            case 'country' : 
                whichInput = <input type='text' placeholder='' onChange={(e) => {change(e, element)}} />
            break;
            default :
                whichInput = null
            break;
        }
                    
        return (
            <div className={classes.educationForm} key={element}>
                {whichDiv}
                {whichInput}
            </div>
        )
    })

    return (
        <Fragment>
            <Backdrop show={props.show} clicked={props.clicked}/>
            <div className={classes.Modal}>
                {inputButtons}
                <button className={classes.SubmitButton} onClick={() => {
                props.addEducationToPreview(education)
                props.clicked()
            }}>Submit Education</button>
            </div>
            
            
        </Fragment>
    )
}

export default EducationModal 
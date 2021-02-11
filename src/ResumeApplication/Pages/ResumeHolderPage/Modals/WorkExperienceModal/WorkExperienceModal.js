import classes from './WorkExperienceModal.module.css';
import Backdrop from '../Backdrop/Backdrop';
import React, {Fragment, useState} from 'react';

const WorkExperienceForm = (props) => {

    const [newWorkExperience, setNewWorkExperience] = useState({
        jobTitle: null,
        company: null,
        startMonth: null,
        startYear: null,
        endMonth: null,
        endYear: null,
        responsibilities: []
    })

    const [newResponsibility, setNewResponsibility] = useState({
        responsibilityName: null,
        responsibilityExplanation: null
    })

    console.log('[WorkExperienceModal.js]  new work experience object:    '  + JSON.stringify(newWorkExperience))

    const jobTitleChange = (e) => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            jobTitle: e.target.value
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const companyChange = (e) => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            company: e.target.value
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const startMonthChange = (e) => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            startMonth: e.target.value
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const startYearChange = (e) => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            startYear: e.target.value
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const endMonthChange = (e) => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            endMonth: e.target.value
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const endYearChange = (e) => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            endYear: e.target.value
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const ongoingChange = () => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            endMonth: 'Present',
            endYear: ' '
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }
    const responsibilityNameChange = (e) => {
        let newResponsibilityCopy = {
            ...newResponsibility,
            responsibilityName: e.target.value
        }
        setNewResponsibility(newResponsibilityCopy)
    }
    const responsibilityExplanationChange = (e) => {
        let newResponsibilityCopy = {
            ...newResponsibility,
            responsibilityExplanation: e.target.value
        }
        setNewResponsibility(newResponsibilityCopy)
    }
    const addResponsibility = () => {
        let newWorkExperienceCopy = {
            ...newWorkExperience,
            responsibilities: newWorkExperience.responsibilities.concat([newResponsibility])
        }
        setNewWorkExperience(newWorkExperienceCopy)
    }

    const deleteResponsibility = (e) => {

        

        let responsibilitiesCopy = [...newWorkExperience.responsibilities]
        responsibilitiesCopy.forEach((element, index) => {
            if(e.responsibilityName === element.responsibilityName) {
                responsibilitiesCopy.splice(index, 1)
            }
        })

        let newWorkExperienceCopy = {
            ...newWorkExperience,
            responsibilities: responsibilitiesCopy
        }

        setNewWorkExperience(newWorkExperienceCopy)

    }

    return (
        <Fragment>
        <Backdrop show={props.show} clicked={props.clicked}/>

        <div className={classes.Modal}>
            <input className={classes.JobTitle} type='text' placeholder={newWorkExperience.jobTitle ? newWorkExperience.jobTitle : 'Job Title'} onChange={ (e) => {jobTitleChange(e)}}/>
            <input className={classes.Company} type='text' placeholder='Company or Employer' onChange={ (e) => {companyChange(e)}}/>
            
            
            <p className={classes.From} >This position was held from</p>
            <input className={classes.StartMonth} type='number' max='12' min='1' placeholder='Starting Month' onChange={ (e) => {startMonthChange(e)}}/>
            <input className={classes.StartYear} type='number' max='2021' min='1921' placeholder='Starting Year' onChange={ (e) => {startYearChange(e)}}/>
            <p className={classes.To}> until </p>
            <input className={classes.EndMonth} type='number' max='12' min='1' placeholder={newWorkExperience.endMonth ? newWorkExperience.endMonth : 'Month Ended'} onChange={ (e) => {endMonthChange(e)}}/>
            <input className={classes.EndYear} type='number' max='2021' min='1921' placeholder={newWorkExperience.endYear ? newWorkExperience.endYear : 'Year Ended'} onChange={ (e) => {endYearChange(e)}}/>
            <div className={classes.Ongoing} onClick={ongoingChange}>OnGoing</div>
            <p className={classes.KeyResponsibilityTitle}>Key Responsibilities</p>
            <input className={classes.ResponsibilityName} maxLength='20' type='text' placeholder='Enter a responsibility you held or task you managed' onChange={responsibilityNameChange}/>
            <textarea className={classes.Explanation} maxLength='100' type='text' placeholder='Explain the responsibility you held or task you managed' onChange={responsibilityExplanationChange}/>
            <button className={classes.AddResponsibilityButton} onClick={addResponsibility} >Add New Responsibility</button>
            {newWorkExperience.responsibilities.map((element) => {
                return <p className={classes.Responsibility} onClick={ () => {deleteResponsibility(element)}}>{element.responsibilityName}</p>
            })}
            <button className={classes.SubmitButton} onClick={() => {
                props.addWorkExperienceToPreview(newWorkExperience)
                props.clicked() }}>ADD WORK EXPERIENCE TO RESUME</button>
        </div>

        </Fragment>
        
    )


}

export default WorkExperienceForm
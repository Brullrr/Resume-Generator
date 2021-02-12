import classes from './CreateResumePage.module.css';
import React,{ useState } from 'react';
import Button from '../../Templates/ButtonTemplate/Button';

const CreateResumePage = (props) => {

    const [newResumeForm, setNewResumeForm] = useState({
        resumeName: '',
        profileName: '',
        profilePicture: null,
        contactInformation: {
            email: null,
            phoneNumber: null,
            location: null,
            linkdIn: null
        },
        skills: [],
        isLanguageEnabled: false,
        languages: [],
        coverLetter: '',
        workExperience: [],
        isCertificatesEnabled: false,
        certificates: [],
        education: []
    })

    const [buttonValidity, setButtonValidity] = useState(false)

    let resumesBeingHeld = []

    if(props.userResumes) {
        for(let i=0; i< props.userResumes.length; i++){
            resumesBeingHeld.push(props.userResumes[i].resumeName)
        }
    }

    const checkValidity = (e) => {
        let isValid = true
        
        resumesBeingHeld.forEach((element) => {
            if(e.target.value === element || e.target.value.trim() === '') {
                console.log('Error')
                isValid = false
            }
        })
        if(e.target.value.trim() === '') {
            console.log('Error')
            isValid = false
        }
        setButtonValidity(isValid)
        
    }

    

    const updateResumeNameHandler = (e) => {
        let resumeFormCopy = {...newResumeForm}
        resumeFormCopy.resumeName = e.target.value
    
        setNewResumeForm(resumeFormCopy)
    }

    const updateResumeCertificateHandler = () => {
        let resumeFormCopy = {...newResumeForm}
        resumeFormCopy.isCertificatesEnabled = !resumeFormCopy.isCertificatesEnabled

        setNewResumeForm(resumeFormCopy)
    }

    const updateResumeLanguageHandler = () => {
        let resumeFormCopy = {...newResumeForm}
        resumeFormCopy.isLanguageEnabled = !resumeFormCopy.isLanguageEnabled

        setNewResumeForm(resumeFormCopy)
    }

    const certificateOrNotButtonYES = <div className={classes.CertificateButtonYES}  onClick={updateResumeCertificateHandler}><p>YES</p><div className={classes.CoverDivYES }></div></div>
    const certificateOrNotButtonNO = <div className={classes.CertificateButtonNO} onClick={updateResumeCertificateHandler}><p>NO</p><div className={classes.CoverDivNO}></div></div>

    let certificateOrNotButton = newResumeForm.isCertificatesEnabled ? certificateOrNotButtonYES : certificateOrNotButtonNO;


    const languageOrNotButtonYES = <div className={classes.CertificateButtonYES}  onClick={updateResumeLanguageHandler}><p>YES</p><div className={classes.CoverDivYES }></div></div>
    const languageOrNotButtonNO = <div className={classes.CertificateButtonNO} onClick={updateResumeLanguageHandler}><p>NO</p><div className={classes.CoverDivNO}></div></div>

    let languageOrNotButton = newResumeForm.isLanguageEnabled ? languageOrNotButtonYES : languageOrNotButtonNO;
 
    return (
        <div className={classes.CreateResumePage}>
            <div className={classes.HoldButton}>
                <Button to='/' ButtonName='Go Home' />
            </div>
            


            <div className={classes.CreationForm}>
                <div className={classes.Question}>Resume name.</div>
                <input className={classes.Input} type='text' maxLength='20' placeholder="ex. Company A" onChange={(e) => {
                    updateResumeNameHandler(e)
                    checkValidity(e)
                    }}></input>
                <div className={classes.Question} >Include languages? </div>
                {languageOrNotButton}
                <div className={classes.Question} >Include certificates?</div>
                {certificateOrNotButton}
                
            </div>




            <div className={classes.CreateButtonHolder}>
                <Button to='/ResumeHolder' ButtonName='Create' onClick={() => {props.createNewResumeHandler(newResumeForm)}}  deny={buttonValidity} />
            </div>
        </div>
    )
}

export default CreateResumePage
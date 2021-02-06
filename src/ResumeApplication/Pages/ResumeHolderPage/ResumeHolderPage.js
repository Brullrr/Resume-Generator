import classes from './ResumeHolderPage.module.css';
import React, { Fragment, useState} from 'react';
import Button from '../../Templates/ButtonTemplate/Button';
import WorkExperienceModal from './Modals/WorkExperienceModal/WorkExperienceModal';
import EducationModal from './Modals/EducationModal/EducationModal';

import emailLogoImg from '../../Images/emailLogo.png';
import phoneLogoImg from '../../Images/phoneLogo.png';
import locationLogoImg from '../../Images/locationLogo.png';
import earthLogoImg from '../../Images/earthLogo.png';
import CreatePDF from '../../Templates/CreatePDF/CreatePDF';



const ResumeHolderPage = (props) => {


    const [preview, setPreview] = useState({
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



   

    



    const [workExperienceModalState, setWorkExperienceModalState] = useState(false)



    const engagePreview = (element) => {
        setPreview(element)
    }

    const addProfilePicture = (element) => {
        let previewCopy = {...preview}
        console.log(element.target.files[0])
        previewCopy.profilePicture = element.target.files[0]
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    const nameHandler = (e) => {
        let previewCopy = {...preview}
        previewCopy.profileName = e.target.value
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }
    const coverLetterHandler = (e) => {
        let previewCopy = {...preview}
        previewCopy.coverLetter = e.target.value
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    const emailHandler = (e) => {
        let previewCopy = {...preview}
        previewCopy.contactInformation.email = e.target.value
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }
    
    const phoneHandler = (e) => {
        let previewCopy = {...preview}
        previewCopy.contactInformation.phoneNumber = e.target.value
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }
    const locationHandler = (e) => {
        let previewCopy = {...preview}
        previewCopy.contactInformation.location = e.target.value
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }
    const linkdinHandler = (e) => {
        let previewCopy = {...preview}
        previewCopy.contactInformation.linkdIn = e.target.value
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    // SKILLS
    const deleteSkillHandler = (e) => {

        let previewSkillsCopy = [...preview.skills]
        preview.skills.forEach((skill, index) => {
            if(skill === e) {
                previewSkillsCopy.splice(index, 1)
            }
        })

        let previewCopy = {
            ...preview,
            skills: previewSkillsCopy
        }

        setPreview(previewCopy)
        props.previewChanged(previewCopy)

    }
    const addNewSkillHandler = (e) => {
        let previewCopy = {
            ...preview,
            skills: preview.skills.concat([e])
        }
        
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    const [newSkillEntry, setNewSkillEntry] = useState('')

    const changeNewSkillEntryValue = (e) => {
        setNewSkillEntry(e.target.value)
    }
    const changeNewSkillEntryValueTwo = () => {setNewSkillEntry('') }
    //LANGUAGE

    const deleteLanguageHandler = (e) => {

        let previewLanguagesCopy = [...preview.languages]
        preview.languages.forEach((language, index) => {
            if(language.languageName === e) {
                previewLanguagesCopy.splice(index, 1)
            }
        })

        let previewCopy = {
            ...preview,
            languages: previewLanguagesCopy
        }

        setPreview(previewCopy)
        props.previewChanged(previewCopy)

    }
    const addNewLanguageHandler = (e) => {
        let previewCopy = {
            ...preview,
            languages: preview.languages.concat([e])
        }
        
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    const [newLanguageEntry, setNewLanguageEntry] = useState({
        languageName: '',
        abilityLevel: null
    })
    const resetNewLanguageEntry = () => {
        setNewLanguageEntry(
            {languageName: '',
            abilityLevel: ''}
        )
    }

    const changeNewLanguageEntryValue = (e) => {
        setNewLanguageEntry(
            {languageName: e.target.value,
            abilityLevel: newLanguageEntry.abilityLevel}
        )
    }
    const changeNewLanguageEntryValueAbility = (e) => {
        setNewLanguageEntry(
            {languageName: newLanguageEntry.languageName,
            abilityLevel: e.target.value}
        )
    }
    


    //END LANGUAGE
    //Certificates

    const deleteCertificateHandler = (e) => {

        let previewCertificatesCopy = [...preview.certificates]
        preview.certificates.forEach((certificate, index) => {
            if(certificate.certificateName === e) {
                previewCertificatesCopy.splice(index, 1)
            }
        })

        let previewCopy = {
            ...preview,
            certificates: previewCertificatesCopy
        }

        setPreview(previewCopy)
        props.previewChanged(previewCopy)

    }
    const addNewCertificateHandler = (e) => {
        let previewCopy = {
            ...preview,
            certificates: preview.certificates.concat([e])
        }
        
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    const [newCertificateEntry, setNewCertificateEntry] = useState({
        certificateName: '',
        date: null
    })
    const resetNewCertificateEntry = () => {
        setNewCertificateEntry(
            {certificateName: '',
            date: ''}
        )
    }

    const changeNewCertificateEntryValue = (e) => {
        setNewCertificateEntry(
            {certificateName: e.target.value,
            date: newCertificateEntry.date}
        )
    }
    const changeNewCertificateEntryValueDate = (e) => {
        setNewCertificateEntry(
            {certificateName: newCertificateEntry.certificateName,
            date: e.target.value}
        )
    }
    


    //END CERTIFFICATE

    // Work experience

    const deleteWorkExperienceHandler = (e) => {
        let previewWorkExperienceCopy = [...preview.workExperience]
        preview.workExperience.forEach((workExperience, index) => {
            if(workExperience.jobTitle === e.jobTitle) {
                previewWorkExperienceCopy.splice(index, 1)
            }
        })

        let previewCopy = {
            ...preview,
            workExperience: previewWorkExperienceCopy
        }

        setPreview(previewCopy)
        props.previewChanged(previewCopy)

    }

    const addWorkExperienceToPreview = (e) => {
        let previewCopy = {
            ...preview,
            workExperience: preview.workExperience.concat([e])
        }
        
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    let workExperienceDivs = null
    let workExperienceTitle = null

    if(props.previewResume) {
        workExperienceDivs = props.previewResume.workExperience.map((element) => {
            return (<div >
                <p className={classes.JobTitle} onClick={() => {deleteWorkExperienceHandler(element)}}>{element.jobTitle}</p>
                <p className={classes.CompanyName}>{element.company}</p>
                <p className={classes.WorkDate}>{element.startMonth} / {element.startYear} - {element.endMonth} / {element.endYear}</p>
                {
                    element.responsibilities.map((elemental) => {
                        return (
                            <div className={classes.ResponsibilityContainer}>
                            <div className={classes.BulletPoint}>O</div>
                            <p className={classes.Responsibility}> {elemental.responsibilityName} - {elemental.responsibilityExplanation}</p>
                            </div>
                        )
                    })
                }
            </div>)
        })
    }

    if(props.previewResume && props.previewResume.workExperience[0]) {
        workExperienceTitle = <div>
            <p className={classes.WorkExperienceTitle}>Work Experience</p>
            <div className={classes.WorkExperienceTitleDivider}></div>
        </div>
    }

    //EDUCATION

    const [educationModalState, setEducationModalState] = useState(false)

    const turnOnEducationModal = () => {
        setEducationModalState(true)
    }

    const turnOffEducationModalState = () => {
        setEducationModalState(false)
    }

    const deleteEducationHandler = (e) => {
        let previewEducationCopy = [...preview.education]
        preview.education.forEach((education, index) => {
            if(education.study === e.study) {
                previewEducationCopy.splice(index, 1)
            }
        })

        let previewCopy = {
            ...preview,
            education: previewEducationCopy
        }

        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }

    let educationDivs = null

    if(props.previewResume) {

        educationDivs =(
            <div className={classes.EducationContainer}>
                <p className={classes.EducationTitle}>Education</p>
                <div className={classes.WorkExperienceTitleDivider}></div>
                {props.previewResume.education.map((element) => {
                    return (
                        <div className={classes.Education} key={element.study} onClick={() => {deleteEducationHandler(element)}}>
                            <p className={classes.EducationStudy}  >{element.study} </p>
                            <p className={classes.EducationSchool}>{element.school}</p>
                            <p className={classes.EducationDate}>{element.startMonth}/{element.startYear} - {element.endMonth}/{element.endYear}</p>
                            <p className={classes.EducationCountry}>{element.country}</p>
                        </div>
                    )
                })}
            </div>
        ) 
    }
//End more education

    let skillsDiv = null

    if(props.previewResume && props.previewResume.skills.length >= 1) {
        skillsDiv = (
            <div className={classes.SkillsContainer}>
                    <p>Skills</p>
                    <div className={classes.SkillsDivider}></div>
                {props.previewResume.skills.map((element) => {
                    return <div className={classes.Skill} key={element}  onClick={() => {deleteSkillHandler(element) } }>{element}</div>
                })}
            </div>
        )
    }




    let userResumesArray = props.userResumesArray.map((element) => {
        return (<div key={element.resumeName} onClick={() => { 
            props.addToPreview(element)  
            engagePreview(element) 
        }} >{element.resumeName} <button className={classes.ResumeDeletion} onClick={() => { props.deleteResume(element) }} >X</button></div>)
        
    })


    let emailLogo = <img alt='email' src={emailLogoImg}></img>
    let phoneLogo = <img alt='phone' src={phoneLogoImg}></img>
    let locationLogo = <img alt='location' src={locationLogoImg}></img>
    let earthLogo = <img alt='earth' src={earthLogoImg}></img>
    
    

    let previewForm = null

    if(props.previewResume) {
        previewForm = <div className={classes.PreviewHolderMiddle}>

            <div className={classes.ResumeSectionOne}>
                {props.previewResume.profilePicture ? <img src={props.previewResume.profilePicture ? URL.createObjectURL(props.previewResume.profilePicture) : ''} className={classes.ProfilePicture} alt='profile'></img> : null}

                <div  className={classes.ContactInfoDiv}>
                    {props.previewResume.contactInformation.email ? emailLogo : null}
                    <input  type="text" value={props.previewResume.contactInformation.email ? props.previewResume.contactInformation.email : ''} placeholder='Your Email' onChange={ (e) => {emailHandler(e)}}></input>
                    {props.previewResume.contactInformation.phoneNumber ? phoneLogo : null}
                    <input  type="text" value={props.previewResume.contactInformation.phoneNumber ? props.previewResume.contactInformation.phoneNumber : ''} placeholder='Phone Number' onChange={ (e) => {phoneHandler(e)}}></input>
                    {props.previewResume.contactInformation.location ? locationLogo : null}
                    <div className={classes.LocationDiv}>
                        <input  type="text" value={props.previewResume.contactInformation.location ? props.previewResume.contactInformation.location : ''} placeholder='Location' onChange={ (e) => {locationHandler(e)}}></input>
                        </div>
                    {props.previewResume.contactInformation.linkdIn ? earthLogo : null}
                    <textarea className={classes.Websites} value={preview.contactInformation.linkdIn ? preview.contactInformation.linkdIn : '' }  type="text" placeholder='linkdIn, github, and any other website. ' onChange={ (e) => {linkdinHandler(e)}}></textarea>
                </div>

            {skillsDiv}
            
            {props.previewResume.isLanguageEnabled ? <p className={classes.LanguageTitle}>Languanges</p> : null}
            {props.previewResume.isLanguageEnabled ? <div className={classes.SkillsDivider}></div> : null}
            {props.previewResume.languages.map((element) => {
                
                return (
                    <div className={classes.LanguageContainer}>
                        <div className={classes.LanguageName} key={element.languageName}  onClick={() => {deleteLanguageHandler(element.languageName) } }>{element.languageName}</div>  
                        <div className={classes.CircleContainer}>
                        {element.abilityLevel >= 1 ? <div className={classes.LanguageCircleFilled}></div> : <div className={classes.LanguageCircle}></div>}
                        {element.abilityLevel >= 2 ? <div className={classes.LanguageCircleFilled}></div> : <div className={classes.LanguageCircle}></div>}
                        {element.abilityLevel >= 3 ? <div className={classes.LanguageCircleFilled}></div> : <div className={classes.LanguageCircle}></div>}
                        {element.abilityLevel >= 4 ? <div className={classes.LanguageCircleFilled}></div> : <div className={classes.LanguageCircle}></div>}
                        {element.abilityLevel >= 5 ? <div className={classes.LanguageCircleFilled}></div> : <div className={classes.LanguageCircle}></div>}
                        </div>   
                    </div>
                )
            })}

            </div>


            <div className={classes.ResumeSectionTwo}>

                <div className={classes.CoverLetterAndName}>
                    <input className={classes.EnterName} type="text" value={props.previewResume.profileName} placeholder={props.previewResume.profileName ? props.previewResume.profileName : 'Please Enter Your Name'} onChange={ (e) => {nameHandler(e)}}></input>
                    <div className={classes.DivideNameAndLetter}></div>
                    <textarea className={classes.EnterCoverLetter} type="text" value={props.previewResume.coverLetter} placeholder={props.previewResume.coverLetter ? props.previewResume.coverLetter : 'Please describe yourself'} onChange={ (e) => {coverLetterHandler(e)}}></textarea>
                </div>

                <div className={classes.WorkExperienceContainer}>
                    {workExperienceTitle}
                    {workExperienceDivs}
                </div>
                
                <div className={classes.EducationContainer}>
                    {props.previewResume.education[0] ? educationDivs : null} 
                </div>

                <div className={classes.certificatesContainer}>
                    {props.previewResume.isCertificatesEnabled ? (<p className={classes.CertificateTitle}>Certificates</p> ) : null}
                    {props.previewResume.isCertificatesEnabled ? (<div className={classes.CertificateTitleDivider}></div> ) : null}
                    {props.previewResume.certificates.map((element) => {
                
                    return (
                        <div key={element.certificateName} onClick={() => {deleteCertificateHandler(element.certificateName) } }>
                            <div className={classes.CertificateName}>{element.certificateName}</div>
                            <div className={classes.CertificateDate}>{element.date}</div>
                        </div>
                    )
                    })}
                </div>          
            </div>
        </div>
    }

    //More Language

    let checkIfLanguageEnabled = null

    let languageButtons = (
        <div className={classes.LanguageButtonsContainer}>
            <input className={classes.LanguageNameInput} type="text" placeholder='Enter a Language' value={newLanguageEntry.languageName} onChange={ (e) => {changeNewLanguageEntryValue(e)}}></input>
            <input className={classes.LanguageAbilityInput} type="number" min='1' max='5' placeholder='1-5'  value={newLanguageEntry.abilityLevel}  onChange={ (e) => {changeNewLanguageEntryValueAbility(e)}}></input>
            { newLanguageEntry.languageName && newLanguageEntry.abilityLevel ? <button className={classes.LanguageSubmitButton} onClick={() => {addNewLanguageHandler(newLanguageEntry); resetNewLanguageEntry()}}>+</button> : null}
            
        </div>
    )

    if(props.previewResume) {
        checkIfLanguageEnabled = props.previewResume.isLanguageEnabled ? languageButtons : null
    }

    //End More Language
    //More Certificates
    let checkIfCertificatesEnabled = null

    let certificatesButtons = (
        <div className={classes.CertificateButtonsContainer}>
            <input className={classes.CertificateNameInput}  type="text" placeholder='Enter a certificate' value={newCertificateEntry.certificateName} onChange={ (e) => {changeNewCertificateEntryValue(e)}}></input>
            <input className={classes.CertificateDateInput}  type="number" min='1925' max='2021' placeholder='Year' value={newCertificateEntry.date} onChange={ (e) => {changeNewCertificateEntryValueDate(e)}}></input>
            { newCertificateEntry.certificateName && newCertificateEntry.date ? <button className={classes.CertificateSubmitButton}  onClick={() => {addNewCertificateHandler(newCertificateEntry); resetNewCertificateEntry()}}>+</button> : null}
        </div>
    ) 

    if(props.previewResume) {
        checkIfCertificatesEnabled = props.previewResume.isCertificatesEnabled ? certificatesButtons : null
    }


    //End Certificates

    const addEducationToPreview = (e) => {
        let previewCopy = {
            ...preview,
            education: preview.education.concat([e])
        }
        
        setPreview(previewCopy)
        props.previewChanged(previewCopy)
    }


    const turnOffExperienceModal = () => {
        setWorkExperienceModalState(false)
    }
    const turnOnExperienceModal = () => {
        setWorkExperienceModalState(true)
    }

    

    let buttons = (
        <div className={classes.ExtraButtonsContainer}>

            <label className={classes.AddFile}  htmlFor='profile-picture'>ADD PROFILE PICTURE
                <input id='profile-picture' type='file'  onChange={addProfilePicture}/>
            </label>
            
            
            <input className={classes.SkillInput} type="text" placeholder='Enter a skill' maxLength='20' onChange={ (e) => {changeNewSkillEntryValue(e)}} value={newSkillEntry}></input>
            { newSkillEntry ? <button className={classes.SkillSubmitButton} onClick={() => {addNewSkillHandler(newSkillEntry); changeNewSkillEntryValueTwo(); }  }>+</button> : null}
            {checkIfLanguageEnabled}
            {checkIfCertificatesEnabled}

            <button className={classes.AddWorkExperience} onClick={turnOnExperienceModal}>ADD WORK EXPERIENCE</button>
            <button className={classes.AddEducationExperience} onClick={turnOnEducationModal}>ADD EDUCATION</button>
            
        </div>
    )

    let holder = null

    if(props.userResumesArray[0]) {
        holder = (
            <div className={classes.TripleHolder}>
                <div className={classes.ResumeHolder}>
                    {userResumesArray}
                </div>

                <div className={classes.Preview}>
                    {previewForm}
                </div>
            
                <div className={classes.ExtraInputs}>
                    {props.previewResume ? buttons : null}
                </div>
            </div>
        ) 
    }

    return (
        <Fragment>
            <div className={classes.ResumeHolderPageBody}>
                <div className={classes.ButtonHolder}>
                    <div className={classes.HomeButton}><Button to='/' ButtonName='Go Home' onClick={props.clearPreview}/></div>
                    <div className={classes.HomeButton}><Button to='/ResumeHolder' ButtonName='Save' deny={props.userResumesArray[0] ? true :false} onClick={() => {
                        props.previewChanged(preview)
                    }} /></div>
                    <div className={classes.HomeButton}><Button to='/ResumeHolder' ButtonName='Print as a PDF' onClick={ () => {
                        CreatePDF(props.previewResume)
                    }} /></div>           
                </div>

                {holder}
            
            </div>

        {workExperienceModalState ? <WorkExperienceModal show={workExperienceModalState} clicked={turnOffExperienceModal} addWorkExperienceToPreview={addWorkExperienceToPreview} /> : null}
        {educationModalState ? <EducationModal show={educationModalState} clicked={turnOffEducationModalState} addEducationToPreview={addEducationToPreview} /> : null }     
        </Fragment>


        
    )
}

export default ResumeHolderPage
import React, {Fragment, Component} from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import CreateResumePage from './Pages/CreateResumePage/CreateResumePage';
import ResumeHolderPage from './Pages/ResumeHolderPage/ResumeHolderPage';

class ResumeApplication extends Component {

        constructor(props) {
            super(props);
                this.state = {
                    userResumesArray: [{
                        resumeName: 'Example Company',
                        profileName: 'Yuuki Suzuki',
                        profilePicture: null,
                        contactInformation: {
                            email: 'www.Yuuki@gmail.com',
                            phoneNumber: '090-867-5309',
                            location: 'Toyohashi Aichi, Japan',
                            linkdIn: 'www.website.com   www.linkdin.com/YuukiSuzuki-12345678  www.Github.com.io/YuukiSuzuki/Website'
                        },
                        skills: ['Microsoft Word', 'Microsoft Excel', 'Translation', 'Nursing', 'Teamwork'],
                        isLanguageEnabled: true,
                        languages: [{languageName: 'Japanese', abilityLevel: 5}, {languageName: 'English', abilityLevel: 4}],
                        coverLetter: 'Detail, deadline, and teamwork oriented professional with over four years of working in a native Japanese speaking environment.  Reliable and organized with the ability to communicate ideas eﬀectively in both English and Japanese.  Self-motivated and able to promptly respond to unexpected tasks.  Experience in the following: instruction, translation, leadership, and mentor-ship. Along with this, I hold a large interest in anything related to computers, and have been studying HTML, CSS, and JavaScript. I would like to utilize my experience and skills in an environment that is as passionate as I am.',
                        workExperience: [{
                            jobTitle: 'Nurse',
                            company: 'Toyohashi General Hospital',
                            startMonth: '4',
                            startYear: 2016,
                            endMonth: 10,
                            endYear: 2019,
                            responsibilities: [{
                                responsibilityName: 'Patient Care',
                                responsibilityExplanation: 'Attended to a room of 5 patients at any given time.'
                            }]
                        }],
                        isCertificatesEnabled: false,
                        certificates: [],
                        education: []
                    }],
                    previewResume: null
                }
        }

        
        
        addToPreviewHandler = (element) => {          
            this.setState({
                ...this.state,
                previewResume: element
            })
        }

        createNewResumeHandler = (data) => {
            const dataToArray = []
            dataToArray.push(data)     
            this.setState({
                ...this.state,
                userResumesArray: this.state.userResumesArray.concat(dataToArray)
            })
        }

        previewChangedHandler = (e) => {
            let num = null
            let copyOfUserResumesArray = [...this.state.userResumesArray]

            this.state.userResumesArray.forEach((element, index) => {
                if(element.resumeName === e.resumeName) {
                    num = index
                }
            }) 
            copyOfUserResumesArray[num] = e
            
            this.setState({
                ...this.state,
                userResumesArray: copyOfUserResumesArray,
                previewResume: e
            })            
        }

        clearPreviewHandler = () => {
            this.setState({
                ...this.state,
                previewResume: null
            })
        }
        
        deleteResumeHandler = (e) => {
            console.log('[REsumeApplication]    :    '  + this.state.userResumesArray[0].resumeName + e.resumeName)
            let stateCopy = {...this.state,
                previewResume: null}
            stateCopy.userResumesArray.forEach((resume, index) => {
            if(resume.resumeName === e.resumeName) {
                stateCopy.userResumesArray.splice(index, 1)
                }
            })
            console.log(JSON.stringify(stateCopy))
    
            setTimeout( () => {
                this.setState(stateCopy)
           }, 10)
            
        }

        render () {
            return (
                <Fragment>
                    <Route path='/' exact  render={() => <Homepage /> } /> 
                    <Route path='/CreateNewResume' exact render={() => <CreateResumePage createNewResumeHandler={this.createNewResumeHandler} userResumes={this.state.userResumesArray}/>} />
                    <Route path='/ResumeHolder' exact render={() => {
                            return (<ResumeHolderPage 
                                userResumesArray={this.state.userResumesArray}
                                addToPreview={this.addToPreviewHandler}
                                previewResume={this.state.previewResume}
                                previewChanged={this.previewChangedHandler}
                                clearPreview={this.clearPreviewHandler}
                                deleteResume={this.deleteResumeHandler}
                                
                            />)
                    }} />
                </Fragment>
            )

        }
}

export default ResumeApplication
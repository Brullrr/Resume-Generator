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
                        profileName: 'Richard Brull',
                        profilePicture: null,
                        contactInformation: {
                            email: 'brullrr@gmail.com',
                            phoneNumber: '090-9945-5750',
                            location: 'Inuyama Aichi, Japan',
                            linkdIn: 'linkedin.com/in/richard-brull-43247b155'
                        },
                        skills: ['Microsoft Office', 'Prioritization', 'Communication', 'Public Speaking', 'Javascript', 'React & Redux', 'HTML & CSS'],
                        isLanguageEnabled: true,
                        languages: [{languageName: 'English', abilityLevel: 5}, {languageName: 'Japanese', abilityLevel: 4}],
                        coverLetter: 'Detail, deadline, and teamwork oriented professional with over four years of working in a native Japanese environment. Reliable and organized with the ability to communicate ideas effectively in both English and Japanese. Self-motivated and able to promptly respond to unexpected tasks.  Experience in the following: instruction, translation, leadership, and mentor-ship. Along with this, I hold a large interest in anything related to computers, and have been studying HTML, CSS, and JavaScript. I would like to utilize my experience and skills in a passionate enviroment.',
                        workExperience: [
                        {
                            jobTitle: 'Instructor',
                            company: 'Interac Kansai & South Central Co., Ltd',
                            startMonth: 9,
                            startYear: 2016,
                            endMonth: 'Present',
                            endYear: '',
                            responsibilities: [{
                                responsibilityName: 'Course Planning',
                                responsibilityExplanation: 'Successfully worked alongside native Japanese teachers to ensure productive lessons and exams for students.'
                            }, 
                            {
                                responsibilityName: 'Speech Contests',
                                responsibilityExplanation: 'Quickly ealuated students to high degree based on their English ability.'
                            },
                            {
                                responsibilityName: 'Translation',
                                responsibilityExplanation: 'Enthusiastically assisted Japanese teachers to correctly translate documents into English and Japanese.'
                            },
                            {
                                responsibilityName: 'English Camps ',
                                responsibilityExplanation: 'Supervised and coordinated daily activitivies for a class of 30 children of varied ages.'
                            }]
                        }],
                        isCertificatesEnabled: true,
                        certificates: [{
                            certificateName: 'JLPT N1',
                            date: 2019
                        }, 
                        {
                            certificateName: 'Japanese Driver\'s License',
                            date: 2017
                        }],
                        education: [
                            {
                                study: "East Asian Language and culture",
                                school: "Florida State University",
                                startMonth: 9,
                                startYear: 2011,
                                endMonth: 12,
                                endYear: 2015,
                                country: 'USA'
                            },
                            {
                                study: "Study Abroad",
                                school: "Kwansei Gakuin University",
                                startMonth: 9,
                                startYear: 2013,
                                endMonth: 9,
                                endYear: 2014,
                                country: 'Japan'
                            }
                        ]
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
                    <Route path='/' exact render={() => <Homepage /> } /> 
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
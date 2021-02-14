import React, {Fragment, Component} from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Pages/Homepage/Homepage';
import CreateResumePage from './Pages/CreateResumePage/CreateResumePage';
import ResumeHolderPage from './Pages/ResumeHolderPage/ResumeHolderPage';

class ResumeApplication extends Component {

        constructor(props) {
            super(props);
                this.state = {
                    userResumesArray: [],
                    previewResume: null
                }
        }

        componentWillMount() {
            localStorage.getItem('userResumesArray') && this.setState({
                userResumesArray: JSON.parse(localStorage.getItem('userResumesArray')),
                previewResume: null
            })
        }

        componentWillUpdate(nextProps, nextState) {
            localStorage.setItem('userResumesArray', JSON.stringify(nextState.userResumesArray))
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
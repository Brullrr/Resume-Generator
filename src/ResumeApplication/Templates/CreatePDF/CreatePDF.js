import { jsPDF } from "jspdf";
import createCircle from './createCircle';
import emailLogo from '../../Images/emailLogo.png';
import phoneLogo from '../../Images/phoneLogo.png';
import locationLogo from '../../Images/locationLogo.png';
import earthLogo from '../../Images/earthLogo.png';

const CreatePDF = (props) => {
    let doc = new jsPDF();
    doc.setFont("times", "normal");
    // doc.text(props, 35, 25)
    
    // console.log(props.profilePicture)

    let points = createCircle(5, 60)


    if(props) {
        if(props.profilePicture) {
            doc.addImage(URL.createObjectURL(props.profilePicture), "JPEG", 5, 5, 55, 55)
        }
    }
    



    points.map((element) =>{
        doc.setDrawColor(255,255,255)
        doc.setFillColor(255,255,255)
        return doc.triangle(element.sY, element.sX, element.mO, element.mT, element.eY, element.eX, "FD")
    })

    // Top Right rectangle
    doc.setDrawColor(0);
    doc.setFillColor(128, 128, 128);
    doc.roundedRect(65, 5, 140, 55, 3, 3, "FD");

    //Name 
    doc.setFontSize(22);
    doc.setTextColor(255, 255, 255);
    doc.text(props.profileName, 70, 15);

    // Line dividing Name and ccover letter
    doc.setLineWidth(.6) 
    doc.setDrawColor(255,255,255)
    doc.line(70, 17, 160, 17)
    //Cover Letter



    let coverLetterArray = props.coverLetter.split('')
    let firstLineEndNum = 65
    let secondLineEndNum = 65
    let thirdLineEndNum = 65
    let fourthLineEndNum = 65
    let fifthLineEndNum = 65
    let sixthLineEndNum = 65
    let seventhLineEndNum = 65
    let eighthLineEndNum = 65

    let totalLines = 0
    if(coverLetterArray.length <= 65) {
        console.log('under 65')
    } else {
    
        for(let i=0; i <= 65; i++) {
            if(coverLetterArray[firstLineEndNum] !== ' '){
                firstLineEndNum = firstLineEndNum - 1;
            }
        }
        totalLines = firstLineEndNum

        if(totalLines + 65 >= coverLetterArray.length) {
            console.log('under 65')
        } else {
            
        let coverLetterArrayTwo = coverLetterArray.slice(firstLineEndNum, firstLineEndNum + 65)
        for(let i=0; i <= coverLetterArray.length; i++) {
            if(coverLetterArrayTwo[secondLineEndNum] !== ' '){
                secondLineEndNum = secondLineEndNum - 1;
            }
        }
        totalLines = totalLines + secondLineEndNum

            if(totalLines + 65 >= coverLetterArray.length) {
                console.log('under 65')
            } else {
            let coverLetterArrayThree = coverLetterArray.slice( totalLines, totalLines + 65)
            for(let i=0; i <= coverLetterArray.length; i++) {
                if(coverLetterArrayThree[thirdLineEndNum] !== ' '){
                    thirdLineEndNum = thirdLineEndNum - 1;
                }
            }
            totalLines = totalLines + thirdLineEndNum

                if(totalLines + 65 >= coverLetterArray.length) {
                    console.log('under 65')
                } else {
                    
                let coverLetterArrayFour = coverLetterArray.slice( totalLines, totalLines + 65)
                for(let i=0; i <= coverLetterArray.length; i++) {
                    if(coverLetterArrayFour[fourthLineEndNum] !== ' '){
                        fourthLineEndNum = fourthLineEndNum - 1;
                    }
                }
                totalLines = totalLines + fourthLineEndNum

                    if(totalLines + 65 >= coverLetterArray.length) {
                        console.log('under 65')
                    } else {
                    
                    let coverLetterArrayFive = coverLetterArray.slice( totalLines, totalLines + 65)
                    for(let i=0; i <= coverLetterArray.length; i++) {
                        if(coverLetterArrayFive[fifthLineEndNum] !== ' '){
                            fifthLineEndNum = fifthLineEndNum - 1;
                        }
                    }
                    totalLines = totalLines + fifthLineEndNum

                        if(totalLines + 65 >= coverLetterArray.length) {
                            console.log('under 65')                           
                        } else {
                        let coverLetterArraySix = coverLetterArray.slice( totalLines, totalLines + 65)
                        for(let i=0; i <= coverLetterArray.length; i++) {
                            if(coverLetterArraySix[sixthLineEndNum] !== ' '){
                                sixthLineEndNum = sixthLineEndNum - 1;
                            }
                        }
                        totalLines = totalLines + sixthLineEndNum

                            if(totalLines + 65 >= coverLetterArray.length) {
                            console.log('under 65')
                            } else {
                                let coverLetterArraySeven = coverLetterArray.slice( totalLines, totalLines + 65)
                                for(let i=0; i <= coverLetterArray.length; i++) {
                                    if(coverLetterArraySeven[seventhLineEndNum] !== ' '){
                                        seventhLineEndNum = seventhLineEndNum - 1;
                                    }
                                }
                                totalLines = totalLines + seventhLineEndNum


                                if(totalLines + 65 >= coverLetterArray.length) {
                                    console.log('under 65')
                                } else {
                                    let coverLetterArrayEight = coverLetterArray.slice( totalLines, totalLines + 65)
                                    for(let i=0; i <= coverLetterArray.length; i++) {
                                        if(coverLetterArrayEight[eighthLineEndNum] !== ' '){
                                            eighthLineEndNum = eighthLineEndNum - 1;
                                        }
                                    }
                                    totalLines = totalLines + eighthLineEndNum
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    let coverLetterFirstLineArray = coverLetterArray.slice(0,firstLineEndNum)
    let coverLetterFirstLineString = coverLetterFirstLineArray.join('')
    let coverLetterSecondLineArray = coverLetterArray.slice(firstLineEndNum, secondLineEndNum + firstLineEndNum)
    let coverLetterSecondLineString = coverLetterSecondLineArray.join('').trim()
    let coverLetterThirdLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum, thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterThirdLineString = coverLetterThirdLineArray.join('').trim()

    let coverLetterFourthLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum + thirdLineEndNum, fourthLineEndNum + thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterFourthLineString = coverLetterFourthLineArray.join('').trim()

    let coverLetterFifthLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum + thirdLineEndNum + fourthLineEndNum, fifthLineEndNum + fourthLineEndNum + thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterFifthLineString = coverLetterFifthLineArray.join('').trim()

    let coverLetterSixthLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum + thirdLineEndNum + fourthLineEndNum + fifthLineEndNum, sixthLineEndNum + fifthLineEndNum + fourthLineEndNum + thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterSixthLineString = coverLetterSixthLineArray.join('').trim()

    let coverLetterSeventhLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum + thirdLineEndNum + fourthLineEndNum + fifthLineEndNum + sixthLineEndNum, seventhLineEndNum + sixthLineEndNum + fifthLineEndNum + fourthLineEndNum + thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterSeventhLineString = coverLetterSeventhLineArray.join('').trim()

    let coverLetterEighthLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum + thirdLineEndNum + fourthLineEndNum + fifthLineEndNum + sixthLineEndNum + seventhLineEndNum, eighthLineEndNum + seventhLineEndNum + sixthLineEndNum + fifthLineEndNum + fourthLineEndNum + thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterEighthLineString = coverLetterEighthLineArray.join('').trim()




    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterFirstLineString, 72, 23);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterSecondLineString, 72, 28);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterThirdLineString, 72, 33);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterFourthLineString, 72, 38);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterFifthLineString, 72, 43);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterSixthLineString, 72, 48);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterSeventhLineString, 72, 53);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterEighthLineString, 72, 58);







    //Contacts area
    doc.addImage(emailLogo, "JPEG", 6, 65, 4, 4)

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(props.contactInformation.email, 5, 75);

    doc.addImage(phoneLogo, "JPEG", 6, 78, 4, 4)

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(props.contactInformation.phoneNumber.toString(), 5, 88);

    doc.addImage(locationLogo, "JPEG", 6, 91, 4, 4)


    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text(props.contactInformation.location, 5, 101);

    doc.addImage(earthLogo, "JPEG", 6, 104, 4, 4)


    doc.setFontSize(8);
    doc.setTextColor(0, 0, 0);
    doc.text(props.contactInformation.linkdIn, 5, 112);


    ///skill title
    doc.setFontSize(18);
    doc.setTextColor(109, 109, 109);
    doc.text("Skills", 7, 130);

    doc.setLineWidth(.8)
    doc.setDrawColor(109,109,109)
    doc.line(5, 132, 55, 132)


    // rectangle skill
    let startingSkillBorderY = 135;
    let startingSkillTextY = 141;
    let skillsCreatedArray = [];
    props.skills.forEach(element => {
        skillsCreatedArray.push(doc.setDrawColor(0))
        skillsCreatedArray.push(doc.setFillColor(109, 109, 109))
        skillsCreatedArray.push(doc.roundedRect(7.5, startingSkillBorderY, 40, 8, 3, 3, "FD"))
        skillsCreatedArray.push(doc.setFontSize(13))
        skillsCreatedArray.push(doc.setTextColor(255, 255, 255))
        skillsCreatedArray.push(doc.text(element, 10, startingSkillTextY))
        startingSkillBorderY = startingSkillBorderY + 10
        startingSkillTextY = startingSkillTextY + 10
    })
    skillsCreatedArray.map(element => element);



    //end Skill
    
    let isPageTwoOpen = false 

    // Language 
    let languageArray = [];
    if(props.isLanguageEnabled) {
        let startingLanguageTextY = startingSkillTextY +15
        let startingLanguageBallY = startingSkillTextY + 23

    //Language Title
    doc.setFontSize(18);
    doc.setTextColor(109, 109, 109);
    doc.text("Languages", 7,  3 + startingSkillTextY);

    doc.setLineWidth(.8)
    doc.setDrawColor(109,109,109)
    doc.line(5, 7 + startingSkillTextY, 55, 7 + startingSkillTextY)
    // end Language Title

        props.languages.forEach((element) => {
            languageArray.push(doc.setFontSize(18))
            languageArray.push(doc.setTextColor(0, 0, 0))
            languageArray.push(doc.text(element.languageName, 7, startingLanguageTextY))

            let abilityLvl = element.abilityLevel
            let leftovers = 5 - abilityLvl

            for(let i=0; i< abilityLvl; i++) {
                languageArray.push(doc.setFillColor(109, 109, 109))
                languageArray.push(doc.circle(10 + i*8, startingLanguageBallY - 2, 3, 'FD'))
            }

            for(let i=0; i< leftovers; i++) {
                languageArray.push(doc.setFillColor(255, 255, 255))
                languageArray.push(doc.circle(10 + i *8 + abilityLvl*8, startingLanguageBallY - 2, 3, 'FD'))
            }
            if(startingLanguageTextY >= 250) {
                doc.addPage("a4", "0");
                isPageTwoOpen = true
                startingLanguageTextY = 0;
                startingLanguageBallY = 8;
            }
            startingLanguageTextY = startingLanguageTextY + 17
            startingLanguageBallY = startingLanguageBallY + 17
            
        })
    languageArray.map(element => element)

    }
    
    //end Language
    doc.setPage(1)
    let rightSideY = 0
    let workExperienceArray = []

    if(props.workExperience[0]){
        // Work History Title
        // text line          text text text text circle text
        doc.setFontSize(18);
        doc.setTextColor(109, 109, 109);
        doc.text("Work Experience", 102, 70);
    
        doc.setLineWidth(.8)
        doc.setDrawColor(109,109,109)
        doc.line(70, 72, 200, 72)
        //end Work Title


        props.workExperience.forEach( (element) => {
            workExperienceArray.push(doc.setFontSize(16))
            workExperienceArray.push(doc.setTextColor(109, 109, 109))
            workExperienceArray.push(doc.text(element.jobTitle, 72, rightSideY + 80))

            workExperienceArray.push(doc.setFontSize(18))
            workExperienceArray.push(doc.setTextColor(0, 0, 0))
            workExperienceArray.push(doc.text(element.company, 70, rightSideY + 88))

            workExperienceArray.push(doc.setFontSize(9))
            workExperienceArray.push(doc.setTextColor(109, 109, 109))
            doc.setFont("times", "italic");
            workExperienceArray.push(doc.text(element.startMonth.toString() + '/' + element.startYear.toString() + ' - ' + element.endMonth.toString() + '/' + element.endYear.toString(), 72, rightSideY + 93))
            doc.setFont("times", "normal");
           

            let responsibilityY = rightSideY + 99
            element.responsibilities.forEach ( (responsibility) => {
                let sliceEnd = 40
                for(let i=0; i<=sliceEnd; i++){
                    if(responsibility.responsibilityExplanation[sliceEnd] !== ' ') {
                        sliceEnd = sliceEnd - 1;
                        console.log( ' This responsibilitys end is   : '  + responsibility.responsibilityExplanation[sliceEnd])
                        console.log('SliceEnd was lowered to :   ' + sliceEnd)
                    } else if (sliceEnd === 1) {
                        sliceEnd = 40;
                        break;
                    } else {
                        console.log('IT BROKE')
                        break;
                    }
                }
                
                workExperienceArray.push(doc.setDrawColor(0, 0, 0))
                workExperienceArray.push(doc.setLineWidth(0))
                workExperienceArray.push(doc.setFillColor(255,255,255))
                workExperienceArray.push(doc.circle(76, responsibilityY - 1, 1, 'FD'))
                
                workExperienceArray.push(doc.setFontSize(12))
                workExperienceArray.push(doc.setTextColor(0, 0, 0))
                workExperienceArray.push(doc.text(responsibility.responsibilityName + ' - ' + responsibility.responsibilityExplanation.slice(0, sliceEnd), 85, responsibilityY))



                workExperienceArray.push(doc.setFontSize(12))
                workExperienceArray.push(doc.setTextColor(0, 0, 0))
                workExperienceArray.push(doc.text(responsibility.responsibilityExplanation.slice(sliceEnd), 80, responsibilityY + 5))

                responsibilityY = responsibilityY + 10
                rightSideY = rightSideY + 12  
            } )
            rightSideY = rightSideY + 20    
        })
    }
    workExperienceArray.map(element => element)



    if(props.education[0]){


        // education title
        doc.setFontSize(18);
        doc.setTextColor(109, 109, 109);
        doc.text("Education", 108, rightSideY + 88);
    
        doc.setLineWidth(.8)
        doc.setDrawColor(109,109,109)
        doc.line(72, rightSideY + 90, 200, rightSideY + 90)
        //end education Title

        props.education.forEach((element) => {
            doc.setFontSize(19);
            doc.setTextColor(109, 109, 109)
            doc.text(element.study, 73, rightSideY + 98)

            doc.setFontSize(17);
            doc.setTextColor(0, 0, 0)
            doc.text(element.school, 76, rightSideY + 105)
            
            doc.setFontSize(10);
            doc.setTextColor(109, 109, 109)
            doc.text(element.country, 185, rightSideY + 105)


            doc.setFontSize(9);
            doc.setTextColor(109, 109, 109);
            doc.setFont("times", "italic");
            doc.text(element.startMonth + "/" + element.startYear.toString() + " - " + element.endMonth + "/" + element.endYear, 72, rightSideY + 110);
            doc.setFont("times", "normal");
            rightSideY = rightSideY + 23

            if(rightSideY >= 190) {
                if(!isPageTwoOpen){
                    doc.addPage("a4", "200");
                    
                } else {
                    doc.setPage(2)
                }
                rightSideY = -80
                
            }
        })

        rightSideY = rightSideY + 10
    }

    if(props.certificates[0]){
        if(rightSideY >= 190) {
            if(!isPageTwoOpen){
                doc.addPage("a4", "200");
                
            } else {
                doc.setPage(2)
            }
            rightSideY = -80
            
        }

        
        //certificate title
        doc.setFontSize(18);
        doc.setTextColor(109, 109, 109);
        doc.text("Certificates", 108, rightSideY + 100);
    
        doc.setLineWidth(.8)
        doc.setDrawColor(109,109,109)
        doc.line(72, rightSideY + 102, 200, rightSideY + 102)
        //end certificate Title

        props.certificates.forEach((element) => {

            doc.setFontSize(16);
            doc.setTextColor(0, 0, 0);
            doc.text(element.certificateName, 72, rightSideY + 109)
            
            
            doc.setFontSize(14)
            doc.setTextColor(109, 109, 109)
            doc.text(element.date.toString(), 185, rightSideY + 109)

            rightSideY = rightSideY + 7  
            if(rightSideY >= 190) {
                doc.addPage("a4", "0");
                rightSideY = -90;
            }
        })

    }


    
    
    
     doc.save("a4.pdf");
     
}

export default CreatePDF
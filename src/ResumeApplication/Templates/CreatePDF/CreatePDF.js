import { jsPDF } from "jspdf";
import createCircle from './createCircle';
import emailLogo from '../../Images/emailLogo.png';
import phoneLogo from '../../Images/phoneLogo.png';
import locationLogo from '../../Images/locationLogo.png';
import earthLogo from '../../Images/earthLogo.png';

const CreatePDF = (props) => {
    let doc = new jsPDF();
    // doc.text(props, 35, 25)
    
    // console.log(props.profilePicture)

    let points = createCircle(5, 60)



    //  doc.addImage(URL.createObjectURL(props.profilePicture), "JPEG", 10, 10, 70, 70)



    points.map((element) =>{
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

        let coverLetterArrayTwo = coverLetterArray.slice(firstLineEndNum, firstLineEndNum + 65)

        for(let i=0; i <= coverLetterArray.length; i++) {
            if(coverLetterArrayTwo[secondLineEndNum] !== ' '){
                secondLineEndNum = secondLineEndNum - 1;
            }
        }

        totalLines = totalLines + secondLineEndNum

        let coverLetterArrayThree = coverLetterArray.slice( totalLines, totalLines + 65)

        for(let i=0; i <= coverLetterArray.length; i++) {
            if(coverLetterArrayThree[thirdLineEndNum] !== ' '){
                thirdLineEndNum = thirdLineEndNum - 1;
            }
        }

    }
    
    let coverLetterFirstLineArray = coverLetterArray.slice(0,firstLineEndNum)
    let coverLetterFirstLineString = coverLetterFirstLineArray.join('')
    let coverLetterSecondLineArray = coverLetterArray.slice(firstLineEndNum, secondLineEndNum + firstLineEndNum)
    let coverLetterSecondLineString = coverLetterSecondLineArray.join('').trim()
    let coverLetterThirdLineArray = coverLetterArray.slice(firstLineEndNum + secondLineEndNum, thirdLineEndNum + secondLineEndNum + firstLineEndNum)
    let coverLetterThirdLineString = coverLetterThirdLineArray.join('').trim()
    console.log(coverLetterThirdLineString)

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterFirstLineString, 72, 23);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterSecondLineString, 72, 28);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text(coverLetterThirdLineString, 72, 33);







    //Contacts area
    doc.addImage(emailLogo, "JPEG", 20, 82, 4, 4)

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("brullrr@gmail.com", 20, 90);

    doc.addImage(phoneLogo, "JPEG", 20, 92, 4, 4)

    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("090-9945-5750", 20, 100);

    doc.addImage(locationLogo, "JPEG", 20, 102, 4, 4)


    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("Aichi, Japan", 20, 110);

    doc.addImage(earthLogo, "JPEG", 20, 112, 4, 4)


    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0);
    doc.text("www.github.io/brullrr/Website", 20, 120);

    doc.setFontSize(18);
    doc.setTextColor(109, 109, 109);
    doc.text("Skills", 22, 130);

    doc.setLineWidth(.8)
    doc.setDrawColor(109,109,109)
    doc.line(20, 132, 70, 132)


    // rectangle skill

    doc.setDrawColor(0);
    doc.setFillColor(109, 109, 109);
    doc.roundedRect(22.5, 135, 40, 8, 3, 3, "FD");
    doc.setFontSize(15);
    doc.setTextColor(255, 255, 255);
    doc.text("Microsoft Word", 25, 141);

    //end Skill
    
    //Language Title
    doc.setFontSize(18);
    doc.setTextColor(109, 109, 109);
    doc.text("Languages", 22, 150);

    doc.setLineWidth(.8)
    doc.setDrawColor(109,109,109)
    doc.line(20, 152, 70, 152)
    // end Language Title

    // Language 

    doc.setFontSize(18);
    doc.setTextColor(0, 0, 0);
    doc.text("English", 22, 160);

    doc.setFillColor(109, 109, 109)
    doc.circle(25, 165, 3, 'FD')

    doc.setFillColor(109, 109, 109)
    doc.circle(33, 165, 3, 'FD')

    doc.setFillColor(109, 109, 109)
    doc.circle(41, 165, 3, 'FD')
    
    doc.setFillColor(109, 109, 109)
    doc.circle(49, 165, 3, 'FD')
    
    doc.setFillColor(109, 109, 109)
    doc.circle(57, 165, 3, 'FD')

    //end Language


    // Work History Title
        // text line          text text text text circle text
        doc.setFontSize(18);
        doc.setTextColor(109, 109, 109);
        doc.text("Work Experience", 122, 90);
    
        doc.setLineWidth(.8)
        doc.setDrawColor(109,109,109)
        doc.line(100, 92, 190, 92)
    //end Work Title

    //add Work experience
        doc.setFontSize(16);
        doc.setTextColor(109, 109, 109);
        doc.text("Nurse", 102, 100);
        
        doc.setFontSize(18);
        doc.setTextColor(0, 0, 0);
        doc.text("Sakura General Hospital", 100, 108);

        doc.setFontSize(8);
        doc.setTextColor(109, 109, 109);
        doc.text("04/2016 -", 102, 113);
        
        doc.setFontSize(8);
        doc.setTextColor(109, 109, 109);
        doc.text("09/2019", 115, 113);

        doc.setDrawColor(0, 0, 0)
        doc.setLineWidth(0)
        doc.setFillColor(255,255,255)
        doc.circle(105, 118, 1, 'FD')

        doc.setFontSize(12);
        doc.setTextColor(80, 80, 80);
        doc.text("Patient Care  -", 110, 120);

        doc.setFontSize(12);
        doc.setTextColor(109, 109, 109);
        doc.text("Attended to a room of 5 patients", 140, 120);
        doc.setFontSize(12);
        doc.setTextColor(109, 109, 109);
        doc.text("Extra info if any, but no more than two lines", 115, 125);

    


     doc.save("a4.pdf");
}

export default CreatePDF
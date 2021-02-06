

const createCircle = (startPoint, endPoint) => {

    let finalArray = []

    let interval = endPoint/13


    let quadrantOneStartX = interval * 7
    let quadrantOneEndY = interval * 2

    for(let i=0; i<6; i++) {
        finalArray.push({
            sY: startPoint,
            sX: quadrantOneStartX,
            mO: startPoint,
            mT: startPoint, 
            eY: quadrantOneEndY,
            eX: startPoint,
        })  
        quadrantOneStartX = quadrantOneStartX - interval
        quadrantOneEndY = quadrantOneEndY + interval
    }

    let quadrantTwoStartY = interval * 7
    let quadrantTwoEndX = interval * 2
    for(let i=0; i<6; i++) {
        finalArray.push({
            sY: quadrantTwoStartY,
            sX: startPoint,
            mO: endPoint,
            mT: startPoint,
            eY: endPoint,
            eX: quadrantTwoEndX,
        })


        quadrantTwoStartY = quadrantTwoStartY + interval
        quadrantTwoEndX = quadrantTwoEndX + interval
    }


    let quadrantThreeStartX = interval * 7
    let quadrantThreeEndY = interval * 12
    for(let i=0; i<6; i++) {
        finalArray.push({
            sY: endPoint,
            sX: quadrantThreeStartX,
            mO: endPoint,
            mT: endPoint,
            eY: quadrantThreeEndY,
            eX: endPoint,
        })


        quadrantThreeStartX = quadrantThreeStartX + interval
        quadrantThreeEndY = quadrantThreeEndY - interval
    }


    let quadrantFourStartX = interval * 7
    let quadrantFourEndY = interval * 2
    for(let i=0; i<6; i++) {
        finalArray.push({
            sY: startPoint,
            sX: quadrantFourStartX,
            mO: startPoint,
            mT: endPoint,
            eY: quadrantFourEndY,
            eX: endPoint,
        })


        quadrantFourStartX = quadrantFourStartX + interval
        quadrantFourEndY = quadrantFourEndY + interval
    }

    return finalArray
}

export default createCircle
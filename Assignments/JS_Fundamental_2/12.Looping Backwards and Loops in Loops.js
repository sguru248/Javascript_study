

const listOfNeighbours =[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for(let i=0; i<listOfNeighbours.length; i++){
    let temp = listOfNeighbours[i];
    for( let j=0; j<temp.length; j++){
        console.log(`Neighbor:${temp[j]}`)
    }
}
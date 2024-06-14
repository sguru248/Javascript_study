const neighbours = ['india','china','srilanka'];
console.log(neighbours);

neighbours.push('utopia')
console.log(neighbours)

neighbours.pop()
console.log(neighbours)

if( neighbours.includes('germeany')){
    console.log('Germany Include in the country list')
}else{
    console.log('Probably not a central european country :D')
}

neighbours[neighbours.indexOf('china')] = 'pakistan'

console.log(neighbours)
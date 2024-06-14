//

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

//const shouldDrive = hasDriversLicense && hasGoodVision;

/*if (hasDriversLicense && hasGoodVision){
    console.log('Sara is able to drive!')
}else{
    console.log('someone else drive..')
}*/

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired){
    console.log('Sara is able to drive!')
}else{
    console.log('someone else drive..')
}
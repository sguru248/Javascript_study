// Swiitch Statement

const day = "thursday";

switch (day) {
  case "monday":
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Preparing theory video");
    break;
  case "Wednesday":
  case "thursday":
    console.log("Write a Code Example");
    break;
  case "Friday":
    console.log("Recording Video");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a Valid Day");
}

/* if(day === 'monday'){
    console.log('Plan course structure');
    console.log('Go to coding meetup');
}else if (day ==='tuesday') {
    console.log('Preparing theory video');
}else if ((day === 'Wednesday') || (day === 'thursday')) {
    console.log('Write a code Example');
}else if (day === 'Friday'){
    console.log ('Recording Video');
}else if (day === 'Saturday' || day === 'Sunday'){
    console.log ('Enjoy the weekend');
}else{
    console.log('Not a Valid Day');
} */

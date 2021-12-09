function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400) {
    return `This one is on me!`}
  else if (rideLength < 2500 && rideLength > 2000)
    return `I will gladly take your thirty bucks.`
  else if (rideLength > 2500)
    return `No can do.`
}

function ternaryCheckCity(city){
  return (city === 'NYC') ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case "generous"
      response = 'Thank you so much.'
      break;
    case 'not as generous'
      response = 'Thank you.'
      break;
    case 'thanks for everything'
      response = 'Bye.'
      break;
  return response
  }
}

  // function switchOnCharmFromTip(tip){
  //   switch(tip) {
  //     case "generous"
  //       return 'Thank you so much.'

  //     case 'not as generous'
  //       return 'Thank you.'

  //     case 'thanks for everything'
  //       return 'Bye.'

  //   }
  

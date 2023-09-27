function scuberGreetingForFeet(distance){
  let result;
  if (distance <= 400) {
    result = 'This one is on me!';
  } else if (distance > 400 && distance <= 2000) {
    result = 'That will be twenty bucks.';
  } else if (distance > 2000 && distance < 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (distance >= 2500) {
    result = 'No can do.';
  }
  return result;
}

function ternaryCheckCity(city) {
  let result;
  result = city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
  return result;
}

console.log('NYC')
console.log('Pittsburgh')

function switchOnCharmFromTip(tip){
  let result
switch (tip) {
  case 'generous': 
    result = 'Thank you so much.'
  break;
  case 'not as generous': 
    result = 'Thank you.'
  break;
  default: 
    result = 'Bye.'
}
return result
}
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function simpleMultiplication(number) {
    // use if statement and % to check for even #
  if(number % 2 === 0){
    return number * 8;
  }else{ //only two conditions no need to reiterate
    return number * 9;
  }
}
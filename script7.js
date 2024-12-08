// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    let newArr = [];
      //converting to string
      const convert =n.toString() //"35231"
      //splitting digits before reversing them
      const ew = convert.split('').reverse()//['1','3','2,5,'3']
      ew.forEach(function(eachstring){ //eachSTrimg = '1' '2' '3 '
        newArr.push(parseInt(eachstring)) //newArr = [1, 3, 4, 6,] //parseint to switch from str to number
      
      })
       return newArr;
    }
    //n=35231
    //not a lot of methods on 
    //3 convert to string
    
    //input a number
    //output an array that is reversed

    //more on the challenging side! i learned that you cannot reverse numbers, so you must do string conversions first. will be very helpful in the future.
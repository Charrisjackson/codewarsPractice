// make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.
var min = function(list){
    list.sort((a,b) => a-b) // sorting list with sort ascending syntax
    return list[0]; //returning first element of list array (smallest)
}

var max = function(list){
     list.sort((a,b) => b-a) //sorting list with sort descending syntax
    return list[0]; //returning first element in array (largest)
}
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    if(n < 0 || m < 0){ //using or operator  bc of or keyword in instructions
      return 0;
    }else{
      return n * m;
    }
  }
  
  //i enjoyed how the instructions on this problem sort of gave me direction of where to start. their usage of "or" gave me an idea tpo use the or operator
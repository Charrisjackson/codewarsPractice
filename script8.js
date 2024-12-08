function colorOf(r,g,b){
    //using toString(16) to convert rgb values into hexidecimal
    let r1 = r.toString(16).padStart(2,'0');
    //attempted using pad end because i recieved error messages showing that the strings werent long enough, hex #s are usually in a string of 8 char
   //pad start works better for single numbers so we get 01 instead of 10 and so on
    //pad start adds leading zeros for values less than 2 
    let g1 = g.toString(16).padStart(2,'0');
  
    
    let b1 = b.toString(16).padStart(2,'0');
  
    
    let hex = r1 + g1 + b1;
    let hexfinal = '#' + hex;
    return hexfinal;
    
  
    
    
  }
  //good bit of trial and error on this one, initially assumed it was easy, seeing as the hex conversion was given. nice challenge!
  
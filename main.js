function play(position){
    var old_pos=0, count=0;
    while(position<100){
      var n=prompt("Throw the Dice:");
      var num=getRandomInt(7);
      if(num==0)
      num++;
      if(position+num<=100){
        old_pos=position;
        position=position+num;
      }
      console.log("Dice Rolled : "+num);
      count++;
      console.log("{"+position+", "+old_pos+", "+num+"}");
      
    }
  console.log("number of count: "+count);
  }
  function getRandomInt(max){
    return Math.floor(Math.random()*max);
    
  }
  
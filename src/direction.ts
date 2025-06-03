enum Direction {
    Left = "left",
    Right = "right",
    Up = "up",
    Down = "down"
}


const direction = (dir : Direction): void => {
      if(dir === Direction.Down){
        console.log("Down");
      }else if(dir === Direction.Left){
        console.log("left");
      }else if(dir === Direction.Right){
        console.log("right");
      }else{
        console.log("upp"); 
      }
}

direction(Direction.Down);
direction(Direction.Left)
direction(Direction.Up)
direction(Direction.Right)
const MAZE_SIZE = 5;
const MAZE_UNIT = ["□","■","★"];

const DIRECTION = [
  {
    direction : "LEFT",
    colMove : -1,
    rowMove : 0,
  },

  {
    direction : "TOP",
    colMove : 0,
    rowMove : -1,
  },

  {
    direction : "RIGHT",
    colMove : +1,
    rowMove : 0,
  },

  {
    direction : "BOTTOM",
    colMove : 0,
    rowMove : +1,
  },
];

let maze = []; initMaze();
let previousUnit = "□";
let currentRow = 0, currentCol = 0;

$(function () {  
  showMaze();
  $(document).on("keydown", handleKeyDown);
});

function handleKeyDown(e) {  
  let index = 0;

  switch(e.keyCode) {
    case 37: index = 0;
      break;
    case 38: index = 1;
      break;
    case 39: index = 2;
      break;
    case 40: index = 3;
      break;
  }

  if(!canMove(currentRow, currentCol, DIRECTION[index].rowMove, DIRECTION[index].colMove)) {
    $("#current-move").text("You Can't Go There!");
  } else {
    maze[currentRow][currentCol] = previousUnit;

    currentRow += DIRECTION[index].rowMove;
    currentCol += DIRECTION[index].colMove;

    previousUnit = maze[currentRow][currentCol];

    maze[currentRow][currentCol] = "★";

    $("#current-move").text(DIRECTION[index].direction);

    if(currentRow == MAZE_SIZE-1 && currentCol == MAZE_SIZE-1) {
      $("#current-move").text("Congratulation!");
    }
  }

  showMaze();
}

function canMove(row, col, rowPlus, colPlus) {  
  if(0<=row+rowPlus && row+rowPlus< MAZE_SIZE && 0<=col+colPlus && col+colPlus< MAZE_SIZE && maze[row+rowPlus][col+colPlus]!="■") {
    return true;
  }

  return false;
}

function initMaze() {  
  for(let i=0 ; i<MAZE_SIZE ; i++) {

    let tmp = [];
    for(let j=0 ; j<MAZE_SIZE ; j++) {
      tmp.push(MAZE_UNIT[(Math.floor(Math.random()*2))]);
    }
  
    maze.push(tmp);
  }

  maze[0][0] = "★";
}

function showMaze() {  
  let tmp = "";

  for(let i=0 ; i<MAZE_SIZE ; i++) {
    for(let j=0 ; j<MAZE_SIZE ; j++) {
      tmp += maze[i][j];
    }

    tmp += "\n";
  }

  $("#show-maze").text(tmp);
}
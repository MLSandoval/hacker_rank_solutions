function minimumMoves(grid, startY, startX, goalY, goalX) {
  let xDiff, yDiff
  let movesStack = []

  yDiff = startY - goalY
  xDiff = startX - goalX

  for(let i = startX; i <= grid.length; i++){


    for(let j = startY; j <= grid.length; j++){
      
      if(grid[i][j + 1] && grid[i][j + 1] !== 'X'){
        movesStack.push([i, j+1])
      }else if(i === goalX && j === goalY){
        
      }else{
        break
      }


    }

  }



  function findBlocks(){}

}


let sq = [
  '.X.',
  '.X.',
  '...',
]

console.log(minimumMoves(sq, 0, 0, 0, 2))
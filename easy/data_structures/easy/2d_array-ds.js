function hourglassSum(arr) {
  let totals = []
  let hourglass = 0
  for(let row = 0; row < arr.length; row++){
    for(let col = 0; col < arr[row].length; col++){
      if(((arr.length) - row) >= 3 && ((arr[row].length) - col) >= 3){
        hourglass = arr[row][col] + arr[row][col + 1] + arr[row][col + 2] + arr[row + 1][col + 1] + arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2]
      }
      totals.push(hourglass)
    }
  }
  return Math.max(...totals)
}
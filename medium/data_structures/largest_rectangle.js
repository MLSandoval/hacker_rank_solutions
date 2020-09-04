function largestRectangle(h) {
  let heightStack = [h[0]]
  let positionStack = [0]
  let curH
  let pos
  let max = Number.NEGATIVE_INFINITY
  let tempP
  let tempH
  let tempSize

  for( pos = 0; pos < h.length; pos++){
    curH = h[pos]
    if(heightStack.length === 0 || curH > heightStack[heightStack.length - 1]){
      heightStack.push(curH)
      positionStack.push(pos)
    }else if(curH < heightStack[heightStack.length - 1]){
      while(heightStack.length && curH < heightStack[heightStack.length - 1]){
        tempP = positionStack.pop()
        tempH = heightStack.pop()
        tempSize = tempH * (pos - tempP)
        max = Math.max(tempSize, max)
        console.log('Max: ', max) 
      }
      heightStack.push(curH)
      positionStack.push(tempP)
    }
    while(heightStack.length){
      tempP = positionStack.pop()
        tempH = heightStack.pop()
        tempSize = tempH * (pos - tempP)
        max = Math.max(tempSize, max)
        console.log('Max: ', max) 
      }
    heightStack.push(curH)
    positionStack.push(tempP)
  }
  return max
}


let input = [1,2,3,4,5]
let input2 = [1, 3, 5, 9, 11]
let input3 = [11,11,10,10,10]
let input4 = [10, 10, 10, 11, 11,]
let input5 = [9, 1, 5, 3, 6, 8, 11]
let input6 = [1, 3, 5, 6, 8, 9, 11]

console.log('input 1 in order', largestRectangle( input))
console.log('input2 in order', largestRectangle( input2))

console.log('input3 out of order', largestRectangle(input3))
console.log('input4 in order', largestRectangle(input4))

console.log('input5 out of order', largestRectangle(input5))
console.log( 'input6 in order', largestRectangle(input6))
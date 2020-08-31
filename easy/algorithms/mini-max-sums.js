const miniMaxSum = (arr) => {  
  const shellSorty = () => {
    let gap = (arr.length / 2).toFixed(0)
    while(gap > 0){
      for(let i = gap; i < arr.length; i++){
        let increment = i
        let temp = arr[i]

        while(increment >= gap && arr[increment-gap] > temp){
          arr[increment] = arr[increment-gap]
          increment = increment - gap
        }

        arr[increment] = temp
      }

      if(gap == 2){
        gap = 1
      }else{
        gap = parseInt(gap*5 / 11)
      }
    }
    return arr
  }

  let sortedArr = shellSorty(arr)

  let smallestSum = sortedArr.slice(0, 4).reduce((cur, acc)=>acc+cur)
  let largestSum = sortedArr.slice(-4).reduce((cur, acc)=>acc+cur)

  console.log(smallestSum + ' ' + largestSum)
}
  
miniMaxSum([5, 4, 3, 1, 2])




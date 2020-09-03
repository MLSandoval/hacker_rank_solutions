function processData(input) {
  const queue = []
  let arr = input.split('\n')
  arr.shift()
  arr.forEach(val=> {
    if(parseInt(val[0]) === 1){
      let temp = val.split(' ')
      queue.push(temp[1])
    }else if(parseInt(val) === 2){
      queue.shift()
    }else if(parseInt(val) === 3){
      console.log(queue[0])
    }
  })
} 

let input = `10
1 42
2
1 14
3
1 28
3
1 60
1 78
2
2
`

processData(input)
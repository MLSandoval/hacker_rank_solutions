function dynamicArray(n, queries) {
  let seqList = new Array()
  for(let i = 0; i < n; i++)
    seqList.push([])
  let lastAnswer = 0
  let lastAnswers = []

  for(let i = 0; i < queries.length; i++){
    let currentQuery = queries[i]
    let [q, x, y] = currentQuery
    let seqIndex = (x ^ lastAnswer) % n
    let seq = seqList[seqIndex]

    if(q === 1){
      seq.push(y)
    }else{
      lastAnswer = seq[y % seq.length]
      console.log(lastAnswer)
      lastAnswers.push(lastAnswer)
    }

  }
  return lastAnswers
}



let n1 = 2
let seq1 = [ 
  [ 1, 0, 5 ], 
  [ 1, 1, 7 ], 
  [ 1, 0, 3 ], 
  [ 2, 1, 0 ], 
  [ 2, 1, 1 ] 
]

dynamicArray(n1, seq1)
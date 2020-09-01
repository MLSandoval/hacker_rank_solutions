function matchingStrings(strings, queries) {
  console.log('strings: ', strings)
  console.log('queries: ', queries)
  let results = new Array(queries.length).fill(0)

  for(let i = 0; i < queries.length; i++){
    let query = queries[i]
    let queryReg = new RegExp(`\\b${query}\\b`)
    for(let j = 0; j < strings.length; j++){
      let string = strings[j]
      
      console.log('queryReg: ', queryReg)
      console.log('string: ', string)
      console.log('string.search(queryReg)', string.search(queryReg))

      if(string.search(queryReg) !== -1)
        results[i]++
    }
  }
  console.log(results)
}

let strangz = [
  'aba',
  'baba',
  'aba',
  'xzxb',
]
let queriez = [
  'aba',
  'xzxb',
  'ab',
]
matchingStrings(strangz, queriez)
function matchingStrings(strings, queries) {
  let results = new Array(queries.length).fill(0)

  for(let i = 0; i < queries.length; i++){
    let query = queries[i]
    let queryReg = new RegExp(`\\b${query}\\b`)
    for(let j = 0; j < strings.length; j++){
      let string = strings[j]

      if(string.search(queryReg) !== -1)
        results[i]++
    }
  }
  return results
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
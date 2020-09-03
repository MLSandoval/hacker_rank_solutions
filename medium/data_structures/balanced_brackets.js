function isBalanced(s) {
  let arr = s.split('')
  let finalArr = []
  while(arr[0] && !finalArr[0] ){
    let bal = arr.findIndex((element, index, array)=>{
      let opposite
      
      switch(element){
        case '{':
          opposite = '}'
          break
        case '[':
          opposite = ']'
          break
        case '(':
          opposite = ')'
          break
      }

      if(opposite === arr[index + 1]){
        arr.splice(index, 2)
        return true
      }

      if(index === (arr.length - 2) && opposite !== arr[arr.length - 1] ){
        finalArr = arr.splice(0, arr.length)
      }
      return false
    })

  }
  if(arr[0] && !arr[1] || finalArr[0]){
    return 'NO'
  }
  return 'YES'
}


let s1 = '{[()]}'
let s2 = '{[(])}'
let s3 = '{{[[(())]]}}[]'

console.log(isBalanced(s1))
console.log(isBalanced(s2))
console.log(isBalanced(s3))
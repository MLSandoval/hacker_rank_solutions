function timeInWords(h,m){
  let mN = m
  if (m && m > 30 ) 
     mN = 60 - m

  let translate = {
    0: "o' clock",
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twentyone',
    22: 'twentytwo',
    23: 'twentythree',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half'
  }
  let hLetter = translate[h]
  let mLetter = translate[mN]

  let output
  switch(true){
    case m === 0:
      output = hLetter + ' ' + mLetter
      break
    case m === 1:
      output = mLetter + ' minute past ' + hLetter
      break
    case m === 15:
      output = mLetter + ' past ' + hLetter
      break
    case m === 45: 
      output = mLetter + ' to ' + translate[h + 1]
      break
    case m === 59: 
      output = mLetter + ' minute to ' + (h === 12 ? 'one' : translate[h + 1])
      break
    case m === 30: 
      output = mLetter + ' past ' + hLetter
      break
    case m < 30: 
      output = mLetter + ' minutes past ' + hLetter
      break
    case m > 30:
      output = `${mLetter} minutes to ${h === 12 ? 'one' : translate[h + 1]}`
      break
    default: return 'mins not in range'
  }
  return output
}

// console.log(timeInWords(5, 47))
// console.log(numbersToLetters(3, 00))
// console.log(numbersToLetters(7, 15))
// console.log(timeInWords(2, 1))
// console.log(timeInWords(2, 45))
// console.log(timeInWords(12, 53))
// console.log(timeInWords(12, 59))
// console.log(timeInWords(5, 30))


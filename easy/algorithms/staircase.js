function staircase(n) {
  const hash = '#'
  const space = ' '

  for(let i = 1; i <= n; i++){
    console.log(`${space.repeat(n - i)}${hash.repeat(i)}`)
  }
}

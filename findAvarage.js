let arr = [1, [2, 3, 4], 5, [6, 7, 8, [9, 10, 11, [12]]], 13]

let findAvrRecursion = (arr) => {
  const reduce = (reduceArr) => reduceArr.reduce(([acc, sum], current) => {
    if (Array.isArray(current)) {
      const [newAcc, newSum] = reduce(current)

      return [acc + newAcc, sum + newSum]
    }
    return [++acc, sum + current]
  }, [0, 0])

  const [acc, sum] = reduce(arr)

  return sum / acc
}


let findAvr = (arr) => {
  let current = [...arr]
  let next = []
  let sum = 0
  let acc = 0

  while (current.length) {
    for (let value of current) {
      if (Array.isArray(value)) {
        next = next.concat(value)
      } else {
        sum += value
        acc++
      }
    }
    current = next
    next = []
  }

  return sum / acc
}

console.log(findAvr(arr))

const arr = []


for (let i = 0; i <= 1000000; i++) {
  arr.push(Math.floor(Math.random() * 100000))
}


const insertionSort = (arr) => {
  const result = [...arr]

  for (let i = 1; i < result.length; i++) {
    const current = result[i]

    let j = i - 1
    while (j > -1 && current < result[j]) {
      result[j + 1] = result[j]
      j--
    }
    result[j + 1] = current
  }

  return result
}

console.time()
console.log(insertionSort(arr))
console.timeEnd()
//3.2s
//7:04

const shellSort = (arr) => {
  const result = [...arr]
  let n = Math.floor(result.length / 2)


  while (n > 0) {
    for (let i = n; i < result.length; i += n) {
      const current = result[i]

      let j = i - n

      while (j > -1 && current < result[j]) {
        result[j + n] = result[j]
        j -= n
      }
      result[j + n] = current

    }
    n = Math.floor(n / 2)

  }

  return result
}

console.time()
console.log(shellSort(arr))
console.timeEnd()
//4.2s
//7:41

const bubbleSort = (arr) => {
  const result = [...arr]
  let sorted = false
  while (!sorted) {
    sorted = true
    for (let i = 1; i < result.length; i++) {
      if (result[i] < result[i - 1]) {
        sorted = false
        const temp = result[i - 1]
        result[i - 1] = result[i]
        result[i] = temp
      }
    }
  }

  return result
}
console.time()
console.log(bubbleSort(arr))
console.timeEnd()
//30.7s

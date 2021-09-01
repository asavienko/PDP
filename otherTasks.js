function getNeedArrayProperties(valuesArr, keysArr) {
  return valuesArr.map((obj) => Object.fromEntries(
    Object.entries(obj)
      .map(([key, value]) => {
        if (keysArr.includes(key)) {
          return [key, value]
        }
      })
      .filter(x => x)))
}


console.log(getNeedArrayProperties([{a: 1, b: 2, c: 3}, {}, {d: 4}], ["a", "c"]))

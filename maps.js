const map = new Map([
  [1, 'hello'], // a set of tubles with 2 values , the first is the key and it can be of any datatype , and the second is the value and of course it can be of any datatype
  [2, 'from'],
  [3, 'hell'],
]) // it's just an array with unique values only
map.add(4, 'ediots') // add to  map
map.delete(4) // delete from a map
map.has(4) //  check if value is there or not
map.size // return map's length
map.clear() // empty the map from its values
for (const [key, value] of map) {
  // iterating over employeeMap
  console.log(`${key} : ${value}`)
}

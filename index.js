// 1) Написать рекурсивную функцию, которая как аргумент принимает объект (любой сложности и вложенности) или массив (любой сложности и вложенности) или примитив. Функция должна вернуть то же самое что приняла аргументом, но обновив все ссылки на всех уровнях (все ссылки на объекты или массивы должны быть новые). Функция не должна использовать хак с JSON.parse(JSON.stringify(data)).

function recursion (obj) {

    if (typeof obj !== 'object') return obj
    if (!Array.isArray(obj)) {
    const newObj = {}

    for(let key in obj) {
      if (typeof obj[key] !== 'object') {
        newObj[key] = obj[key]
      } else {
        newObj[key] = recursion(obj[key])
      }
    }
    return newObj
  } else {
    let temp = []
    for (let item of obj) {
      if (!Array.isArray(item)) {
        temp.push(item)
      } else {
        temp.push(recursion(item))
      }
    }
    return temp}
  }

const obj = {
  name: 'Jon',
  serName: 'Smit',
  work: {
    salary: 100,
  }
}

const newObj = recursion(obj)
console.log(obj === newObj)
console.log( recursion([1,[2,6],3]))
console.log( recursion('id'))
console.log( recursion(5))
console.log( recursion(true))

// 2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. Если у одной строки с последующей совпадают первый и последний символы, то true. Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]

function checkArr (arr) { 
  const result = [] 
  for (let i = 0; i < arr.length - 1; i++) { 
    let current = arr[i]
    let next = arr[i + 1]
    if (current[0] === next[0] && current[current.length -1] === next[next.length -1]) { result.push(true) 

    } else { 
      result.push(false) 
    }
  } 
  return result 
}

checkArr(["asd", "afffd", "cc", "kk"])

// 3)Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр.

function matrix(n) { 
  let matrix = [] 
  for (let i = 0; i < n; i++) { 
    matrix[i] = [] 
    for (let j = 0; j < n; j++) { 
      matrix[i][j] = 0 
    }} 
    
    let num = 1 
    let top = 0 
    let right = n - 1 
    let bottom = n - 1 
    let left = 0 
    while (num <= n * n) { 
      for (let j = left; j <= right; j++) { 
        matrix[top][j] = num 
        num++
      } 
        top++ 
        for (let i = top ; i <= bottom; i++ ) { 
          matrix[i][right] = num 
          num++ 
        } 
        right-- 
        for( let j = right; j >= left; j--) { 
          matrix[bottom][j] = num 
          num++ 
        } 
        bottom-- 
        for (let i = bottom; i >= top; i--) { 
          matrix[i][left] = num 
          num++ 
        } 
        left++ 
      } 
      return matrix 
    } 
      
      matrix(3)

// 1. Написать приложение, получающее массив с вложенными массивами и возвращающее его “плоскую” версию. Встроенный метод массивов flat использовать нельзя.

function recursion1(arr) {
  let result = []  

  function deepClone(newArr) {
    for (let item of newArr) {
      if (!Array.isArray(item)) {
        result.push(item)
      } else {
        deepClone(item)
      }
    }
  }
  
  deepClone(arr)
  return result
}
//У меня здесь ошибка, выводит undefined 
console.log(recursion1([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]))

// 2. На вход приниаем массив целых чисел, который должен быть преобразован по следующим правилам:
// - если последвательность составляет диапазон из последовательных целых чисел (как минимум 3 числа): '1, 2, 3, 4' = '1 - 4',
// - в остальных случая числа разделены запятой

// solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
function solution (arr) {
  let result = [] 
  let start = arr[0] 

  for (let i = 0; i < arr.length; i++) {
    let next = arr[i + 1] 

    if (arr[i] + 1 !== next) {
      if (arr[i] - start >= 2) {
        result.push(`${start}-${arr[i]}`)
      } else if (arr[i] - start === 1) {
        result.push(`${start},${arr[i]}`)
      } else {
        result.push(start)
      }
      start = next
    } 

  }
  return result.join(',')
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))

function arraysSort(arr) {
  // Напиши свой код здесь
  return [...arr.sort((a, b) => {
console.log(+a[a.length - 1], "dsa " + +b[b.length - 1]);

   return +a[a.length - 1] - b[b.length - 1]
  } )]
}

window.arraysSort = arraysSort;

export default arraysSort;

function arraysSort(arr) {
  // Напиши свой код здесь
 arr.sort((a, b) => console.log(a+ "  " + b +"  " + arr ))
  return [...arr.sort((a, b) => a[a.length - 1] - b[b.length - 1] )];
}

window.arraysSort = arraysSort;

export default arraysSort;

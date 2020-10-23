import stringToType from "../../2. Data Types/1) string-to-type/index.js";
function queryToObject(query) {
  // Напиши свой код здесь
  let f = query.split("?").join("");
  let obj = f.split("&").reduce((ob, v) => {
    v = v.split("=");
    let tip = stringToType(v[1]);
    ob[v[0]] = tip;
    return ob;
  }, {});
  return obj;
}

window.queryToObject = queryToObject;

export default queryToObject;

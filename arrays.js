var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(a,e){
b = [e, ...a]
return b
}
function destructivelyAddElementToBeginningOfArray(a,e){
  var a = a
  a = [e, ...a]
  return a;
}
function addElementToEndOfArray(a,e){
b = [...a, e]
return b
}
function destructivelyAddElementToEndOfArray(a,e){
  c = a.push(e);
  return c;
}

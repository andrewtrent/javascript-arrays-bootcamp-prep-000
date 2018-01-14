var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
function addElementToBeginningOfArray(array,element){
b = [element, ...array]
return b
}
function destructivelyAddElementToBeginningOfArray(array,element){
  array = [element, ...array]
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

var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
   return Object.assign({}, object, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

<<<<<<< HEAD
function deleteFromObjectByKey(object, key) {
  var tmpObject = Object.assign({}, object);
  return delete tmpObject[key];
}

function destructivelyDeleteFromObjectByKey(object, key) {
  return delete object[key];

}
=======
function 
>>>>>>> 240218ffdc0e74af533c9f41be57ec4f4c9d4b77

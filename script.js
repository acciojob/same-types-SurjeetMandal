function isSameType(value1, value2) {
  if((typeof value1) === (typeof value2)){
	  return true;
	}
  else{
	  return false;
	}
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
let a = typeof value1;
let b = typeof value2;
alert(isSameType(value1, value2));


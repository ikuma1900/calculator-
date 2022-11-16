const result = document.getElementById("result")

function edit(value) {
if(result.value==='0' && value!=='.'){
        result.value=value;
    }else {result.value = result.value + value;}
}


function calc() {
    result.value = new Function(
      "return " + result.value
    )();
  }
function reset() {
    result.value = "";
  }  
function operator(value){
    if (result.value.slice(-1)==='+'){
        return;
    } else if (result.value.slice(-1)==='-'){
        return;
    } else if (result.value.slice(-1)==='*'){
        return;
    } else if (result.value.slice(-1)==='/'){
        return;
    } else if (result.value.slice(-1)==='.'){
        return;
    } else {result.value = result.value + value;}
}

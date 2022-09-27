const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');



let conectText = "";

function buttonPressed(event) {
    const text = event.target.textContent;
    
    
    if (text === "="){
        conectText = eval(conectText);
    }else  if (text === "C"){
        conectText = "";
    }else  {
        conectText += text;
    }
    
   
    result.textContent = conectText;
}
buttons.forEach(button => button.addEventListener('click', buttonPressed));

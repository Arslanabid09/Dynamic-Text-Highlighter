let input = document.getElementById("input");
let btn = document.getElementById("button");
let output = document.getElementById("output");


btn.addEventListener("click", function(){
  let newInput = input.value;
  console.log(newInput);
    if(newInput !== ''){
        
  let regex = new RegExp(newInput, "gi");
  output.innerHTML = output.textContent.replace(regex, `<mark>${newInput}</mark>`);
    }
  
})

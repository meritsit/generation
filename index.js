function generateRandomNumber(){
  const minInput = document.getElementById ("min");
  const maxInput = document.getElementById ("max");

  const min = parseInt(minInput.value);
  const max = parseInt(maxInput.value);

  if (isNaN(min) || isNaN(max)){
    document.getElementById("result").innerText = "please enter valid numbers";
    return;
  }
  if (min > max){
    document.getElementById("result").innerText = "min cannot be greater than max";
    return;
  }
  const random = Math.floor(Math.random() * (max - min + 1)) + min;

  document.getElementById("result").innerText = `generated number: ${random}`;
}

window.addEventListener("load", () =>{
  const generateBtn = document.getElementById("generate");
  generateBtn.addEventListener("click", generateRandomNumber);
});
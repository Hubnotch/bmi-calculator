/*
grab the value of weight
get the value of height
comput the bmi and output the result in the result div
show the chat after evaluation
*/

let button = document.getElementById("btn");

const calculateBMI = (e) => {
  e.preventDefault();
  
  //Get the value of weight of user
  let weight = parseInt(document.getElementById("weight").value);

  //Get the value of height of user
  let height = Number(document.getElementById("height").value);

  //Get the display for the result
  let result = document.getElementById("result");

  //Check if the user entered an empty string or non-number value
  // If true alert them to fill the appropriate 🏑 
  // If correct values are entered then calculate the BMI and display the result
  if(weight === "" || isNaN(weight)) {
      result.innerHTML = "Add your weight in Kilogram (kg)";
  } else if (height === 0 || isNaN(height)){
      result.innerHTML = "Add your height in meters (m)";
  } else {
      console.log(height)
      console.log(weight)
    let BMI = weight / (height * height);
    result.innerHTML = BMI.toFixed(2);
  }
  
};

button.addEventListener("click", calculateBMI);

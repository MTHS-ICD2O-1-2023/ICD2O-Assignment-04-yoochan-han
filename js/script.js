// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function Order() {
  let totalCost = 0.00
  // total cost is float number
  let topping = []
  const typeOfPizza = document.getElementById("typeOfPizza").value
  const size = document.getElementById("size-1").checked
  // get toppings information as array (T or F)
  for(i=1;i<5;i++){
    topping.push(document.getElementById("checkbox-" + String(i)).checked)   
  }
  // Check the type of pizza
  if(typeOfPizza == cheese) {
    
  }
  }

function test() {
  const test = document.getElementById("option-1").checked
  document.getElementById("test").innerHTML = test
  let topping = []
  const size = document.getElementById("option-1").checked
  for(i=1;i<5;i++){
    topping.push(document.getElementById("checkbox-" + String(i)).checked)
  }
  document.getElementById("arr").innerHTML = topping
}
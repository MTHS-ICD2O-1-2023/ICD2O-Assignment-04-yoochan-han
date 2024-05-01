// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function orderThePizza() {
  // total cost is float number
  let totalCost = 0.00
  let topping = []
  let pizzatype
  let pizzaSize
  const cheesePizza = document.getElementById("pizzaType-1").checked
  const baconPotatoPizza = document.getElementById("pizzaType-2").checked
  const size = document.getElementById("size-1").checked
  // get toppings information as array (T or F)
  for (i = 1; i < 5; i++) {
    topping.push(document.getElementById("checkbox-" + String(i)).checked)
  }
  //get pizza type 
  //calculate the total cost
  if (cheesePizza == true) {
    pizzatype = "Cheese Pizza"
    totalCost = 16.00
  } else if (baconPotatoPizza == true) {
    pizzatype = "Bacon Potato Pizza"
    totalCost = 20.99
  } else {
    pizzatype = "Pineapple Pizza"
    totalCost = 18.89
  }
  //get size of pizza
  if (size == true) {
    pizzaSize = "Large"
  } else {
    pizzaSize = "X-Large"
    totalCost += 4.00
  }
  //get topping
  for (l = 0; l < 4; l++) {
    if (topping[l] == true) {
      totalCost += 1.00 + 0.20 * l
    }
  }
  totalCost = totalCost + totalCost*0.13
  //print total cost
  document.getElementById("cost").innerHTML = "You ordered " + pizzaSize + pizzatype +"The total cost of pizza is " + totalCost.toFixed(2) + "$"
}


/*This file is for your custom js.  All yours*/
$(function () {
  var suits = ["clubs", "diamonds", "hearts", "spades"];
  var numbers = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"];
  var combinedDeck = [];
    suits.forEach(function(suit) {
      numbers.forEach(function(number) {
        combinedDeck.push(number + " of " + suit);
      })
    })
  combinedDeck.forEach(function(card) {
    $("ul#list-cards").append("<li>" + card + "</li>")
  });
});

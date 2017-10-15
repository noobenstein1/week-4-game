//Global variable
//-------------------------
var crystals = {
  Emerald: {
    name: "Emerald",
    value: 0
  },
  Peridot: {
    name: "Peridot",
    value: 0
  },
  Quartz: {
    name: "Quartz",
    value: 0
  },
  Zircon: {
    name: "Zircon",
    value: 0
  }
};

//scores curent and Global
var currentScore = 0;
var targetScore = 0;

//wins and losses
var winCount = 0;
var lossCount = 0;

//functions
//---------------------------
//helper function for getting random numbers
var getRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
var startGame = function() {

  //reset score
  currentScore = 0;

  // set target score between 19 and 120
  targetScore = getRandom(19, 120);

  //set values for crystals between 1 and 12
  crystals.Emerald.value = getRandom(1, 12);
  crystals.Peridot.value = getRandom(1, 12);
  crystals.Quartz.value = getRandom(1, 12);
  crystals.Zircon.value = getRandom(1, 12);

  // update html to reflect changes
  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  //testing console
  console.log("-----------------------------------");
  console.log("Target Score:" + targetScore);
  console.log("Emerald: " + crystals.Emerald.value + " | Peridot: " + crystals.Peridot.value + " | Quartz: " + crystals.Quartz.value + " | Zircon: " + crystals.Zircon.value);
  console.log("------------------------------------");

}
//click crystals
var addValues = function(crystals) {
  //update score
  currentScore = currentScore + crystals.value;

  //update html
  $("#yourScore").html(currentScore);

  checkWin();

  //test
  console.log("your score: " + currentScore);
}
// check if user wins and reset
var checkWin = function() {

  //validate score
  if (currentScore > targetScore) {
    alert("sorry you lost");
    console.log("you lose");
    lossCount++;
    $("#lossCount").html(lossCount);
    startGame();
  }

  else if (currentScore == targetScore) {
    alert("you win");
    console.log("you win");
    winCount++;
    $("#winCount").html(winCount);
    startGame();
  }
}
//main process
//--------------------------
startGame();

$("#Emerald").click(function() {
  addValues(crystals.Emerald);
});

$("#Peridot").click(function() {
  addValues(crystals.Peridot);
});

$("#Quartz").click(function() {
  addValues(crystals.Quartz);
});

$("#Zircon").click(function() {
  addValues(crystals.Zircon);
});

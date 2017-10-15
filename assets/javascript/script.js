  //need to have 4 crystals
  //differnet number tied to each crystal
  //target crystal div
  //generate the number to guess and sow on screen
  var numToGuess = Math.floor(Math.random() * 50) + 1;
  $('.numToGuess').text(numToGuess)
  //jquery to tie the class and ids to crystals and scores
  var crystalDiv = $('.crystalsDiv');
  var totalScoreDOM = $('#totalScore');

  //initial score display
  var totalScore = 0;
  totalScoreDOM.text(totalScore);
  //decides how many crystals to create
  for (var i = 0; i < 4; i++) {

    //each crystal need to have a random number attached to it
    var randoCNum = Math.floor(Math.random() * numToGuess) + 1;
    //generate a html element that has a value attr
    var crystalBtn = $('<img>')
    //add crystal class to each crystal
    crystalBtn.attr('class', 'crystal');
    crystalBtn.attr('data-crystalvalue', randoCNum);
    crystalBtn.attr('src', 'https://assets.fastcompany.com/image/upload/w_596,c_limit,q_auto:best,f_auto,fl_lossy/wp-cms/uploads/2017/05/i-2-crystals-collection.jpg')
    //append scrystals to div
    console.log(crystalBtn);
    crystalDiv.append(crystalBtn);

  }

//click event for crystals that increases the overal score
$('.crystal').on('click', function (event) {
  // console.log(event.target);
  // var clickedCrystal = event.target
  console.log($(this).attr("data-crystalvalue"));
  var crystalValue = parseInt($(this).attr("data-crystalvalue"))
  console.log(typeof crystalValue);

  //takes current total score and updates with the value of whatever crystal is clicked(event)
  totalScore += crystalValue
  //updates on screen display of score from previous click event.
  totalScoreDOM.text(totalScore);
});

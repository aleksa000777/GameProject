
  // declare image array
  var symbols = new Array();
  symbols[0] = new Image();
  symbols[0].src = 'images/apple.jpg';
  symbols[1] = new Image();
  symbols[1].src = 'images/bread.jpg';
  symbols[2] = new Image();
  symbols[2].src = 'images/caw.jpg';
  symbols[3] = new Image();
  symbols[3].src = 'images/dog.jpg';
  symbols[4] = new Image();
  symbols[4].src = 'images/firework.jpg';
  symbols[5] = new Image();
  symbols[5].src = 'images/flower.jpg';
  symbols[6] = new Image();
  symbols[6].src = 'images/forest.jpg';
  symbols[7] = new Image();
  symbols[7].src = 'images/paint.jpg';

  symbols = symbols.concat(symbols);

  var first = null;
  var firstSrc = null;
  var second = null;
  var secondSrc = null;
  var found = false;
  var timeout = null;   //close with delay
  var numOfOpen = 0;


  Array.prototype.shuffle = function() {
    return this.sort(function () { return 0.5 - Math.random() });
  }


  function drawTable() {
       symbols = symbols.shuffle();
      var rows = 4; //here's your number of rows and columns
      var cols = 4;
      var i = 0;
      var table = $('<table><tbody>');
      for(var r = 0; r < rows; r++){
          var tr = $('<tr>');
          for (var c = 0; c < cols; c++){
            $(tr).append($('<td>').attr('id', 'Cell'+r+c).addClass('cellFormat').addClass('back')
            .append($('<img>')
            .attr('src', symbols[i].src).hide()));
            i++;
            tr.appendTo(table);
          }
      }
      table.appendTo('body');
      $('td').click(function(){
        // how to set all function wich i declare?
        console.log('i was clicked');
      })
  }







  function firstGuess(){
    if(first===null){
      $(this).children('img').show();
      first = $(this).attr('id');
      firstSrc = $(this).children('img').attr('src');
      return;
    }
    else {
      return;
    }
  }

  function secondGuess(){
    $(this).children('img').show();
    second = $(this).attr('id');
    secondSrc = $(this).children('img').attr('src');
    return;
  }


  function checkMatchID(first,second){
    if(first===second){
      // we have to go to secondGuess again.
      return;
    }
  }

function checkMatchSRC(firstSrc, secondSrc){
  if(firstSrc===secondSrc){
    var first = null;
    var firstSrc = null;
    var second = null;
    var secondSrc = null;
    numOfOpen++;
  }
  else {
    $(first).children('img').hide();
    $(second).children('img').hide();
    var first = null;
    var firstSrc = null;
    var second = null;
    var secondSrc = null;
  }
}

function openAll(numOfOpen) {
  if(numOfOpen >=8){
    alert('You win!');
    $("table" ).remove();
    drawTable();
  }
  else{
    return;
  }
}

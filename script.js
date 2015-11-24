  $(document).ready(function(){
    init();
  })




  function init() {

    var first = null;
    var firstSrc = null;
    var second = null;
    var secondSrc = null;
    var found = false;
    var timeout = null;   //close with delay
    var numOfOpen = 0;
    var clickCount = 0;
    var score = 0;
    var x;
    var imgArray = [];
    var colvoPic;


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
  symbols[8] = new Image();
  symbols[8].src = 'images/snowcat.jpg';
  symbols[9] = new Image();
  symbols[9].src = 'images/tiger.jpg';


  // symbols = symbols.concat(symbols);


  Array.prototype.shuffle = function() {
    return this.sort(function () { return 0.5 - Math.random() });
  }




  $('button').click(function(){
    x = $(this).attr('value');
    colvoPic = x*4/2;
    console.log(colvoPic + 'this is colvoPic');
    imgArray = symbols.slice(0, colvoPic);
    imgArray = imgArray.concat(imgArray);
    imgArray = imgArray.shuffle();
    $("table" ).remove();
    $('#score').text('0');
    numOfOpen = 0;
     drawTable();
     clickPicture();
     console.log(numOfOpen + '    num of open');
     openAll(numOfOpen);

  })

  function drawTable() {
       imgArray = imgArray.shuffle();
      var rows = 4; //here's your number of rows and columns
      var cols = x;
      var i = 0;
      var table = $('<table><tbody>');
      for(var r = 0; r < rows; r++){
          var tr = $('<tr>');
          for (var c = 0; c < cols; c++){
            $(tr).append($('<td>').attr('id', 'Cell'+r+c).addClass('cellFormat').addClass('back')
            .append($('<img>')
            .attr('src', imgArray[i].src).hide()));
            i++;
            tr.appendTo(table);
          }
      }
      table.appendTo('body');

  }
drawTable();



function clickPicture(){



  $('td').on("click", function(e){
    e.preventDefault();
    // if e.currentTarget has class of clicked, do not run anything
    if ( $(this).hasClass('clicked') ) {
    } else {

    // if Id of first equal
        if ( ( clickCount % 2 ) === 0 ){
          $(this).children('img').show();
          clickCount++;
          score++;
          $('#score').text(score);

          first = $(this).attr('id');
          firstSrc = $(this).children('img').attr('src');

        } else if ( ( clickCount % 2 ) === 1 ){

          // If the Id is equal to the first do nothing
          if ( e.currentTarget.id == first) {
          }
          // Or check to see if image sources match
          else {

            $(this).children('img').show();
            clickCount++;
            score++;
            $('#score').text(score);

            second = $(this).attr('id');
            secondSrc = $(this).children('img').attr('src');


            if (firstSrc == secondSrc) {
              var firstId = "#" + first;
              var secondId = "#" + second;

              $(firstId).addClass('clicked');
              $(secondId).addClass('clicked');



              console.log(first+"first match");
              numOfOpen++;
              openAll(numOfOpen);
              resetGamestate();
            } else {
              var blah = "#" + first;
              var scope = $(this);
              setTimeout(function(){
                var one = $(blah).children('img').hide();
                var two = scope.children('img').hide();
              }, 1000);

              resetGamestate();
            }

          }

        }

        // Close else
      }
  })
}
clickPicture();



  function resetGamestate(){
    var first = null;
    var firstSrc = null;
    var second = null;
    var secondSrc = null;
  }

  function openAll(numOfOpen) {
  if(numOfOpen >=colvoPic){
    alert('You win!');
    $("table" ).remove();
    $('#score').text('0');
    init();
  }
  }
}   //function init

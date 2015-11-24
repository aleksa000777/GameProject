  $(document).ready(function(){
    init();
  })

  var first = null;
  var firstSrc = null;
  var second = null;
  var secondSrc = null;
  var found = false;
  var timeout = null;   //close with delay
  var numOfOpen = 0;
  var clickCount = 0;


  function init() {
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


  // var symbols = [
  //   one: {
  //     image: 'images/forest.jpg',
  //     used: false;
  //   }
  //   two: {
  //     image: 'images/forest.jpg'
  //   }
  //
  // ]
  //
  //
  // if ( !symbols[randomNumber].used ) {
  //   $('<img>').attr('src', symbols[randomNumber].src);
  //   symbols[randomNumber].used === true
  // }


  // 8 spaces
  // 4 images
  // sample 4



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

  }
drawTable();



function clickPicture(){
  console.log('click picture run');
  console.log(clickCount);


  $('td').on("click", function(e){
    console.log($(this).hasClass('clicked'));
    // if e.currentTarget has class of clicked, do not run anything
    if ( $(this).hasClass('clicked') ) {
      console.log('already clicked');
    } else {

    // if Id of first equal
        if ( ( clickCount % 2 ) === 0 ){
          $(this).children('img').show();
          clickCount++;
          first = $(this).attr('id');
          firstSrc = $(this).children('img').attr('src');
          console.log('------');
          console.log(first);
          console.log(firstSrc);
        } else if ( ( clickCount % 2 ) === 1 ){

          // If the Id is equal to the first do nothing
          if ( e.currentTarget.id == first) {
            console.log('nothing should happen');
          }
          // Or check to see if image sources match
          else {
            $(this).children('img').show();
            clickCount++;
            second = $(this).attr('id');
            secondSrc = $(this).children('img').attr('src');

            console.log(firstSrc);
            console.log(secondSrc);

            if (firstSrc == secondSrc) {
              var firstId = "#" + first;
              var secondId = "#" + second;

              console.log(blah);
              console.log('matches');
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

 ///if the first and second are not null
function openAll(numOfOpen) {
  if(numOfOpen >=8){
    alert('You win!');
    $("table" ).remove();
    drawTable();
  }
}



}   //function init

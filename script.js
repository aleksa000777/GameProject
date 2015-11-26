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
    var score = 0;  //your score
    var x;  //number of rows
    var imgArray = [];
    var colvoPic; //how many pairs of pic on board



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






  //ANVANCED mode
  var advanced = new Array();
  advanced[0] = new Image();
  advanced[0].src = 'images/pony1.jpg';
  advanced[1] = new Image();
  advanced[1].src = 'images/pony2.jpg';
  advanced[2] = new Image();
  advanced[2].src = 'images/pony3.jpg';
  advanced[3] = new Image();
  advanced[3].src = 'images/pony4.jpg';
  advanced[4] = new Image();
  advanced[4].src = 'images/pony5.jpg';
  advanced[5] = new Image();
  advanced[5].src = 'images/pony6.jpg';
  advanced[6] = new Image();
  advanced[6].src = 'images/pony7.jpg';
  advanced[7] = new Image();
  advanced[7].src = 'images/pony8.jpg';


  var pony = new Array();
  pony[0] = new Image();
  pony[0].src = 'images/gif/ponycrazy.gif';
  pony[1] = new Image();
  pony[1].src = 'images/gif/ponydance.gif';
  pony[2] = new Image();
  pony[2].src = 'images/gif/ponyfreeze.gif';
  pony[3] = new Image();
  pony[3].src = 'images/gif/ponylisun.gif';
  pony[4] = new Image();
  pony[4].src = 'images/gif/ponyplay.gif';
  pony[5] = new Image();
  pony[5].src = 'images/gif/ponyfly2.gif';



  Array.prototype.shuffle = function() {
    return this.sort(function () { return 0.5 - Math.random() });
  }



   // change back color of cards

$('input').click(function(){
  var back = $(this).attr('src');
  console.log(back);
  $('.back').css("background-image", "url("+back+")");
})



//choose mode and set cards

  $('button').click(function(){
    x = $(this).attr('value');
    //pony mode
    if(x==='pony'){
      score = 0;
      imgArray = advanced.slice(0, 6);
      colvoPic = 6;
      x=3;
      $('#pony > img').remove();
      $('body').addClass('advanced');

      $('#pony').append('<img id="ponyfly" src="'+pony[2].src+'" />')
      $('#pony').append('<img id="ponyplay" src="'+pony[4].src+'" />')
      $('#pony').append('<img id="ponyfly2" src="'+pony[5].src+'" />')

      //  add class ponyback
      $('td').removeClass('ponyback');
      $('td').addClass('ponyback');




   } //if ponu mode ends
    //regular mode
    else {
      $('body').removeClass('advanced');
      $('td').removeClass('ponyback');
      $('#pony > img').remove();
      colvoPic = x*4/2;
      imgArray = symbols.slice(0, colvoPic);
      score = 0;

    }
    console.log(colvoPic + 'this is colvoPic');

    imgArray = imgArray.concat(imgArray);
    imgArray = imgArray.shuffle();
    $("table" ).remove();
    $('#score').text('0');
    numOfOpen = 0;
     drawTable();
     clickPicture();
     console.log(numOfOpen + '    num of open');
     openAll(numOfOpen);

  })   //click function ends

//draw table

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
            if($('body').hasClass('advanced')){
              $('tr').removeClass('back')
              $('tr').addClass('ponyback')
            }
            else {
              $('tr').removeClass('ponyback')
            }
          }
      }
      table.appendTo('#table');

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

              //set class clicked to open cards
              $(firstId).addClass('clicked');
              $(secondId).addClass('clicked');

              numOfOpen++;
              openAll(numOfOpen);
              resetGamestate();
            }
            //if they dont match hide it
            else {
              var blah = "#" + first;
              var scope = $(this);
              setTimeout(function(){
                var one = $(blah).children('img').hide();
                var two = scope.children('img').hide();
              }, 1000);

              resetGamestate();
            }

          }  // check sourse match closed

        }

        // Close else
      }
  })   //td on clich function
}    //clickPicture function
clickPicture();



  function resetGamestate(){
    var first = null;
    var firstSrc = null;
    var second = null;
    var secondSrc = null;
  }

  //if all card on board open reset board
  function openAll(numOfOpen) {
    if(numOfOpen >=colvoPic){
      alert('You win!');
      $("table" ).remove();
      $('#score').text('0');
      init();
    }
  }

}   //function init

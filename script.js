

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
  // console.log(symbols);

  var cellFirstId = '';
  var cellSecondId = '';
  var found = false;
  var timeout = null;

  Array.prototype.shuffle = function() {
    return this.sort(function () { return 0.5 - Math.random() });
  }


  function drawTable() {
       symbols = symbols.shuffle();
      var rows = 4; //here's your number of rows and columns
      var cols = 4;
      var i = 0;
      var table = $('<table><tbody>');
      var img = new Image();
      img.src = "images/downSide.jpg";
      for(var r = 0; r < rows; r++){
          var tr = $('<tr>');
          for (var c = 0; c < cols; c++){
            $(tr).append($('<td>').click(cellClicked).attr('id', 'Cell'+r+c).addClass('cellFormat').addClass('back')
            .append($('<img>')
                .attr('src', symbols[i].src).hide()));
                i++;
          tr.appendTo(table);
          $('img').click(cellClicked);

        }
      }
      table.appendTo('body');
  }



  function cellClicked() {
    // console.log('clicked');
    console.log(this+"   i am this");
    $(this).css('display','block');
    // $(this).attr('img').show();
    console.log("this show not working");
    console.log($(this).attr("id") + "    this is ID");
// check if they don't has class back or timeout null
// if first id ==''set first id
// if this.id == secondID
// if img  firt !=img second return
// if no then found true setTimeout

var imgId = $(this).attr("id");
// $(imgId).attr(img).show();




      if (!$(this).hasClass('back') || timeout != null)
          {return;}

      if (cellFirstId == ''){
          cellFirstId = $(this).attr("id");
          $(this).show();
          // $(this).removeClass('back');
        }
      else {
          cellSecondId = $(this).attr("id");
          $(this).show();
          var cellFirst = $('#cellFirstId').attr('id');
            if (cellFirstId == cellSecondId){
              found = false;}
            else if (($('#cellFirstId img').attr('src')) != ($(this).attr('src')))
            {    found = false;}
            else {
            $(this).show();
            // $(this).removeClass('back');
            found = true;
            timeout = setTimeout(checkMatch, 2000);
        }
      }
  }

  function checkMatch() {
      var cellFirst = $('#cellFirstId').attr('id');
      var cellSecond = $('#cellSecondId').attr('id');
      // var newColor = '#000000'; // black
      if (found)
          // newColor = '#00ff00' // green
      // cellFirst.style.color = newColor;
      // cellSecond.style.color = newColor;
      cellFirstId = '';
      cellSecondId = '';
      $('#cellFirstId').show();
      $('#cellFirstId').removeClass('back');
      $('#cellSecondId').show();
      $('#cellSecondId').removeClass('back');
      clearTimeout();
      timeout = null;
  }

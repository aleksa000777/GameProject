

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
      for(var r = 0; r < rows; r++){
          var tr = $('<tr>');
          for (var c = 0; c < cols; c++){
            $(tr).append($('<td>').click(cellClicked).attr('id', 'Cell'+r+c).addClass('cellFormat').addClass('back')
            .append($('<img>')
                .attr('src', symbols[i].src).hide()));
                i++;
          tr.appendTo(table);
          // $('td').click(cellClicked);

        }
      }
      table.appendTo('body');
  }



  function cellClicked() {
    console.log(this+"   i am this");


// check if they don't has class back or timeout null
// if first id ==''set first id
// if this.id == secondID
// if img  firt !=img second return
// if no then found true setTimeout

// var imgId = $(this).attr("id");
// console.log($(this).attr('img' ,'src') + "bbblbllblblb");
// console.log(imgId + "    this is imgId");

// var $src = img.attr('src');
// console.log($src);


      if (!$(this).hasClass('back') || timeout != null)
          {
            return;
          }

      if (cellFirstId == ''){
          cellFirstId = $(this).attr("id");
          // console.log(cellFirstId + "this is first id");
          // console.log($(this).children('img').attr('src'));
          $(this).children('img').show();
        }
      else {
            cellSecondId = $(this).attr('id');
            console.log(cellSecondId + "im cheching cellsecondId");
            if (cellFirstId == cellSecondId){
              found = false;
            }


            // this else if maybe doent work
            // console.log($('cellFirstId').attr('src'));
            else if (($('cellFirstId').attr('src')) !== ($(this).children('img').attr('src')))
            {
              console.log("im here in check scr images");
              $(this).children('img').show();
              // $(this).children('img').hide();  //after dalay and run again
              // $(cellFirstId).children('img').hide();
               found = false;
               timeout = setTimeout(checkMatch, 2000);
               console.log("  end  cell cliked");

            }
            else {
              // this doesn't work
            console.log("im in the end of if else");
            $(this).children('img').show();
            found = true;
            timeout = setTimeout(checkMatch, 2000);
            }
      }
  }

  function checkMatch() {
    // shoul it be inside cell clicked?
// how can i chech '#cellFirstId img').attr('src')) with second one?
      // var cellFirst = $('#cellFirstId').attr('id');
      // console.log("im in check match");
      // console.log(cellFirstId + "    cellFirstid");
      // console.log(cellSecondId + "   cellSecondId");
      // console.log($("cellFirstId") + 'im smth # and cellfirst id');
      // console.log($('cellFirstId').attr('id'));
      // var cellSecond = $('#cellSecondId').attr('id');
      if (found){
        var cellFirst = document.getElementById(cellFirstId);
        var cellSecond = document.getElementById(cellSecondId);
        console.log(cellSecond + "im found");
      // $('#cellFirstId').show();
      // $('cellFirstId').removeClass('back');
      // console.log($(cellFirstId) + 'im in found true');
      // $('#cellSecondId').show();
      $('cellSecondId').removeClass('back');
      cellFirstId = '';
      cellSecondId = '';
      clearTimeout();
      timeout = null;
  }
  else {

    console.log('they dont match');
    $(this).children('img').hide();  //after dalay and run again
    $(cellFirstId).children('img').hide();
    return;


    // does't hide if they are not the same and doesnt open new one
  }
}

// ne rabotaet voobshe
  function clearTable() {
    $('#clear').click(function(){
      console.log('i was clicked');
      $('table').empty();
      drawTable();
    })
  }
  clearTable();

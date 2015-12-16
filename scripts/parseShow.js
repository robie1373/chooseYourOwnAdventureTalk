define(["jq_stuff", "createSlides"], function(postResult, createSlides) {
 
  structMap = createSlides();

   function addSlideTitle(titleString) {
    $(document).ready(function() {
      $("#slideCapsule").append("<div class='row'><h1 class='slideTitle'>" + titleString + "</h1></div>");
    })
  }

  function addSlideSubtitle(subtitleString) {
    $(document).ready(function() {
      $("#slideCapsule").append("<div class='row'><h2 class='slideSubtitle'>" + subtitleString + "</h2></div>");
    })
  }

   function addSlideSingleText(singleTextString) {
    $(document).ready(function() {
      $("#slideCapsule").append("<div class='row'><p class='singleText'>" + singleTextString + "</p></div>");
    })
  }

  function addSlideColumnText(columnTextArray) {
    if (!columnTextArray)
      var columnTextArray = ["Ruh Roh", "Trouble!"];
    $(document).ready(function() {
      var numberOfColumns = Object.keys(columnTextArray).length;
      $("#slideCapsule").append("<div class='row columnText'></div>");
      columnTextArray.forEach( function(text) {$(".columnText").append("<p class='columnTextP col-1-" + numberOfColumns + "'>" + text + "</p>")} );
    })
  }

  function addNav(thisSlide) {
    $(document).ready(function() {
      $("#navBar").append("<div class='row' id='hints'></div>")
      $("#navBar").append("<div class='row' id='links'></div>")

      function updatelink(linkName) {
        if (structMap.show.slides[thisSlide.children[linkName]])
          var nextSlide = structMap.show.slides[thisSlide.children[linkName]];
        else
          var nextSlide = structMap.show.slides[1];
        console.log("this is slide " + thisSlide.sid)
        console.log(linkName + " " + nextSlide.hint + " " + nextSlide.slideData.title);
        $("#hints").append("<div id='" + linkName + "HintDiv' class='col-1-3'></div>");
        if (thisSlide.children[linkName])
          $("#" + linkName + "HintDiv").append("<h4 class='nav' id='" + linkName + "Hint'>" + nextSlide.hint + "</h4>");
        else
          $("#" + linkName + "Hint").hide()
        $("#links").append("<div id='" + linkName + "LinkDiv' class='col-1-3'><img src='assets/" + linkName + ".png' hieght='100' width='100' id='" + linkName + "Link'></div>")
      }

      function attachNavEvent(linkName) {
        if (thisSlide.children[linkName])
          $("#" + linkName + "Link").on('click', showSlide(thisSlide.children[linkName]) )
        else
          $("#" + linkName + "Link").hide()
      }
      
      var paths = ["fist", "peace", "hand"];
      paths.forEach(updatelink);
      paths.forEach(attachNavEvent);
    })
  }

  function showSlide(num) {
    return function() {
      var thisSlide = structMap.show.slides[num];
      $("#slideCapsule").empty();
      $("#navBar").empty();
      addSlideTitle(thisSlide.slideData.title);
      if (structMap.show.slides[num].slideData.subtitle)
        addSlideSubtitle(thisSlide.slideData.subtitle);
      else if (thisSlide.slideData.singleText)
        addSlideSingleText(thisSlide.slideData.singleText);
      else if (thisSlide.slideData.columnText)
        addSlideColumnText( thisSlide.slideData.columnText );
      else
        console.log("unknown slide format");
      addNav(thisSlide);
    }
  }

var currentSlide=001;
showSlide(currentSlide)();




  } // end of define
);
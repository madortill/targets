var nPage = 0;
var nFunction = 0;

var setIntervalExplanation = null;

var ArrPages = [
  {
    // opening game- page 0
    divName: "opening-game",
    functions: ["openingGame()"], // array of functions that are needed to the page, functions of "buttons" in the start
    moveButtons: false, // does this page contains back and next buttons - true/false
    lessonMap: false, // does this page contains lesson map - true/false
    robinText: "", // contains Robin's text (unless it is empty)
    instructions: "" // contains instructions' text (unless it is empty)
  },
  {
    // opening game question- page 1
    divName: "opening-game-question",
    functions: ['buttons($("#prev"), -1)', 'buttons($("#next"), +1)', 'openingGameQuestion()'],
    moveButtons: true,
    lessonMap: false,
    robinText: "",
    instructions: "" 
  },
  {
    // opening game explanation- page 2
    divName: "opening-game-explanation",
    functions: ['openingGameExplanation()', "setIntervalExplanation = setInterval(openingGameExplanation, 1000);"],
    moveButtons: true,
    lessonMap: false,
    robinText: "",
    instructions: "" 
  },
  {
    // opening game- page 1
    divName: "robin-trial",
    functions: ['buttons($("#about"), 0)'],
    moveButtons: true, 
    lessonMap: true, 
    robinText: "", 
    instructions: "" 
  }, 
];

$(function() {
  // calls the opening game
  movePage();

  // add event listenes to buttons


  // !!!remember to add event listeners to back and next button!!!
      // adds to the page counter
      // nPage++
        // hides last div
  // $("#page" + nPage).css("display", "none");

  // and to the first page play button and about
});

function movePage() {
  // shows current div
  $("#" + ArrPages[nPage].divName).css("display", "block");

  // calls the functions of the page
  for (nFunction = 0; nFunction < ArrPages[nPage].functions.length; nFunction++) {
    eval(ArrPages[nPage].functions[nFunction]);
  }

  // controls
  // if there is no controls, hide the white background
  if (ArrPages[nPage].moveButtons === false && ArrPages[nPage].lessonMap === false) {
    $("#controls").css("display", "none");
  }
  // if there is controls but they are hidden
  else if ($("#controls").css("display") === "none") {
    $("#controls").css("display", "flex");
  }
  // show/hide controls
  controls("moveButtons" ,"#controls .control-button");
  controls("lessonMap", "#lesson-map");

  // !!!remember to check put text!!!
}

// function that checks if the buttons should be shown or hidden
function controls(state, object) {
  if (eval("ArrPages[nPage]." + state) === true && $(object).css("display") === "none") {
    $(object).css("display", "block");
  } else if (eval("ArrPages[nPage]." + state) === false && $(object).css("display") === "block") {
    $(object).css("display", "none");
  }
}

// function that adds events listeners to buttons- called only one time for each button
function buttons(button, page) {
  button.on("click", function() {
    // the about page is not part of ArrPages
    // when user clicks about button an object is added to the array
    if (button === $("#about")) {
      ArrPages.splice( 3 , 0 , 'functions: [], prev: true, next: true, lessonMap: false, robinText: "", instructions: "" ');
    }
    // hides last div
    $("#" + ArrPages[nPage].divName).css("display", "none");

    // changes page counter
    nPage = nPage + page;

    // shows next page
    movePage(); 
    
    // the about is removed from the array
    if (button === $("#about")) {
      ArrPages.splice( 3 , 1 );
    }
  })
  // so there won't be double event listener
  ArrPages[nPage].functions.shift();
  // אנחנו מורידים את הגודל של המערך באחד ולכן כדי שייכנסו ללולאה שוב גם הגודל של מונה הלולאה צריך לרדת באחד כדי שיהיה אפשר להיכנס אליה
  nFunction--;
}

// the game of dragging arrow at the opening
function openingGame() {
  // arrow draggable
  $("#opening-game .drag-arrow").draggable({
    revert: "invalid",
    revertDuration: 200,
    containment: "parent"
  });
  // for more then one time
  $("#opening-game .drag-arrow").draggable("enable");
  // grass dropabble
  $("#opening-game .drop-grass").droppable({
    tolerance: "touch",
    drop: function(e,ui) {
      ui.draggable.draggable("disable");
      // animation to put the arrow in place
      ui.draggable.animate({top: "8.1rem", left: "-66vw"}, 200, function() {
        // in the end of the animation moving to the next page
        setTimeout(function(){
          $("#opening-game .drag-arrow").css({"left": "-2vw","top": "6.3rem"});
          $("#opening-game").css("display", "none");
          nPage++;
          movePage();
          }, 1000);
      });
    }
  });
}

// bubble speech animation at question of the game
function openingGameQuestion() {
  // the function won't be called again
  ArrPages[nPage].functions.pop();
  // clear interval from next page's animation
  if (setIntervalExplanation !== null) {
    clearInterval(setIntervalExplanation);
  }
  setTimeout(function(){
    $("#opening-game-question .big-speech-bubble").html("כל הכבוד! עזרתם לי לפתור את החידה!<br>רגע... איזו חידה?");
  }, 1000);
  setTimeout(function(){
    $("#opening-game-question .big-speech-bubble").html("כל הכבוד! עזרתם לי לפתור את החידה!<br>רגע... איזו חידה?<br>האם הרגשתם שהזזת החץ הייתה פעולה <b>חסרת תועלת<b>?");
  }, 2000);   
}

// animation of arrow moving to explain the math exer
function openingGameExplanation() {
  $("#opening-game-explanation .drag-arrow").delay(100).animate({top: "8.1rem", left: "-66vw"}, 1000).delay(100).animate({top: "6.3rem", left: "-2vw"}, 1000);
}




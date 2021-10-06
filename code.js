var nPage = 0;
var currTopic = null;

var ArrPages = [
  // // opening
  // {
  //   // opening game- page 0
  //   divName: ["opening-game", "general-opening-game"], // the last div contains the speech bubble
  //   functions: ["openingGame()"], // array of functions that are needed to the page. If the functions contain the word "pop", it will happen only once and will be popped out of the array afterwards
  //   moveButtons: false, // does this page contains back and next buttons - true/false
  //   lessonMap: false, // does this page contains lesson map - true/false
  //   robinText: 'היי! אני הוא רובין הו"ד!<br><br>בבקשה תגררו את החץ הכחול אל החלקה הצהובה' // contains Robin's text (unless it is empty)
  // },
  // {
  //   // opening game question- page 1
  //   divName: ["opening-game-question", "general-opening-game"],
  //   functions: ['pop_buttons($("#prev"), -1, "add")', 'pop_buttons($("#next"), +1, "add")', 'clearIntervalExplanation()', 'pop_openingGameQuestion()'],
  //   moveButtons: true,
  //   lessonMap: false,
  //   robinText: 'כל הכבוד! עזרתם לי לפתור את החידה!'
  // },
  // {
  //   // opening game explanation- page 2
  //   divName: ["opening-game-explanation", "general-opening-game"],
  //   functions: ['openingGameExplanation()', "setIntervalExplanation = setInterval(openingGameExplanation, 2600);"],
  //   moveButtons: true,
  //   lessonMap: false,
  //   robinText: 'למעשה על ידי גרירה של החץ האדום למיקום המיועד הצלחתם להפוך את התרגיל המתמטי הנתון לתרגיל הגיוני'
  // },
  // {
  //   // opening game conclusion- page 3
  //   divName: ["opening-game-conclusion"],
  //   functions: ['clearIntervalExplanation()'],
  //   moveButtons: true,
  //   lessonMap: false,
  //   robinText: "אילו הייתם מבינים מה <span>המטרה</span> של הפעולה, הייתם נהנים יותר במהלך פתרון החידה, ולא הייתם מרגישים שאתם מבזבזים את הזמן.<br><br> כך בדיוק נבנה גם שיעור- אם אין לו מטרות הוא מאבד מהיעילות שלו."
  // },
  // {
  //   // opening game question- page 4
  //   divName: ["opening"],
  //   functions: ['pop_opening()', 'pop_buttons($("#play"), 2, "add")', 'pop_buttons($("#about-button"), 1, "add")'],
  //   moveButtons: false,
  //   lessonMap: false,
  //   robinText: "" 
  // },
  // {
  //   // about- page 5
  //   divName: ["about"],
  //   functions: [],
  //   moveButtons: true,
  //   lessonMap: false,
  //   robinText: '<img id="till" class="logo" src="assets/media/symbols/tilblack.svg"><div><b>אודות</b></div><b>רמ"ד טיל-</b> רס"ן מיגל לוויתן<br><b>רת"ח מו"פ וחדשנות בלמידה-</b> סמ"ר גל גנסין<br><b>עיצוב גרפי-</b> סמל מייה ליבנה<br><b>תכנות-</b> רב"ט טל סרוסי<br><b>מומחית תוכן-</b> סג"מ שירה רוט<br>גרסה</b>- אוקטובר 2021<b></div>'
  // },
  // {
  //   // lesson's goals- page 6
  //   divName: ["lesson-goals"],
  //   functions: ['goTwoBack(-2)', 'pop_goTwoBack_opening()', 'changeTopic(null)'],
  //   moveButtons: true,
  //   lessonMap: true,
  //   robinText: "וכמו בכל שיעור, נתחיל עם הצגת המטרות!"
  // },
  // // assessment
  // {
  //   // assessment- page 7
  //   divName: ["assessment"],
  //   functions: ['goTwoBack(-1)', 'pop_changeTriangle()', 'pop_buttons($("#topic-1"), ArrPages.findIndex(x => x.divName.includes("assessment")), "equal")', 'changeTopic(1)'], 
  //   moveButtons: true, 
  //   lessonMap: true, 
  //   robinText: 'כיאה ללוחם אמיץ כמוני, אני משתמש במשולש לח"מ- לומד, חומר ומלמד.<br>לחצו על כל אחד מהמשולשים שמרכיבים את החץ כדי לקרוא עליו (לא תוכלו לעבור עמוד לפני שתלמדו על כולם).'
  // },
  // // goals
  // {
  //   // importance of goals- page 8
  //   divName: ["importance"],
  //   functions: ['pop_buttons($("#topic-2"), ArrPages.findIndex(x => x.divName.includes("importance")), "equal")', 'changeTopic(2)'], 
  //   moveButtons: true, 
  //   lessonMap: true, 
  //   robinText: 'עכשיו אפשר לכתוב מטרות!<br>אבל למה צריך אותן?'
  // },
  // {
  //   // types of goals- page 9
  //   divName: ["types"],
  //   functions: [""], 
  //   moveButtons: true, 
  //   lessonMap: true, 
  //   robinText: ''
  // },
  // {
  //   // wording rules- page 10
  //   divName: ["wording-rules"],
  //   functions: [""], 
  //   moveButtons: true, 
  //   lessonMap: true, 
  //   robinText: ''
  // },
  // {
  //   // bow matching exercise- page 11
  //   divName: ["bow-exer"],
  //   functions: ['pop_changeCarousel($("#prev-bow"), "bow", -1)', 'pop_changeCarousel($("#next-bow"), "bow", 1)'],
  //   moveButtons: false, 
  //   lessonMap: false, 
  //   robinText: "אני צריך שתעזרו לי להתאים בין החיצים לקשתות! גררו את המטרות בניסוח השגוי (חץ) לכלל הניסוח שהופר (הקשת)"
  // },
  // {
  //   // rules order- page 12
  //   divName: ["order-rules"],
  //   functions: ["pop_removeExer(-1)"], 
  //   moveButtons: true, 
  //   lessonMap: true, 
  //   robinText: 'שימו לב! סעיפי "התנסות" ו"תרגול" אינם חובה!'
  // },
  // {
  //   // bow matching exercise- page 13
  //   divName: ["quiver-exer"],
  //   functions: ['pop_changeCarousel($("#prev-quiver"), "quiver", -1)', 'pop_changeCarousel($("#next-quiver"), "quiver", 1)'],
  //   moveButtons: false, 
  //   lessonMap: false, 
  //   robinText: "גררו את החיצים למקום הנכון בתרמיל החיצים הפתוח לפי סדר כתיבת המטרות שלמדנו"
  // },
  // {
  //   // example for writing goals- page 14
  //   divName: ["goals-example"],
  //   functions: ["pop_removeExer(-1)"],
  //   moveButtons: true,
  //   lessonMap: true,
  //   robinText: ""
  // },
  {
    // example for writing goals- page 15
    divName: ["dropdown-exer"],
    functions: ["dropDown()"],
    moveButtons: true,
    lessonMap: true,
    robinText: "עזרו לי להשלים את כתיבת המטרות! בחרו את המילים המתאימות בכל מקום חסר!"
  },
  {
    // opening game- page ?
    divName: ["robin-trial"],
    functions: ["pop_removeExer(-1)"],
    moveButtons: true, 
    lessonMap: true, 
    robinText: ""
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
  // appearance
  // shows current divs
  for (let i = 0; i < ArrPages[nPage].divName.length; i++) {
    $("#" + ArrPages[nPage].divName[i]).css("display", "block");
  }
  // shows bubble speech text (the last div in the divs array contains a bubble speech)
  if (ArrPages[nPage].robinText !== "") {
  $("#" + ArrPages[nPage].divName[ArrPages[nPage].divName.length - 1] + " .speech-bubble").html(ArrPages[nPage].robinText);
  }
  // functions
  // calls the functions of the page
  if (ArrPages[nPage].functions !== "") {
    let nFunction = 0;
    while (nFunction < ArrPages[nPage].functions.length) {
      eval(ArrPages[nPage].functions[nFunction]);
      // functions that contains the word "pop" will accur only once
      if (ArrPages[nPage].functions[nFunction].includes("pop")) {
        ArrPages[nPage].functions.splice(nFunction , 1);
        // since the function happens only once there is no need in adding nFunction +1
      } else {
        nFunction++;
      }
    }
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
}

// function that checks if the buttons should be shown or hidden
function controls(state, object) {
  if (eval("ArrPages[nPage]." + state) === true && $(object).css("display") === "none") {
    $(object).css("display", "block");
  } else if (eval("ArrPages[nPage]." + state) === false && $(object).css("display") === "block") {
    $(object).css("display", "none");
  }
}

// function that adds events listeners to buttons that affects the page's display- called only one time for each button
function pop_buttons(button, number, operation) {
  button.on("click", function() {
    // hides last divs
    for (let i = 0; i < ArrPages[nPage].divName.length; i++) {
      $("#" + ArrPages[nPage].divName[i]).css("display", "none");
    }
    // changes page counter
    // if the operation is to add, the number is added to page counter
    if (operation === "add"){
      nPage = nPage + eval(number);
    }
    // if the operation is to equal, page counter is compared to the number 
    else if (operation === "equal") {
      nPage = eval(number);
    }
    // shows next page
    movePage();     
  })
}

// function that changes the lesson map according to the user's progress
changeTopic = newTopic => {
  // changing the previous topic
  if (currTopic !== null) {
    $(`#topic-${currTopic} .topic-text`).css("color", "rgb(60, 60, 59)");
    // if it has not been visited before
    if (!$(`#topic-${currTopic} img`).attr("src").includes("finish")) {
      if (newTopic > currTopic) {
        $(`#topic-${currTopic} img`).attr("src", "assets/media/map_finish.svg");
      }
    }
  }
  currTopic = newTopic;
  if (currTopic !== null) {
    // changing the current topic
    $(`#topic-${currTopic} .topic-text`).css("color", "rgb(227, 2, 15)");
    // if it has not been visited before
    if (!$(`#topic-${currTopic} img`).attr("src").includes("finish")) {
      $(`#topic-${currTopic} img`).attr("src", "assets/media/map_select.svg");
    }
  }
}

// function that removes exercises from the pages array after they are finished (and the user moved page)
pop_removeExer = (exerPage) => {
  ArrPages.splice(nPage + exerPage , 1);
  // if the player pressed next and nor prev
  if (exerPage < 0) {
    nPage--;
  }
  // so the function won't be called twice
  ArrPages[nPage + exerPage].functions.pop();
}

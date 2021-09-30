var nPage = 0;

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
  //   functions: ['pop_buttons($("#prev"), -1)', 'pop_buttons($("#next"), +1)', 'clearIntervalExplanation()', 'pop_openingGameQuestion()'],
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
  //   functions: ['pop_opening()', 'pop_buttons($("#play"), 2)', 'pop_buttons($("#about-button"), 1)'],
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
  //   functions: ['goTwoBack(-2)', 'pop_goTwoBack_opening()'],
  //   moveButtons: true,
  //   lessonMap: true,
  //   robinText: "וכמו בכל שיעור, נתחיל עם הצגת המטרות!"
  // },
  // // assessment
  // {
  //   // assessment- page 7
  //   divName: ["assessment"],
  //   functions: ['goTwoBack(-1)', 'pop_changeTriangle()', 'pop_buttons($("#first-topic"), ArrPages.findIndex(x => x.divName === ["assessment"]))'], 
  //   moveButtons: true, 
  //   lessonMap: true, 
  //   robinText: 'כיאה ללוחם אמיץ כמוני, אני משתמש במשולש לח"מ- לומד, חומר ומלמד.<br>לחצו על כל אחד מהמשולשים שמרכיבים את החץ כדי לקרוא עליו (לא תוכלו לעבור עמוד לפני שתלמדו על כולם).'
  // },
  // // goals
  // {
  //   // importance of goals- page 8
  //   divName: ["importance"],
  //   functions: [""], 
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
  {
    // bow matching exercise- page 11
    divName: ["bow-match-exer"],
    functions: [''],
    moveButtons: false, 
    lessonMap: false, 
    robinText: "אני צריך שתעזרו לי להתאים בין החיצים לקשתות! גררו את המטרות בניסוח השגוי (חץ) לכלל הניסוח שהופר (הקשת)"
  },
  {
    // opening game- page ?
    divName: ["robin-trial"],
    functions: ['goTwoBack(-1)'],
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
function pop_buttons(button, page) {
  button.on("click", function() {
    // hides last divs
    for (let i = 0; i < ArrPages[nPage].divName.length; i++) {
      $("#" + ArrPages[nPage].divName[i]).css("display", "none");
    }
    // changes page counter
    nPage = nPage + page;
    // shows next page
    movePage();     
  })
}

const triangle_text = {
  triangle_1: "החומר- כתבו מהי רמת החומר, האם יש ידע מקדים הנדרש להבנתו, קשיים אפשריים של החניכים וכדומה.<br>המידע יעזור לכם להתכונן לשיעור (לדוגמה אם אתם יודעים שיש הרבה חומר, תכינו אותו יותר זמן מראש.",
  triangle_2: "הלומד- כתבו את מאפייני הלומד (למשל גיל וסוג אוכלוסייה), קשיי למידה, השלב בו הוא נמצא בהכשרה, נקודות חוזק וחולשה וכדומה.<br>המידע יעזור להתאים את רמת השיעור לקהל היעד (לדוגמה תדעו להשתמש בעזרים חזותיים ובמשלב לשוני נמוך יותר בשיעורים שמועברים לעולים חדשים).",
  triangle_3: "המלמד- כתבו מהי רמת השליטה שלכם בחומר, מידת ההיכרות עם החיילים, נקודות חוזק וחולשה וכדומה.<br>המידע יעזור להתאים את עצמכם להשגת מטרת השיעור (לדוגמה אם קשה לכם ללמד ברעש, תוכלו לנסות לשלב משחקים או למידה עצמית במהלך השיעור)."
}
let colored_triangles = 0;

function pop_changeTriangle() {
  // disable moving page
  $(".control-button").css("pointer-events", "none");
  $(".click-triangle").on("click", function() {
    let triangle_num = $(event.target).attr("id").slice(-1);
    // the triangle is colored (only once for each)
    if ($("#triangle-" + triangle_num).css("opacity") !== "1") {
      $("#triangle-" + triangle_num).css("opacity", "1");
      colored_triangles++;
    }
    // switch text from the array
    $("#assessment .speech-bubble").html(triangle_text["triangle_" + triangle_num]);
    // if all the three triangles are colored
      if(colored_triangles === Object.keys(triangle_text).length) {
        $(".control-button").css("pointer-events", "auto");
        ArrPages[nPage].robinText = 'כיאה ללוחם אמיץ כמוני, אני משתמש במשולש לח"מ- לומד, חומר ומלמד.<br>לחצו על כל אחד מהמשולשים שמרכיבים את החץ כדי לקרוא עליו.';
        // add to the num of the triangles so it won't enter the condition again
        colored_triangles++;
        console.log("loteh");
      }
  });
}

var exerType;
// represents the exerType number in the array
var curr_bow = 0;
var arr_bow = [
    {
        number: 1,
        bowTitle: "מנוסחות כביצוע של הלומד"
    },
    {
        number: 2, 
        bowTitle: "ברורות וחד משמעיות"
    },
    {
        number: 3, 
        bowTitle: "בעלות דרך מדידה"
    },
    {
        number: 4,
        bowTitle: "ריאליות"
    }
];

var curr_quiver = 0;
var arr_quiver = [
    {
        number: 1,
    },
    {
        number: 2, 
    },
    {
        number: 3, 
    },
    {
        number: 4,
    }
];



// function that adds events listeners to bows exrcise carousel's prev and next buttons
pop_changeCarousel = (button, exerTypeParam, indexNum) => {
    // function that changes the carrousel of the bows exercise
    button.on("click", () => {
      // exerType === "bow"/"quiver"
      changeCarousel(indexNum, true);
    });
    exerType = exerTypeParam;
    Drag();
}

// generic function that disappears and reveals items in carousels
changeCarousel = (indexNum, disappear) => {
    // represents the item that appear and disappear in the html (bow/arrow)
    let item;
    if (exerType === "bow") {
        item = "bow";
    } else if (exerType === "quiver") {
        item = "quiver-arrow";
    }

    if (eval("arr_" + exerType).length > 1) {
        // previous item disappear
        if (disappear === true) {
            $(`#${item}-${eval("arr_" + exerType)[eval("curr_" + exerType)].number}`).css("display", "none");
            $(`#${item}-${eval("arr_" + exerType)[eval("curr_" + exerType)].number}`).css("opacity", "0");
        }
        // changing the item number
        if (window["curr_" + exerType] + indexNum < 0 ) {
            window["curr_" + exerType] = window["arr_" + exerType].length - 1;
        } else if (window["curr_" + exerType] + indexNum === window["arr_" + exerType].length) {
            window["curr_" + exerType] = 0;
        } else {
            window["curr_" + exerType]  += indexNum;
        }
        // current item changes
        $(`#${item}-${eval("arr_" + exerType)[eval("curr_" + exerType)].number}`).css("display", "block");
        $(`#${item}-${eval("arr_" + exerType)[eval("curr_" + exerType)].number}`).animate({opacity: "1"}, 450);
        $(`#${exerType}-number`).text(`${eval("arr_" + exerType)[eval("curr_" + exerType)].number}/4`);
        // bow title change
        if (exerType === "bow") {
            $(`#bow-title`).text(arr_bow[curr_bow].bowTitle);
        }
    }
    // if all the items are matched 
    else {
        if (exerType === "bow") {
            $(`#arrows-container`).css("display", "none");
            $("#bow-exer .speech-bubble").text("אתם חדים כמו חץ!");
        } else if (exerType === "quiver") {
            $("#quiver-exer .speech-bubble").text("בול פגיעה!");
            $("#quiver-number").css("visibility", "hidden");
        }
        // display prev and next buttons
        $("#controls").css("display", "flex");
        $("#controls .control-button").css("display", "block");
        ArrPages[nPage-1].functions.push('pop_removeExer(1)');
    }
}

Drag = () => {
    $(`#${exerType}-exer .arrow`).draggable({
        revert: "invalid",
        revertDuration: 200,
        // so drag won't get stuck because of css property bottom = 0
        drag: function( event, ui ) {
           if (exerType === "quiver") {
            $(this).css({
                top: $(this).position().top,
                bottom: "auto"
            });
           }
        }
        // containment: "parent"
      });

    for (let i = 1; i <= window["arr_" + exerType].length; i++) {
    $(`#${exerType}-drop-${i}`).droppable({
        tolerance: "intersect",
        accept: $(`#${exerType}-arrow-${i}`),
        drop: function(e,ui) {
            if (exerType === "bow") {
                ui.draggable.animate({left: "-100vw"}, 200, function() {
                removeItem();
                });
            } else if (exerType === "quiver") {
                ui.draggable.draggable('disable');
                removeItem();
            }
         }
        });
    }
}

// function that removes the item from the array
removeItem = () => {
    let disappear;
    if (exerType === "bow") {
        disappear = true;
    } else if (exerType === "quiver") {
        disappear = false;
    }
    // animation of disappear
    $.when(changeCarousel(1, disappear)).then(function() {
        // changeBow function raises curr var
        if (window["curr_" + exerType] !== 0 ) {
            --window["curr_" + exerType];
        } else {
            window["curr_" + exerType] = window["arr_" + exerType].length -1;
        }
        // removing from array
        window["arr_" + exerType].splice( window["curr_" + exerType], 1);
        if (window["curr_" + exerType] === window["arr_" + exerType].length) {
            window["curr_" + exerType] = 0;
        }
        if (window["arr_" + exerType].length === 1) {
            $(`#${exerType}-controls .control-button`).css("visibility", "hidden");
        }
    }); 
}

const arrDropDown = ["מטרת העל", "מטרות ביניים", "חייל", "יגדיר", "חייל", "יתרגל", "חייל", "ידע לבצע"];
var currDropDown = 0;

// function that activates the drop-downs and shows the check button
dropDownInit = () => {
    for (let i = 1; i <= arrDropDown.length; i++) {
        $(`#drop-down-${i}`).selectmenu();
    }
    $("#prev").css("display", "none");
    $("#next").css("display", "none");
    $("#check").css("display", "block");
    $("#check").on("click", checkDropDown);
}

checkDropDown = () => {
    for (let i = 1; i <= arrDropDown.length; i++) {
        if ($(`#drop-down-${i}-button .ui-selectmenu-text`).text() === arrDropDown[i-1]) {
            $(`#drop-down-${i}-button.ui-button`).css("border-color", "rgb(52, 240, 93)");
            currDropDown++;
            $(`#drop-down-${i}`).selectmenu("disable");
            $(`#drop-down-${i}-button.ui-button`).css("opacity", "1");
        } else if ($(`#drop-down-${i}-button .ui-selectmenu-text`).text() !== "בחר/י...") {
            $(`#drop-down-${i}-button.ui-button`).css("border-color", "rgb(255, 113, 132)");
        } 
    }
        feedbackDropDown();
}

feedbackDropDown = () => {
    if (currDropDown === arrDropDown.length) {
        $("#prev").css("display", "block");
        $("#next").css("display", "block");
        $("#check").css("display", "none");
        $("#dropdown-exer .speech-bubble").text("!בול פגיעה");
    } else {
        $("#dropdown-exer .speech-bubble").text("לא דייקתם... נסו שוב!");
    }
}

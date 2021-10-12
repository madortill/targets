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
        // if the border is not green
        if ($(`#drop-down-${i}-button.ui-button`).css("border-color") !== "rgb(52, 240, 93)") {
            if ($(`#drop-down-${i}-button .ui-selectmenu-text`).text() === arrDropDown[i-1]) {
                $(`#drop-down-${i}-button.ui-button`).css("border-color", "rgb(52, 240, 93)");
                currDropDown++;
                $(`#drop-down-${i}`).selectmenu("disable");
                $(`#drop-down-${i}-button.ui-button`).css("opacity", "1");
            } else if ($(`#drop-down-${i}-button .ui-selectmenu-text`).text() !== "בחר/י...") {
                $(`#drop-down-${i}-button.ui-button`).css("border-color", "rgb(255, 113, 132)");
            } 
        }
    }
        feedbackDropDown();
}

feedbackDropDown = () => {
    if (currDropDown === arrDropDown.length) {
        $("#prev").css("display", "block");
        $("#next").css("display", "block");
        $("#check").css("display", "none");
        $("#dropdown-exer .speech-bubble").text("בול פגיעה!");
    } else {
        $("#dropdown-exer .speech-bubble").text("לא דייקתם... נסו שוב!");
    }
}

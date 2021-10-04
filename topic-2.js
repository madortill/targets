// represents the object number in the array
var currBow = 0;
const arrBowsText = [
    {
        bowNumber: 1,
        bowTitle: "מנוסחות כביצוע של הלומד"
    },
    {
        bowNumber: 2, 
        bowTitle: "ברורות וחד משמעיות"
    },
    {
        bowNumber: 3, 
        bowTitle: "בעלות דרך מדידה"
    },
    {
        bowNumber: 4,
        bowTitle: "ריאליות"
    }
];

// function that adds events listeners to bows exrcise carousel's prev and next buttons
pop_changeBow = (button, bowNum) => {
  // function that changes the carrousel of the bows exercise
  button.on("click", () => {
    changeBow(bowNum);
  });
}

changeBow = (bowNum) => {
    if (arrBowsText.length > 1) {
    // previous bow disappear
    $(`#bow-${arrBowsText[currBow].bowNumber}`).css("display", "none");
    $(`#bow-${arrBowsText[currBow].bowNumber}`).css("opacity", "0");
    // changing the bow number
    if (currBow + bowNum < 0 ) {
      currBow = arrBowsText.length - 1;
    } else if (currBow + bowNum === arrBowsText.length) {
      currBow = 0;
    } else {
      currBow = currBow + bowNum;
    }
    // current bow changes
    
    $(`#bow-${arrBowsText[currBow].bowNumber}`).css("display", "block");
    $(`#bow-${arrBowsText[currBow].bowNumber}`).animate({opacity: "1"}, 450);
    $(`#bow-number`).text(`${arrBowsText[currBow].bowNumber}/4`);
    $(`#bow-title`).text(arrBowsText[currBow].bowTitle);
    }
    // if all the bows are matched 
    else {
        $(`#arrows-container`).css("display", "none");
        $("#bow-match-exer .speech-bubble").text("אתם חדים כמו חץ!");
        // display prev and next buttons
        $("#controls").css("display", "flex");
        $("#controls .control-button").css("display", "block");
        ArrPages[nPage-1].functions.push('pop_removeExer(1)');
    }
}

bowDrag = () => {
  $("#bow-match-exer .arrow").draggable({
    revert: "invalid",
    revertDuration: 200,
    containment: "parent"
  });
  for (let i = 1; i <= arrBowsText.length; i++) {
    $("#bow-match-exer #bow-" + i + " .bow-drop").droppable({
        tolerance: "intersect",
        accept: $("#arrow-" + i),
        drop: function(e,ui) {
          ui.draggable.animate({left: "-100vw"}, 200, function() {
            // moving to next bow
            $.when(changeBow(1)).then(function() {
                // changeBow function raises currBow
                if (currBow !== 0 ) {
                    --currBow;
                } else {
                    currBow = arrBowsText.length -1;
                }
                // removing from array
                arrBowsText.splice(currBow, 1);
                if (currBow === arrBowsText.length) {
                    currBow = 0;
                }
                if (arrBowsText.length === 1) {
                    $("#bow-controls .control-button").css("visibility", "hidden");
                }
            }); 
          });
        }
      });
  }
  
}

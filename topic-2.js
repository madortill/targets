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
  })
}

bowDrag = () => {
  $("#bow-match-exer .arrow").draggable({
    revert: "invalid",
    revertDuration: 200,
    containment: "parent"
  });

  $("#bow-match-exer #bow-drop").droppable({
    tolerance: "touch",
    drop: function(e,ui) {
      $(this).css("background-color", "white");
    }
  });
}
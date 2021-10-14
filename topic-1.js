const triangle_text = {
    triangle_1: "החומר- כתבו מהי רמת החומר, האם יש ידע מקדים הנדרש להבנתו, קשיים אפשריים של החניכים וכדומה.<br>המידע יעזור לכם להתכונן לשיעור (לדוגמה אם אתם יודעים שיש הרבה חומר, תכינו אותו יותר זמן מראש.",
    triangle_2: "הלומד- כתבו את מאפייני הלומד (למשל גיל וסוג אוכלוסייה), קשיי למידה, השלב בו הוא נמצא בהכשרה, נקודות חוזק וחולשה וכדומה.<br>המידע יעזור להתאים את רמת השיעור לקהל היעד (לדוגמה תדעו להשתמש בעזרים חזותיים ובמשלב לשוני נמוך יותר בשיעורים שמועברים לעולים חדשים).",
    triangle_3: "המלמד- כתבו מהי רמת השליטה שלכם בחומר, מידת ההיכרות עם החיילים, נקודות חוזק וחולשה וכדומה.<br>המידע יעזור להתאים את עצמכם להשגת מטרת השיעור (לדוגמה אם קשה לכם ללמד ברעש, תוכלו לנסות לשלב משחקים או למידה עצמית במהלך השיעור)."
  }
  let colored_triangles = 0;
  
  function pop_changeTriangle() {
    // disable moving page
    disabledButton($(".control-button"), "none");
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
          disabledButton($(".control-button"), "auto");
          ArrPages[nPage].robinText = 'כיאה ללוחם אמיץ כמוני, אני משתמש במשולש לח"מ- לומד, חומר ומלמד.<br>לחצו על כל אחד מהמשולשים שמרכיבים את החץ כדי לקרוא עליו.';
          // add to the num of the triangles so it won't enter the condition again
          colored_triangles++;
          console.log("loteh");
        }
    });
  }

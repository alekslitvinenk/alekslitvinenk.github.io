$(document).ready(function() {

  var states = {
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    op5: false,
    op6: false
  };

  $(".option").each(function(){

    $(this).find(".switch").click(function(){
      
      var toggle = states[$(this).id];
      toggle = !toggle;

      states[$(this).id] = toggle;

      var thumbprops = {};
      var bgprops = {};

      if(toggle)
      {
        thumbprops["margin-left"] = "3.2rem";
        thumbprops["backgroundColor"] = "#ec078f";

        bgprops["backgroundColor"] = "#f13aa7";
      }else
      {
        thumbprops["margin-left"] = "-.2rem";
        thumbprops["backgroundColor"] = "#ccc9c9";

        bgprops["backgroundColor"] = "#ccc9c9";
      }

      $(this).animate(bgprops, 150);
      $(this).find(".thumb").animate(thumbprops, 150);
    })
  });
});
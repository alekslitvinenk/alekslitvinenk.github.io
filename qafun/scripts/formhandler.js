$(document).ready(function() {

  var states = {
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    op5: false,
    op6: false
  };

  var numSwitchers = randomIndex(5) + 1;

  for(var i = 0; i < numSwitchers; i++) {
    states["op" + i] = true;
  }

  function randomIndex(n) {
    return Math.round(Math.random() * n);
  }

  $(".option").each(function(){

    var optionElement = $(this)[0];

    switchState(states[optionElement.id]);

    function switchState(state) {
      var thumbprops = {};
      var bgprops = {};

      if(state)
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

      $(optionElement).find(".switch").animate(bgprops, 150);
      $(optionElement).find(".thumb").animate(thumbprops, 150);
    }

    $(this).find(".switch").click(function(){

      var idd = optionElement.id;
      
      var toggle = states[idd];
      if(!toggle)
        return;

      states[optionElement.id] = toggle = !toggle;

      switchState(toggle);
    })
  });
});
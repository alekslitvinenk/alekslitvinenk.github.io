$(document).ready(function() {

  //var url = location.href;
  //setTimeout(function () {location.href = url}, 1500);

  var states = {
    op1: false,
    op2: false,
    op3: false,
    op4: false,
    op5: false,
    op6: false
  };

  var availableItems = [];

  for (var state in states){
    availableItems.push(state);
  }

  turnOnNElements(3);

  function turnOnNElements(n) {
    var numSwitchers = randomIndex(n) + 1;

    for(var i = 1; i <= numSwitchers; i++) {
      if(availableItems.length == 0)
        break;

      var item = randomIndex(availableItems.length - 1);
      states[availableItems[item]] = true;

      crossState(item);
    }
  };

  function randomIndex(n) {
    return Math.round(Math.random() * n);
  }

  function crossState(val) {
    for (var i = 0; i < availableItems.length; i++){
      var toCheck = availableItems[i]

      if(toCheck == val) {
        availableItems.splice(i, 1);
        break;
      }
    }
  }

  function update() {
     $(".option").each(function(){

      var optionEl = $(this)[0];

      var thumbprops = {};
      var bgprops = {};

      if(states[optionEl.id])
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

      $(optionEl).find(".switch").animate(bgprops, 150);
      $(optionEl).find(".thumb").animate(thumbprops, 150);
    })
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

      states[idd] = false;
      crossState(idd);

      turnOnNElements(3);

      update();

      availableItems.push(idd);
    })
  });
});
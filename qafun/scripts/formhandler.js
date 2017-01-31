$(document).ready(function() {

  $(".option").each(function(){

    $(this).find(".switch").click(function(){
      
      var toggle = toggle || false;
      toggle = !toggle;

      var thumbprops = {};
      var bgprops = {};

      if(toggle)
      {
        thumbprops["margin-left"] = "32px";
        thumbprops["backgroundColor"] = "#ec078f";

        bgprops["backgroundColor"] = "#f13aa7";
      }else
      {
        thumbprops["margin-left"] = "-2px";
        thumbprops["backgroundColor"] = "gray";

        bgprops["backgroundColor"] = "white";
      }

      $(this).animate(bgprops, 150);
      $(this).find(".thumb").animate(thumbprops, 150);
    })
  });
});
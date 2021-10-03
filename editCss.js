function loadIndexPage(){
  $(".nav-pills .nav-link").css("color", "white");
  $(".title").css("color", "white");
  $(".indexHeading").show();
  $(".inspoHeading").hide();
  $(".inspoCards").hide();
  $(".homeLink").css("background-color", "rgb(0, 141, 211, 0.5)")
  $(".link").css("background-color", "rgb(0, 141, 211, 0)")
  $(".profileLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".plannerLink").css("background-color", "rgb(0, 141, 211, 0)")
}
function loadInspoPage(){
  $(".nav-pills .nav-link").css("color", "black");
  $(".title").css("color", "black");
  $(".indexHeading").hide();
  $(".inspoHeading").show();
  $(".index-body").css("background-image", "none");
  $("h1").css("font-size", "300%");
  $(".inspoCards").show();
  $(".homeLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".link").css("background-color", "rgb(0, 141, 211, 0)")
  $(".profileLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".plannerLink").css("background-color", "rgb(0, 141, 211, 0.5)")
}

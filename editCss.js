function loadIndexPage(){
  $(".nav-pills .nav-link").css("color", "white");
  $(".title").css("color", "white");
  $(".indexHeading").show();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".inspoCards").hide();
  $(".homeLink").css("background-color", "rgb(0, 141, 211, 0.5)")
  $(".link").css("background-color", "rgb(0, 141, 211, 0)")
  $(".profileLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".plannerLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".topLeftSquare").hide();
  $(".InspoDesign1Image").hide();
  $(".amalfi").hide();
  $(".greece").hide();
  $(".portugal").hide();
  $(".paris").hide();
  $(".frenchRiviera").hide();
  $(".turkey").hide();
  $(".bottomRightSquare").hide();
}

function loadInspoPage(){
  $(".nav-pills .nav-link").css("color", "black");
  $(".title").css("color", "black");
  $(".indexHeading").hide();
  $(".plannerHeading").hide();
  $(".inspoHeading").show();
  $(".bottomRightSquare").hide();
  $(".index-body").css("background-image", "none");
  $("h1").css("font-size", "300%");
  $(".inspoCards").show();
  $(".homeLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".link").css("background-color", "rgb(0, 141, 211, 0)")
  $(".profileLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".plannerLink").css("background-color", "rgb(0, 141, 211, 0.5)")
  $(".topLeftSquare").hide();
  $(".InspoDesign1Image").hide();
  $(".amalfi").hide();
  $(".greece").hide();
  $(".portugal").hide();
  $(".paris").hide();
  $(".frenchRiviera").hide();
}

function loadTurkey(){
  $(".inspoCards").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".topLeftSquare").show();
  $(".bottomRightSquare").hide();
  $(".InspoDesign1Image.turkey").show();
  $(".InspoDesign2Image.amalfi").hide();
  $(".InspoDesign1Image.greece").hide();
  $(".InspoDesign2Image.portugal").hide();
  $(".InspoDesign1Image.paris").hide();
  $(".InspoDesign2Image.frenchRiviera").hide();
  $(".InspoDesign1.turkey").show();
  $(".InspoDesign2.amalfi").hide();
  $(".InspoDesign1.greece").hide();
  $(".InspoDesign2.portugal").hide();
  $(".InspoDesign1.paris").hide();
  $(".InspoDesign2.frenchRiviera").hide();
  $(".InspoDesign1Button").show();
  $(".InspoDesign2Button").hide();
}

function loadAmalfi(){
  $(".inspoCards").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".topLeftSquare").hide();
  $(".bottomRightSquare").show();
  $(".InspoDesign1Image.turkey").hide();
  $(".InspoDesign2Image.amalfi").show();
  $(".InspoDesign1Image.greece").hide();
  $(".InspoDesign2Image.portugal").hide();
  $(".InspoDesign1Image.paris").hide();
  $(".InspoDesign2Image.frenchRiviera").hide();
  $(".InspoDesign1.turkey").hide();
  $(".InspoDesign2.amalfi").show();
  $(".InspoDesign1.greece").hide();
  $(".InspoDesign2.portugal").hide();
  $(".InspoDesign1.paris").hide();
  $(".InspoDesign2.frenchRiviera").hide();
  $(".InspoDesign1Button").hide();
  $(".InspoDesign2Button").show();
}

function loadGreece(){
  $(".inspoCards").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".topLeftSquare").show();
  $(".bottomRightSquare").hide();
  $(".InspoDesign1Image.turkey").hide();
  $(".InspoDesign2Image.amalfi").hide();
  $(".InspoDesign1Image.greece").show();
  $(".InspoDesign2Image.portugal").hide();
  $(".InspoDesign1Image.paris").hide();
  $(".InspoDesign2Image.frenchRiviera").hide();
  $(".InspoDesign1.turkey").hide();
  $(".InspoDesign2.amalfi").hide();
  $(".InspoDesign1.greece").show();
  $(".InspoDesign2.portugal").hide();
  $(".InspoDesign1.paris").hide();
  $(".InspoDesign2.frenchRiviera").hide();
  $(".InspoDesign1Button").show();
  $(".InspoDesign2Button").hide();
}

function loadPortugal(){
  $(".inspoCards").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".topLeftSquare").hide();
  $(".bottomRightSquare").show();
  $(".InspoDesign1Image.turkey").hide();
  $(".InspoDesign2Image.amalfi").hide();
  $(".InspoDesign1Image.greece").hide();
  $(".InspoDesign2Image.portugal").show();
  $(".InspoDesign1Image.paris").hide();
  $(".InspoDesign2Image.frenchRiviera").hide();
  $(".InspoDesign1.turkey").hide();
  $(".InspoDesign2.amalfi").hide();
  $(".InspoDesign1.greece").hide();
  $(".InspoDesign2.portugal").show();
  $(".InspoDesign1.paris").hide();
  $(".InspoDesign2.frenchRiviera").hide();
  $(".InspoDesign1Button").hide();
  $(".InspoDesign2Button").show();
}

function loadParis(){
  $(".inspoCards").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".topLeftSquare").show();
  $(".bottomRightSquare").hide();
  $(".InspoDesign1Image.turkey").hide();
  $(".InspoDesign2Image.amalfi").hide();
  $(".InspoDesign1Image.greece").hide();
  $(".InspoDesign2Image.portugal").hide();
  $(".InspoDesign1Image.paris").show();
  $(".InspoDesign2Image.frenchRiviera").hide();
  $(".InspoDesign1.turkey").hide();
  $(".InspoDesign2.amalfi").hide();
  $(".InspoDesign1.greece").hide();
  $(".InspoDesign2.portugal").hide();
  $(".InspoDesign1.paris").show();
  $(".InspoDesign2.frenchRiviera").hide();
  $(".InspoDesign1Button").show();
  $(".InspoDesign2Button").hide();
}

function loadRiviera(){
  $(".inspoCards").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").hide();
  $(".topLeftSquare").hide();
  $(".bottomRightSquare").show();
  $(".InspoDesign1Image.turkey").hide();
  $(".InspoDesign2Image.amalfi").hide();
  $(".InspoDesign1Image.greece").hide();
  $(".InspoDesign2Image.portugal").hide();
  $(".InspoDesign1Image.paris").hide();
  $(".InspoDesign2Image.frenchRiviera").show();
  $(".InspoDesign1.turkey").hide();
  $(".InspoDesign2.amalfi").hide();
  $(".InspoDesign1.greece").hide();
  $(".InspoDesign2.portugal").hide();
  $(".InspoDesign1.paris").hide();
  $(".InspoDesign2.frenchRiviera").show();
  $(".InspoDesign1Button").hide();
  $(".InspoDesign2Button").show();
}

function loadPlannerPage(){
  $(".nav-pills .nav-link").css("color", "black");
  $(".title").css("color", "black");
  $(".indexHeading").hide();
  $(".inspoHeading").hide();
  $(".plannerHeading").show();
  $(".bottomRightSquare").hide();
  $(".index-body").css("background-image", "none");
  $("h1").css("font-size", "300%");
  $(".inspoCards").hide();
  $(".homeLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".link").css("background-color", "rgb(0, 141, 211, 0)")
  $(".profileLink").css("background-color", "rgb(0, 141, 211, 0)")
  $(".plannerLink").css("background-color", "rgb(0, 141, 211, 0.5)")
  $(".topLeftSquare").hide();
  $(".InspoDesign1Image").hide();
  $(".amalfi").hide();
  $(".greece").hide();
  $(".portugal").hide();
  $(".paris").hide();
  $(".frenchRiviera").hide();
}

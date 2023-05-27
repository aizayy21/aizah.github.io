var typingEffect = new Typed(".multiText", {
    strings: ["Coder", "Designer", "Developer", "Student"],
    loop: true,
  });
  
  var links = document.getElementsByClassName("links");
  var linksContents = document.getElementsByClassName("links-contents");
  
  function opentab(tabname) {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active-link");
    }
    for (var j = 0; j < linksContents.length; j++) {
      linksContents[j].classList.remove("active-touch");
    }
  
    document.getElementById(tabname).classList.add("active-touch");
  }
  
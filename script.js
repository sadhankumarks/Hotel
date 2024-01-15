function toggleMenu() {
    var nav = document.querySelector(".nav");
    nav.classList.toggle("nav-closed");
    var navList = document.querySelector(".nav-list");
    var menuItems = document.querySelectorAll(".nav-list li");
  
    if (nav.classList.contains("nav-closed")) {
      navList.style.display = "none";
    } else {
      navList.style.display = "flex";
  
      menuItems.forEach(function (item) {
        item.style.display = "block";
      });
    }
  }
  
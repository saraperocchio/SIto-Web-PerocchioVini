/*lente ricerca*/
document.addEventListener('click', function(event) {
  var searchIcon = document.getElementById('search-icon');
  var searchInput = document.getElementById('search-input');

  if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
    searchInput.style.display = 'none';
  }
});


/*hamburger menu*/

let item = document.querySelector(".icon-hamburger");
item.addEventListener("click", function () {
  document.body.classList.toggle("menu-open");
});

/*torna a inizio pagina*/
window.addEventListener("scroll", function () {
  var button = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    button.classList.add("show");
  } else {
    button.classList.remove("show");
  }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const icons = document.querySelectorAll(".icon");
const openClass = function (e) {
  // we should add .open to the div with item class which
  // is the parent of our svg element with class icon
  const parentElement = e.target.parentElement;
  // if we used add it will show the hidden elements but
  // the window will not close toggle make it close
  parentElement.classList.toggle("open");
};
icons.forEach((icon) => icon.addEventListener("click", openClass));

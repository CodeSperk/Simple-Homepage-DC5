//selector
const toggleBtn =document.querySelector(".toggle-btn")

//state
const theme = localStorage.getItem("theme");

//onMount
theme && document.body.classList.add(theme) && document.body.classList.remove("light-theme");

//handler
handleToggleBtn = () => {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    localStorage.setItem("theme", "dark-theme");
  }else{
    localStorage.removeItem("theme", "dark-theme")
  }
}

//event
toggleBtn.addEventListener("click", handleToggleBtn);
document.addEventListener("DOMContentLoaded", () => {
   const themeToggle = document.getElementById("theme-toggle");
 
   themeToggle.addEventListener("click", () => {
     document.body.classList.toggle("light-theme");
     const isLight = document.body.classList.contains("light-theme");
     localStorage.setItem("theme", isLight ? "light" : "dark");
   });
 
   // Установка темы из локального хранилища
   if (localStorage.getItem("theme") === "light") {
     document.body.classList.add("light-theme");
   }
 });
 
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';


const hamburgerBtn = document.getElementById('hamburger-button')
const navbarMenu = document.getElementById('navbar-menu')
hamburgerBtn.addEventListener('click', function(){
  navbarMenu.classList.toggle('active')
  hamburgerBtn.classList.toggle('active')
}) 
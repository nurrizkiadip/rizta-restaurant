!function(n){function r(r){for(var t,o,s=r[0],d=r[1],c=r[2],p=0,m=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&m.push(i[o][0]),i[o]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(n[t]=d[t]);for(l&&l(r);m.length;)m.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var n,r=0;r<a.length;r++){for(var e=a[r],t=!0,s=1;s<e.length;s++){var d=e[s];0!==i[d]&&(t=!1)}t&&(a.splice(r--,1),n=o(o.s=e[0]))}return n}var t={},i={2:0},a=[];function o(r){if(t[r])return t[r].exports;var e=t[r]={i:r,l:!1,exports:{}};return n[r].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=n,o.c=t,o.d=function(n,r,e){o.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:e})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,r){if(1&r&&(n=o(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var t in n)o.d(e,t,function(r){return n[r]}.bind(null,t));return e},o.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(r,"a",r),r},o.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},o.p="";var s=window.webpackJsonp=window.webpackJsonp||[],d=s.push.bind(s);s.push=r,s=s.slice();for(var c=0;c<s.length;c++)r(s[c]);var l=d;a.push([19,1,0,3]),e()}({14:function(n,r,e){var t=e(2),i=e(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);n.exports=i.locals||{}},15:function(n,r,e){var t=e(3),i=e(4),a=e(16),o=e(17);r=t(!1);var s=i(a),d=i(o);r.push([n.i,"/* TABLET */\r\n@media (min-width: 768px) {\r\n\r\n  /** AWAL NAV */\r\n  nav .brand-logo {\r\n    margin: 0 36px;\r\n  }\r\n\r\n  nav .navbar-menu {\r\n    width: calc(100% - 100px);\r\n  }\r\n\r\n  /** AKHIR NAV */\r\n\r\n  header .content .brand p:last-child {\r\n    font-size: 3rem;\r\n  }\r\n\r\n  /** MAIN */\r\n  main .content .restaurant-name {\r\n    font-size: calc(3vw - 1.25vh);\r\n  }\r\n\r\n  main .detail-container .restaurant-reviews .reviewer-container {\r\n    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));\r\n  }\r\n\r\n  main .contactus-container {\r\n    margin: auto;\r\n    width: 85%;\r\n  }\r\n\r\n  /** AKHIR MAIN */\r\n\r\n  /** AWAL FOOTER */\r\n  footer {\r\n    min-height: calc(25vw - 5vw);\r\n    padding: 5vh 0;\r\n  }\r\n\r\n  footer .copyright {\r\n    font-size: 1.3rem;\r\n    margin-bottom: 16px;\r\n\r\n  }\r\n\r\n  footer .sosmed a {\r\n    font-size: 1.7rem;\r\n    margin: 0 16px;\r\n  }\r\n\r\n  /** AKHIR FOOTER */\r\n}\r\n\r\n\r\n/* Laptop 1024px */\r\n@media (min-width: 1024px) {\r\n\r\n  /** NAVBAR */\r\n  nav .hamburger-button {\r\n    display: none;\r\n  }\r\n\r\n  nav .navbar-menu {\r\n    min-height: auto;\r\n    width: auto;\r\n    position: static;\r\n    display: block;\r\n    padding: 0;\r\n    margin: 0;\r\n\r\n    background: none;\r\n    box-shadow: none;\r\n  }\r\n\r\n  nav .navbar-menu a {\r\n    display: inline-block;\r\n    font-family: 'Kaushan Script', cursive;\r\n    padding: 8px 36px;\r\n  }\r\n\r\n  nav .navbar-menu a:hover {\r\n    background-color: #eeeeee33;\r\n  }\r\n\r\n  nav .navbar-menu a::after {\r\n    display: none;\r\n  }\r\n\r\n  header {\r\n    background-image: url("+s+");\r\n  }\r\n\r\n  main .like {\r\n    right: 3rem;\r\n    bottom: 2rem;\r\n  }\r\n\r\n  main .detail-container .restaurant-info {\r\n    flex-direction: row;\r\n  }\r\n\r\n  main .detail-container .restaurant-reviews .reviewer-container {\r\n    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));\r\n  }\r\n\r\n  main .detail-container .restaurant-reviews .reviewer-input svg:first-child {\r\n    display: block;\r\n  }\r\n\r\n  main .detail-container .restaurant-reviews .reviewer-input form:last-child {\r\n    margin-left: 3rem;\r\n  }\r\n\r\n  main .contactus-container {\r\n    margin: auto;\r\n    width: 75%;\r\n  }\r\n\r\n  footer {\r\n    background-image: url("+d+");\r\n  }\r\n}\r\n\r\n/* Screen 4K */\r\n@media (min-width: 2560px) {\r\n\r\n  /** AWAL FOOTER */\r\n  footer {\r\n    padding: 5vw 0;\r\n  }\r\n\r\n  footer .copyright {\r\n    font-size: 1.8rem;\r\n  }\r\n\r\n  footer .sosmed a {\r\n    font-size: 2rem;\r\n\r\n  }\r\n\r\n  /** AKHIR FOOTER */\r\n}",""]),n.exports=r},8:function(n,r,e){var t=e(2),i=e(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[n.i,i,""]]);var a={insert:"head",singleton:!1};t(i,a);n.exports=i.locals||{}},9:function(n,r,e){var t=e(3),i=e(4),a=e(10),o=e(11),s=e(12),d=e(13);(r=t(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@200;300;500;700;800&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;800&display=swap);"]),r.push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap);"]);var c=i(a),l=i(o),p=i(s),m=i(d);r.push([n.i,'@font-face {\r\n  font-family: "gang_of_threeregular";\r\n  src: url('+c+') format("woff2"),\r\n    url('+l+') format("woff");\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n::selection {\r\n  background-color: #acc1c577;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 18px;\r\n  background-color: gainsboro;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #353b48;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background-color: #5e6475;\r\n}\r\n\r\nbody {\r\n  padding-top: 60px;\r\n}\r\n\r\n.inner-width {\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n  padding: 10px 20px;\r\n}\r\n\r\n.section-title {\r\n  text-align: center;\r\n  font-weight: 500;\r\n  font-size: 26px;\r\n  font-family: \'Raleway\', sans-serif;\r\n  font-weight: 700;\r\n\r\n\r\n  position: relative;\r\n\r\n  margin-top: 20px;\r\n  margin-bottom: 40px;\r\n  padding: 20px 0;\r\n  color: #111;\r\n}\r\n\r\n.section-title::before {\r\n  content: "";\r\n  display: inline-block;\r\n  height: 4px;\r\n  width: 96px;\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: calc(50% - 48px);\r\n  background-color: #111;\r\n}\r\n\r\n.section-title::after {\r\n  content: "";\r\n  height: 10px;\r\n  width: 18px;\r\n  position: absolute;\r\n  background-color: #48dbfb;\r\n  border: 3px solid #fff;\r\n  bottom: -6px;\r\n  left: calc(50% - 12px);\r\n}\r\n\r\n/** SKIP TO LINK */\r\n.skip-link {\r\n  position: absolute;\r\n  text-decoration: none;\r\n  top: 100px;\r\n  left: -200px;\r\n  background-color: #efefef;\r\n  color: black;\r\n  padding: 8px;\r\n\r\n  font-family: \'Raleway\', sans-serif;\r\n  font-size: 1.1rem;\r\n  z-index: 1000;\r\n\r\n}\r\n\r\n/** SKIP TO LINK */\r\n.skip-link:focus {\r\n  left: 20px;\r\n}\r\n\r\n/** Center the loader */\r\n#loader-show {\r\n  position: absolute;\r\n  display: block;\r\n  left: 50%;\r\n  top: 50%;\r\n  z-index: 1;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: -50px 0 0 -50px;\r\n  border: 12px solid #e3e3e3;\r\n  border-radius: 50%;\r\n  border-top: 12px solid #3498db;\r\n  animation: spin 1.5s linear infinite;\r\n}\r\n\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n\r\n#favorited-feedback {\r\n  background-image: linear-gradient(45deg, #434343 0%, black 100%, #434343 0%);\r\n  position: fixed;\r\n  left: 50%;\r\n  border-radius: 12px;\r\n  box-shadow: 0 2px 4px 1px rgba(0, 0, 0, .3);\r\n  color: azure;\r\n  transform: translateX(-50%);\r\n  padding: 1rem 2.5rem;\r\n  user-select: none;\r\n\r\n  transition: .5s ease-in-out;\r\n}\r\n\r\n#favorited-feedback.show {\r\n  bottom: 5%;\r\n}\r\n\r\n/** NAVBAR */\r\nnav {\r\n  height: 60px;\r\n  position: fixed;\r\n  left: 0;\r\n  right: 0;\r\n  top: 0;\r\n  display: flex;\r\n  align-items: center;\r\n\r\n  box-shadow: 0 1px 2.5px black;\r\n\r\n  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255, 255, 255, 0.40) 0%, rgba(0, 0, 0, 0.25) 200%);\r\n  background-blend-mode: multiply;\r\n  background-position: bottom;\r\n  background-size: cover;\r\n  z-index: 999;\r\n}\r\n\r\nnav .inner-width {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\nnav a {\r\n  text-decoration: none;\r\n  color: #eee;\r\n}\r\n\r\nnav .brand-logo {\r\n  margin: 0;\r\n  font-size: 2rem;\r\n  padding: 6px 0;\r\n  font-family: "gang_of_threeregular", sans-serif;\r\n}\r\n\r\nnav .hamburger-button {\r\n  background: none;\r\n  width: 44px;\r\n  height: 44px;\r\n  outline: none;\r\n  border: none;\r\n  border-radius: 4px;\r\n\r\n  position: relative;\r\n  cursor: pointer;\r\n  display: block;\r\n\r\n  z-index: 1000;\r\n}\r\n\r\nnav .hamburger-button:focus {\r\n  outline: 3px orange solid\r\n}\r\n\r\nnav .hamburger-button span {\r\n  display: block;\r\n  height: 5px;\r\n  margin: 7px 0;\r\n  background-color: white;\r\n  transition: .4s linear;\r\n\r\n  position: relative;\r\n}\r\n\r\nnav .hamburger-button.active span:nth-child(1) {\r\n  transform: rotate(45deg);\r\n  top: 6px;\r\n}\r\n\r\nnav .hamburger-button.active span:nth-child(3) {\r\n  transform: rotate(-45deg);\r\n  bottom: 5px;\r\n}\r\n\r\nnav .hamburger-button.active span:nth-child(2) {\r\n  display: none;\r\n}\r\n\r\nnav .navbar-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  right: -100%;\r\n  min-height: 100vh;\r\n  width: calc(100% - 100px);\r\n\r\n  background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding-top: 65px;\r\n  box-shadow: -1px 0 3px rgba(20, 20, 20, .7);\r\n\r\n  transition: .4s ease-in-out;\r\n}\r\n\r\nnav .navbar-menu.active {\r\n  right: 0;\r\n}\r\n\r\nnav .navbar-menu a {\r\n  font-size: 1.5rem;\r\n  font-family: \'Raleway\', sans-serif;\r\n  font-weight: 600;\r\n\r\n  padding: 22px 12px;\r\n  position: relative;\r\n\r\n  transition: .07s linear;\r\n}\r\n\r\nnav .navbar-menu a::after {\r\n  content: "";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 1.5px;\r\n  left: 0;\r\n  bottom: -20%;\r\n  background-color: #aaaaaa22;\r\n}\r\n\r\nnav .navbar-menu a:hover {\r\n  color: #6c7580;\r\n}\r\n\r\n/** AKHIR NAVBAR */\r\n\r\n/** AWAL JUMBOTRON */\r\nheader {\r\n  min-height: calc(100vh - 60px);\r\n\r\n  background-image: url('+p+");\r\n  background-size: cover;\r\n  background-position: 43%;\r\n  background-repeat: no-repeat;\r\n  box-shadow: 2px 0 6px rgba(0, 0, 0, .7);\r\n}\r\n\r\nheader .content .brand {\r\n  color: azure;\r\n  display: block;\r\n  margin-top: 27vh;\r\n\r\n  text-align: center;\r\n}\r\n\r\nheader .content .brand p:first-child {\r\n  font-family: 'Raleway', sans-serif;\r\n  margin: 5px 0;\r\n  font-size: 2rem;\r\n  font-weight: 500;\r\n}\r\n\r\nheader .content .brand p:last-child {\r\n  font-family: 'gang_of_threeregular', sans-serif;\r\n  font-size: 10vw;\r\n  font-weight: 500;\r\n}\r\n\r\nheader .content .brand-logo {\r\n  font-family: 'gang_of_threeregular', sans-serif;\r\n  font-size: 4rem;\r\n  text-shadow: 2px 2px 0px rgba(150, 150, 150, .5);\r\n  color: azure;\r\n\r\n  display: block;\r\n}\r\n\r\nheader .navigation {\r\n  font-size: 1.1rem;\r\n  font-family: 'Nunito', sans-serif;\r\n\r\n  margin-top: 40px;\r\n  display: flex;\r\n  justify-content: center;\r\n\r\n  position: relative;\r\n}\r\n\r\nheader .navigation a {\r\n  text-decoration: none;\r\n  color: azure;\r\n  border-radius: 4px;\r\n\r\n  display: inline-block;\r\n  padding: 12px 24px;\r\n  background-color: #00adb5;\r\n\r\n  transition: .15s linear;\r\n}\r\n\r\nheader .navigation a:hover {\r\n  background-color: #007980;\r\n}\r\n\r\nheader .navigation::after {\r\n  content: \"˅\";\r\n  position: absolute;\r\n  color: azure;\r\n  font-weight: 900;\r\n  font-size: 1.5rem;\r\n  top: 150%;\r\n  animation: floating 2s infinite ease-in-out;\r\n}\r\n\r\n@keyframes floating {\r\n  50% {\r\n    transform: translateY(-20px);\r\n  }\r\n}\r\n\r\n/** AKHIR JUMBOTRON */\r\n\r\n\r\n/** AWAL MAIN */\r\n#main-content {\r\n  padding-top: 70px;\r\n  min-height: 80vh;\r\n  position: relative;\r\n}\r\n\r\nmain .content .card-heros {\r\n  font-family: \"Nunito\", sans-serif;\r\n  display: grid;\r\n\r\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\r\n  gap: 24px 36px;\r\n}\r\n\r\nmain .content .card-heros .card {\r\n  border-radius: 4px;\r\n  list-style: none;\r\n\r\n  box-shadow: 0 0 6px rgba(0, 0, 0, .6);\r\n  cursor: pointer;\r\n\r\n  transition: .15s ease-in-out;\r\n}\r\n\r\nmain .content .card-heros .card:hover {\r\n  transform: scale(1.015);\r\n  filter: brightness(1.025);\r\n}\r\n\r\nmain .content .card-heros .card-avatar {\r\n  border-radius: 4px 4px 0 0;\r\n  max-height: 230px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\nmain .content .card-heros .caption-img {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 3px 12px;\r\n  font-size: .85rem;\r\n  color: #ffffffdd;\r\n\r\n  border-top-right-radius: 4px;\r\n\r\n  user-select: none;\r\n  z-index: 1;\r\n}\r\n\r\nmain .content .card-heros .caption-img .rating,\r\nmain .content .card-heros .caption-img .city {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  padding: 4px 12px;\r\n  border-top-right-radius: 4px;\r\n  background-color: #333333bb;\r\n\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\nmain .content .card-heros .caption-img .rating {\r\n  transform: translateY(-99.9%);\r\n}\r\n\r\nmain .content .card-heros .caption-img .rating i {\r\n  margin-left: 1.5px;\r\n}\r\n\r\nmain .content .card-heros .caption-img .rating i,\r\nmain .content .card-heros .caption-img .city i {\r\n  margin-right: 8px;\r\n}\r\n\r\nmain .content .card-heros .caption-img .city {\r\n  padding-right: 16px;\r\n  padding-left: 16px;\r\n}\r\n\r\n\r\nmain .content .card-heros .card-image {\r\n  border-radius: 4px 4px 0 0;\r\n  display: block;\r\n  width: 100%;\r\n\r\n  transition: .3s ease-in-out;\r\n}\r\n\r\nmain .content .card-heros .card-image:hover {\r\n  transform: scale(1.1);\r\n}\r\n\r\nmain .content .card-heros .card-body {\r\n  padding: 12px 20px 24px;\r\n}\r\n\r\nmain .content .card-heros .card-body .id {\r\n  font-size: .65rem;\r\n  font-weight: 100;\r\n  color: #333333aa;\r\n}\r\n\r\nmain .content .card-heros .card-body .name a {\r\n  font-size: 1.35rem;\r\n  font-weight: 700;\r\n  text-decoration: none;\r\n  padding: 12px 0 6px;\r\n  display: inline-block;\r\n\r\n  color: black;\r\n  transition: .15s linear;\r\n}\r\n\r\nmain .content .card-heros .card-body .name a:hover {\r\n  color: #00000077;\r\n  text-decoration: underline;\r\n}\r\n\r\nmain .content .card-heros .card-body .description {\r\n  font-size: 1rem;\r\n  font-weight: 400;\r\n\r\n  user-select: none;\r\n\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  display: -webkit-box;\r\n  -webkit-line-clamp: 4;\r\n  /* number of lines to show */\r\n  -webkit-box-orient: vertical;\r\n}\r\n\r\nmain .content .detail-container {\r\n  font-family: 'Poppins', sans-serif;\r\n  margin: 0 auto;\r\n}\r\n\r\nmain .content .restaurant-name {\r\n  font-size: calc(4vh - 1vw);\r\n  text-align: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\nmain .content img {\r\n  display: block;\r\n  width: 100%;\r\n  line-height: 0;\r\n  margin: 0 auto;\r\n  border-radius: 8px;\r\n  box-shadow: 0 0 16px 4px rgba(0, 0, 0, 0.2);\r\n}\r\n\r\nmain .detail-container .restaurant-info,\r\nmain .detail-container .restaurant-menus,\r\nmain .detail-container .restaurant-reviews {\r\n  max-width: 90%;\r\n  margin: 2rem auto .5rem;\r\n\r\n}\r\n\r\nmain .detail-container .restaurant-info {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nmain .detail-container .restaurant-info>* {\r\n  margin-bottom: .5rem;\r\n}\r\n\r\nmain .detail-container .restaurant-info h3 {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n}\r\n\r\nmain .detail-container .restaurant-sub-info {\r\n  flex: 1;\r\n}\r\n\r\nmain .detail-container .restaurant-desc {\r\n  flex: 2;\r\n}\r\n\r\nmain .detail-container .restaurant-menus .menu-container {\r\n  display: flex;\r\n}\r\n\r\nmain .detail-container .restaurant-menus .menu-container>* {\r\n  margin-left: 1.5rem;\r\n  flex: 1;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-container {\r\n  list-style: none;\r\n  display: grid;\r\n  margin-bottom: 2rem;\r\n\r\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\r\n  gap: 15px 25px;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-container>* {\r\n  border-radius: 6px;\r\n  padding: .5rem 1rem;\r\n  border: 1px solid #555;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-container .name {\r\n  margin: 0;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-container .date {\r\n  font-size: .8rem;\r\n  color: #555;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input svg:first-child {\r\n  display: none;\r\n  flex: 1;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input form:last-child {\r\n  flex: 2;\r\n  margin-left: 0;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input .name-input,\r\nmain .detail-container .restaurant-reviews .reviewer-input .review-input {\r\n  width: 100%;\r\n  padding: .7rem .4rem;\r\n  outline: none;\r\n  border-radius: 4px;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input .review-input {\r\n  min-height: 7rem;\r\n  resize: none;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input .review-submit-btn {\r\n  padding: 1rem 1.7rem;\r\n  font-size: 1.1rem;\r\n  border-radius: 4px;\r\n  color: white;\r\n  background-color: #00adb5;\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  border: 1.5px solid #fff;\r\n\r\n  transition: .2s ease-in-out;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input .review-submit-btn:hover {\r\n  background-color: #eee;\r\n  color: #333;\r\n  border-color: #00494d;\r\n}\r\n\r\nmain .detail-container .restaurant-reviews .reviewer-input .review-submit-btn:focus {\r\n  outline: 3px orange solid;\r\n}\r\n\r\nmain #favorite-btn-container #favorite-btn {\r\n  position: fixed;\r\n  bottom: 3rem;\r\n  right: 17.5%;\r\n  background-color: #db0000;\r\n  color: white;\r\n  border: 0;\r\n  border-radius: 50%;\r\n  width: 55px;\r\n  height: 55px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n\r\n  transition: .1s ease-in-out;\r\n}\r\n\r\nmain #favorite-btn-container #favorite-btn,\r\nmain #favorite-btn-container #favorite-btn i {\r\n  font-size: 1.3rem;\r\n  cursor: pointer;\r\n}\r\n\r\nmain #favorite-btn:hover {\r\n  background-color: #990000 !important;\r\n\r\n}\r\n\r\nmain .contactus-container label {\r\n  display: block;\r\n  margin-bottom: .25rem;\r\n  font-family: 'Nunito', sans-serif;\r\n}\r\n\r\nmain .contactus-container input,\r\nmain .contactus-container textarea {\r\n  padding: .5rem;\r\n  font-size: 1.1rem;\r\n  font-family: 'Poppins', sans-serif;\r\n  width: 100%;\r\n  border-radius: 4px;\r\n\r\n  resize: vertical;\r\n}\r\n\r\nmain .contactus-container textarea {\r\n  min-height: 20vh;\r\n}\r\n\r\nmain .contactus-container button {\r\n  padding: 10px 32px;\r\n  font-size: 1.15rem;\r\n  border-radius: 4px;\r\n  font-family: 'Nunito', sans-serif;\r\n  color: azure;\r\n  background-color: #065357;\r\n  outline: none;\r\n}\r\n\r\nmain .contactus-container button:hover {\r\n  background-color: #e9f6f7;\r\n  color: #065357;\r\n  font-weight: 700;\r\n}\r\n\r\n\r\nmain .contactus-container .form-row {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\r\n  gap: 6px 12px;\r\n}\r\n\r\nmain .contactus-container .form-group {\r\n  margin: 0 0 1rem;\r\n}\r\n\r\n/** AKHIR MAIN */\r\n\r\n/** FOOTER */\r\nfooter {\r\n  min-height: 25vh;\r\n  background-image: url("+m+");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n\r\n  color: azure;\r\n  font-family: 'Nunito', sans-serif;\r\n  font-weight: 700;\r\n  font-size: .9rem;\r\n  padding: 4vh 0;\r\n  margin-top: 30px;\r\n\r\n  box-shadow: -2px 0 6px rgba(0, 0, 0, .7);\r\n}\r\n\r\nfooter .inner-width {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\nfooter .copyright p {\r\n  text-align: center;\r\n  font-size: 1.1rem;\r\n}\r\n\r\nfooter .copyright a {\r\n  text-decoration: none;\r\n  padding: 12px 0;\r\n  color: #00bfc9;\r\n}\r\n\r\nfooter .copyright a:hover {\r\n  text-decoration: underline;\r\n  color: #00838a;\r\n}\r\n\r\nfooter .sosmed {\r\n  margin-top: 20px;\r\n  width: 100%;\r\n\r\n  font-size: 1.3rem;\r\n\r\n  /* display: grid;\r\n  grid-template-columns: repeat(auto-fill, 32px);\r\n  justify-content: center;\r\n  gap: 8px; */\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n  flex-direction: row;\r\n}\r\n\r\nfooter .sosmed a {\r\n  text-decoration: none;\r\n  color: #87cac4;\r\n  margin: 0 5px;\r\n  text-shadow: 1px 1px 1px white;\r\n  padding: 12px;\r\n  background-color: white;\r\n  border-radius: 50px;\r\n  box-shadow: 1px 2px 2px black;\r\n\r\n  transition: .08s linear;\r\n}\r\n\r\nfooter .sosmed a:first-child {\r\n  padding: 12px 16px;\r\n}\r\n\r\nfooter .sosmed a:nth-child(3),\r\nfooter .sosmed a:nth-child(4) {\r\n  padding: 12px 13px;\r\n}\r\n\r\nfooter .sosmed a:hover {\r\n  color: #6c9e98;\r\n}\r\n\r\n/** AKHIR FOOTER */",""]),n.exports=r}});
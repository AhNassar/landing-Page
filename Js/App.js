const secs = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();
const navBar = document.querySelector('#naviBarList');

function secsSelections() {
  for (const sec of secs) {
    const secId = sec.getAttribute('id');// get sections ID
    const secDataNav = sec.getAttribute('dataNav'); //get data nav
    const listinput = document.createElement('li');//create li element
    const navLink = document.createElement('button');//create button as a link to be listed in nav bar
    navLink.className = 'button';//add css to buttons
    navLink.setAttribute('onclick', `scrolling(${secId})`);// set on click attribute for button
    navLink.innerHTML = secDataNav;//set button text
    listinput.innerHTML = navLink.outerHTML;//link buttons as li element
    listinput.classList.add('naviBarMenu', 'menuLink');//add classes to li element
    fragment.appendChild(listinput);//append li to fragment
  }
  navBar.appendChild(fragment); // append fragment to ul element
}


secsSelections();
//scroll to section function
//elm is the Section Id to search where to stop
function scrolling(elm) {
  let el = document.getElementById(elm.getAttribute('id'));
  const index = el.getBoundingClientRect().top;//Scroll to position
  el.scrollIntoView({ behavior: 'smooth' });


}
function backtotop() {
  window.scrollTo(0, 0);
}
// to add yourActiveClass to section in view port
window.onscroll= function () {
  
  secs.forEach((sec) => {
    const pageindex = sec.getBoundingClientRect();
    if (pageindex.top >= -50 && pageindex.top <= 200) {
      secs.forEach((removerr) => {
        removerr.className = '';
      })
      sec.className = 'yourActiveClass';
    }
  });

  // to hide the the button according to page position
  const backbtn = document.querySelector('#backtotop');
  if (window.scrollY == 0) {
    backbtn.style.position = 'relative';
  }
  else {
    backbtn.style.position = 'fixed';
  }
}
window.addEventListener('scroll',function(){
  setTimeout(() => {
    document.querySelector('.naviBarMenu').style.display='none';
   
  }, 3000);
  document.querySelector('.naviBarMenu').style.display='block';
  

})


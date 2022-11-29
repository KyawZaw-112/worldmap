let country = document.querySelector('#country');
let allPath = document.querySelectorAll('.map path');

allPath.forEach(x => {
     x.addEventListener('mouseover', _ => {
         country.innerText = x.getAttribute('name')
     })
})
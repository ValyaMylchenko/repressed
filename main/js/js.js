


const loadContent = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(json => createElement(json.people))
}

loadContent ('js/bd-people.json')
// fetch('https://jsonplaceholder.typicode.com/pos')
// .then(response => response.json())
// .then(json => console.log(json))


function createElement(arr) {
    const flexboxlist = document.querySelector('.listpeople');

    arr.forEach(function(item) {
        let list = document.createElement('ul');
        list.classList.add('listpeople');
        list.innerHTML = `
        
        <li class="nodots">${item.NameSurname}</li>
        `;
            
        flexboxlist.appendChild(list);
    }
)}
// const search = document.querySelector('.searchinsite'),
//     open = document.querySelector('.searchup');
// function areasearch () {
//     search.style.display = 'block';
//     document.body.style.overflow = 'hidden';
// }

// open.addEventListener('click', areasearch);
 
AOS.init({
    duration: 1200,
  })


const project = [
    {id: 1, name: 'Crypto API', paragraph: 'Javascript html/css', img: 'cryptoApi2.png'},
    {id: 2, name: 'Booking', paragraph: 'Javascript html/css',img: 'booking.png'},
    {id: 3, name: 'Todo', paragraph: 'Javascript html/css', img: 'todo.png'},

]
project.forEach((n)=> {
    const projectDiv = document.createElement('section')
    projectDiv.classList.add( 'hidden', 'card')
    projectDiv.innerHTML = `<div class="cardText"><h1>${n.name}</h1> 
                             <p>${n.paragraph}</p></div>
                             <div><img src="/Bilder/${n.img}" alt=""></div>`

    document.getElementById('box').appendChild(projectDiv)     

})
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            /* entry.target.classList.remove('show') */
        }
    })
})
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) =>  observer.observe(el))

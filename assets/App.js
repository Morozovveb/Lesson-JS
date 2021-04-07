
let container = document.querySelector('.slider__container')
let scroll = document.querySelector('.scroll')


let div = document.createElement("div");
div.classList.add('slider__track')
div.style.transition = 'all .5s linear'
container.prepend(div);


let position = 0;
let movePosition =  div.clientWidth



let data = [
    {id: 1, src: 'assets/images/1.png'},
    {id: 2, src: 'assets/images/2.png'},
    {id: 3, src: 'assets/images/3.png'},
    {id: 4, src: 'assets/images/4.png'},
]


let url = data.map(item => item.src)
url.forEach((item,index) => {
    let img = document.createElement('div');
    img.classList.add('slider__item')
    img.style.background = `url(${item}) center top no-repeat `;
    img.style.backgroundSize = 'cover';
    div.append(img);

    let scrollItem = document.createElement('span');
    scrollItem.classList.add('scroll__item')
    scroll.append(scrollItem);


    scrollItem.addEventListener('click', function () {
        position = -(coords.left + movePosition * index);
        div.style.transform = `translateX(${position}px)`
        // console.log(scrollItem);
        scrollItem.classList.add('active')
    })
    // console.log(scrollItem);

})


let itemSearch = document.querySelectorAll('.slider__item');
itemSearch.forEach((item) => {
    item.addEventListener('click', function () {
        item.classList.remove('active')

    })
})



let coords = container.getBoundingClientRect()




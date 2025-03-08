const sec4Btns = document.getElementsByClassName('sec4box')
sec4Btns[0].classList.add('active')
sec4Btns[0].classList.remove('idle')

console.log(sec4Btns)

function changeState(element) {
    element.classList.remove('idle')
    element.classList.add('active')

    for (let i = 0; i < sec4Btns.length; i++) {
        if (sec4Btns[i] !== element) {
            sec4Btns[i].classList.remove('active')
            sec4Btns[i].classList.add('idle')
            }
            
    }
}





for (let i = 0; i < sec4Btns.length; i++) {
    sec4Btns[i].addEventListener('click', 
        () => changeState(sec4Btns[i])
    )
}
const sec4Btns = document.getElementsByClassName('sec4box')
const sec4Btns2 = document.getElementsByClassName('sec4box2')
const sec4Btns3 = document.getElementsByClassName('sec4box3')
const sec4boxDiv2 = document.getElementsByClassName('sec4boxDiv2')[0]


sec4Btns[0].classList.add('active')
sec4Btns[0].classList.remove('idle')

let sec4active1 = sec4Btns[0]

// function to change state (active/idle)
function changeState(element) {
    element.classList.remove('idle')
    element.classList.add('active')

    for (let i = 0; i < sec4Btns.length; i++) {
        if (sec4Btns[i] !== element) {
            sec4Btns[i].classList.remove('active')
            sec4Btns[i].classList.add('idle')
        }else{
            changeDiv2(i)
        }
            
    }
}

function changeDiv2(i) {
    if(i===0){
        sec4boxDiv2.innerHTML = '<button class="sec4box2 active">FundingPips Zero</button>'
    }else if(i===1){
        sec4boxDiv2.innerHTML = '<button class="sec4box2 active">FundingPips</button>'
    }else if(i===2){
        sec4boxDiv2.innerHTML = '<button class="sec4box2 active">FundingPips</button><button class="sec4box2 idle">FundingPips</button>'
    }
}


function changeState2(element) {
    element.classList.remove('idle')
    element.classList.add('active')
    console.log(element)

    for (let i = 0; i < sec4Btns2.length; i++) {
        if (sec4Btns2[i] !== element) {
            sec4Btns2[i].classList.remove('active')
            sec4Btns2[i].classList.add('idle')
            }
    }
 
}
function changeState3(element) {
    element.classList.remove('idle')
    element.classList.add('active')

    for (let i = 0; i < sec4Btns3.length; i++) {
        if (sec4Btns3[i] !== element) {
            sec4Btns3[i].classList.remove('active')
            sec4Btns3[i].classList.add('idle')
            }
    }
 
}


// addding a onclick listener
for (let i = 0; i < sec4Btns.length; i++) {
    sec4Btns[i].addEventListener('click', 
        () => changeState(sec4Btns[i])
    )
}
for (let i = 0; i < sec4Btns2.length; i++) {
    sec4Btns2[i].addEventListener('click', 
        () => changeState2(sec4Btns2[i])
    )
}
for (let i = 0; i < sec4Btns3.length; i++) {
    sec4Btns3[i].addEventListener('click', 
        () => changeState3(sec4Btns3[i])
    )
}


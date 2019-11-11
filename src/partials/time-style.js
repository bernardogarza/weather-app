let timeObj = new Date();
let hour = timeObj.getHours();
let container  = document.querySelector('.day')

let timeStyle = () => {
    if (hour > 18){
        container.classList.remove('day')
        container.classList.add('night')
    }
}

export { timeStyle };
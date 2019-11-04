let time = () => {
    let time = new Date();
    document.getElementById('local-time').innerHTML = time.toLocaleTimeString();
}
setInterval(time, 1000);

export { time };
const currentTime = () => {
    let currentTime = new Date().toLocaleTimeString();
    document.getElementById('clock').innerText = currentTime;
}

setInterval(() => {
    currentTime();
}, 1000)
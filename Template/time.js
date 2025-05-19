const dniTygodnia = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
const teraz = document.getElementById("time");
function Uptime() {
    const czas = new Date();
    let dzien = dniTygodnia[czas.getDay()];
    let godzina = czas.getHours().toString().padStart(2, '0');
    let minuta = czas.getMinutes().toString().padStart(2, '0');
    let sekunda = czas.getSeconds().toString().padStart(2, '0');
    
    teraz.innerText = `${dzien}, ${godzina}h ${minuta}:${sekunda}`;
    
}
Uptime();
setInterval(Uptime, 1000);
